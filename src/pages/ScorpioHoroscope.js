import React from "react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import scorpio from "../assets/scorpio.png"

function ScorpioHoroscope(props) {
  let navigate = useNavigate()
  const sign = "Scorpio"
  const [horoscopeData, setHoroscopeData] = useState(null);
  const openaiApiKey = process.env.REACT_APP_API_KEY;

  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    getHoroscope();
  }, []);

  const getHoroscope = async () => {

      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are an astrology expert." },
            {
              role: "user",
              content: `Generate a daily horoscope for '${sign}' in JSON format:
              {
                "forecast": "Daily horoscope forecast here...",
                "affirmation": "Daily affirmation here...",
                "lucky_time": "Lucky time here...",
                "lucky_color": "Lucky color here...",
                "personality_traits": ["Trait1", "Trait2", "Trait3"],
                "mythology": "Mythology history here..."
              }`
            }
          ],
          max_tokens: 300,
          temperature: 0.7,
        },
        {
          headers: {
            "Authorization": `Bearer ${openaiApiKey}`,
            "Content-Type": "application/json",
          },
        }
      );

      const jsonString = response.data.choices[0]?.message?.content.trim();
      
        const parsedData = JSON.parse(jsonString);
        setHoroscopeData(parsedData)
    }       
  
  return (
    <div className="horoscope-container">
   <h2 className="title back" onClick={() => {
          navigate("/")
        }}>Daily Astrologie</h2>
    
      <img className="sign-details" src={scorpio}></img>

      <h1 className="sign-title">Scorpio</h1>
      <p>October 23 – November 21</p>
      <hr className="hr"></hr>

      {horoscopeData && (
      <div className="horoscope">
        <h3>{currentDate}</h3>
        <p className="attribute"><span className="bold">Forecast: </span>{horoscopeData.forecast}</p>
        <p className="attribute"><span className="bold">Affirmation: </span>{horoscopeData.affirmation}</p>
        <p className="attribute"> <span className="bold">Traits: </span>{horoscopeData.personality_traits.join(", ")}</p>
        <p className="attribute"><span className="bold">Lucky Color: </span> {" "}{horoscopeData.lucky_color}</p>
        <p className="attribute"><span className="bold">Lucky Time: </span> {" "}{horoscopeData.lucky_time}</p>
        <p className="attribute"><span className="bold">Mythology: </span> {" "}{horoscopeData.mythology}</p>
      </div>
      )}

    </div>
    
  )
}


export default ScorpioHoroscope
