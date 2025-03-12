import React from "react"
import { useEffect, useState, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import libra from "../assets/libra.png"

function LibraHoroscope(props) {
  let navigate = useNavigate()
  const sign = "Libra"
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
            {
              role: "system",
              content: "You are a mystical astrology expert with deep knowledge of celestial alignments, zodiac mythology, and cosmic energy. Your horoscopes are poetic, insightful, and infused with wisdom. Always respond with a valid JSON object, without any extra text or formatting."
            },
            {
              role: "user",
              content: `Generate a unique, insightful, and poetic daily horoscope for '${sign}' in valid JSON format only. The horoscope should feel magical and deeply connected to the sign's ruling planet and element. Be creative and imaginative while maintaining authenticity.
              
              Return a JSON object structured like this:
  
              {
                "forecast": "A vivid and inspiring horoscope message tailored to '${sign}' with emotional depth and cosmic wisdom...",
                "affirmation": "A meaningful and uplifting affirmation that aligns with '${sign}''s energy...",
                "lucky_time": "A mystical, poetic time of the day...",
                "lucky_color": "A color that resonates with '${sign}''s celestial influence and energy...",
                "personality_traits": ["A creative list of unique traits specific to '${sign}'"],
                "mythology": "An intriguing astrological myth or legend tied to '${sign}', its ruling planet, or its celestial history..."
              }
  
              Return only pure JSON. No markdown, no explanations, and no extra text.`
            }
          ],
          max_tokens: 300,
          temperature: 1.1,
          top_p: 0.8
        },
        {
          headers: {
            "Authorization": `Bearer ${openaiApiKey}`,
            "Content-Type": "application/json",
          },
          timeout: 10000, 
        }
      );
  
      // Extract the response content
      let gptResponse = response.data.choices[0]?.message?.content.trim();
  
      // Ensure the response is pure JSON by removing any markdown formatting
      if (gptResponse.startsWith("```json")) {
        gptResponse = gptResponse.replace(/```json|```/g, "").trim();
      }
  
      // Attempt to parse JSON safely
      const parsedData = JSON.parse(gptResponse);
  
      // Ensure the response contains expected fields
      if (parsedData.forecast && parsedData.affirmation) {
        setHoroscopeData(parsedData);
      } else {
        throw new Error("Invalid JSON structure received from OpenAI API.");
      }
  
    } catch (error) {
      console.error("Error fetching horoscope:", error);
      setHoroscopeData(null); // Reset horoscope data on error
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
    
      <img alt="libra" className="sign-details" src={libra}></img>

      <h1 className="sign-title">Libra</h1>
      <p>September 23 – October 22</p>
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

export default LibraHoroscope
