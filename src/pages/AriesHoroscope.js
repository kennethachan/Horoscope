import React from "react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import aries from "../assets/aries.jpg"

function AriesHoroscope(props) {
  const sign = "Aries"
  const [horoscopeData, setHoroscopeData] = useState(null);
  const [error, setError] = useState(null);

  const openaiApiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    getHoroscope();
  }, []);

  const getHoroscope = async () => {
    if (!openaiApiKey) {
      console.error("Missing API key");
      setError("API key is missing");
      return;
    }

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
      console.log(jsonString)
      
        const parsedData = JSON.parse(jsonString);
        
    }       
  
         
  return (
    <div className="horoscope-container">
      {/* <h2 className="title">Daily Astrologie</h2>
      <p
        className="back"
        onClick={() => {
          navigate("/")
        }}
      >
        Home
      </p>
      <img className="sign-details" src={aries}></img>

      <h1 className="sign-title">Aries</h1>
      <p>{today.date_range}</p>
      <hr className="hr"></hr>

      <div className="horoscope">
        <h3>{today.current_date}</h3>
        <p>{today.description}</p>

        <div className="horoscope-details">
          <p>
            <span className="bold">Mood:</span>
            <br></br>
            {today.mood}
          </p>
          <p>
            <span className="bold">Lucky Number:</span> <br></br>{" "}
            {today.lucky_number}
          </p>
          <p>
            <span className="bold">Lucky Time:</span> <br></br>{" "}
            {today.lucky_time}
          </p>
        </div>
      </div> */}
    </div>
  )
}

export default AriesHoroscope
