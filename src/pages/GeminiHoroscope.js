import React from "react"
import { useEffect, useState, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import gemini from "../assets/gemini.png"

function GeminiHoroscope(props) {
  let navigate = useNavigate()
  const sign = "Gemini"
  const [horoscopeData, setHoroscopeData] = useState(null);
  const openaiApiKey = process.env.REACT_APP_API_KEY;

  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Memoize the getHoroscope function using useCallback
 const getHoroscope = useCallback(async () => {
  try {
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
               "forecast": "Horoscope forecast for the day here...",
                "affirmation": "Affirmation of the day here...",
                "lucky_time": "Random lucky time of the day here...",
                "lucky_color": "Lucky color of the day here...",
                "personality_traits": ["Trait1", "Trait2", "Trait3"],
                "mythology": "Mythology history here..."
              }`
          }
        ],
        max_tokens: 300,
        temperature: 1.0,
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
    setHoroscopeData(parsedData);
  } catch (error) {
    console.error("Error fetching horoscope:", error);
  }
}, [sign, openaiApiKey]); // Only re-create getHoroscope if `sign` or `openaiApiKey` changes

// useEffect hook to fetch horoscope data
useEffect(() => {
  getHoroscope();
}, [getHoroscope]); // Run getHoroscope when it's available (memoized)  
  
  return (
    <div className="horoscope-container">
   <h2 className="title back" onClick={() => {
          navigate("/")
        }}>Daily Astrologie</h2>
    
      <img alt="gemini" className="sign-details" src={gemini}></img>

      <h1 className="sign-title">Gemini</h1>
      <p>May 21 – June 20</p>
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

export default GeminiHoroscope
