import React from "react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import aries from "../assets/aries.jpg"

function AriesHoroscope(props) {
  let navigate = useNavigate()
  const sign = "Aries"
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
      <h2 className="title">Daily Astrologie</h2>
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
      <p>March 21 - April 19</p>
      <hr className="hr"></hr>

      <h3>{currentDate}</h3>
      {horoscopeData && (
        <div className="horoscope-content">
          <table className="horoscope-table">
            <thead>
              <tr>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Forecast</strong></td>
                <td>{horoscopeData.forecast}</td>
              </tr>
              <tr>
                <td><strong>Affirmation</strong></td>
                <td>{horoscopeData.affirmation}</td>
              </tr>
              <tr>
                <td><strong>Personality Traits</strong></td>
                <td>{horoscopeData.personality_traits.join(", ")}</td>
              </tr>
              <tr>
                <td><strong>Lucky Color</strong></td>
                <td>{horoscopeData.lucky_color}</td>
              </tr>
              <tr>
                <td><strong>Lucky Time</strong></td>
                <td>{horoscopeData.lucky_time}</td>
              </tr>
              <tr>
                <td><strong>Mythology</strong></td>
                <td>{horoscopeData.mythology}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
    
  )
}

export default AriesHoroscope
