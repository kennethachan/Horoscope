import React from "react"
import { useEffect, useState, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import gemini from "../assets/gemini.png"

function GeminiHoroscope(props) {
  let navigate = useNavigate()
  const sign = "Gemini"
  const [horoscopeData, setHoroscopeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const openaiApiKey = process.env.REACT_APP_API_KEY;

  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const getHoroscope = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content:
                "You are a mystical astrology expert with deep knowledge of celestial alignments, zodiac mythology, and cosmic energy. Your horoscopes are poetic, insightful, and infused with wisdom. Always respond with a valid JSON object, without any extra text or formatting.",
            },
            {
              role: "user",
              content: `Generate a unique, insightful, and poetic daily horoscope for '${sign}' in valid JSON format only. The horoscope should feel magical and deeply connected to the sign's ruling planet and element. Be creative and imaginative while maintaining authenticity.
              
              Return a JSON object structured like this:

              {
                "today": "A vivid and inspiring horoscope message tailored to '${sign}' with emotional depth and cosmic wisdom...",
                "meditation": "A meaningful and uplifting affirmation that aligns with '${sign}''s energy...",
                "strengths": "Describe '${sign}''s strengths and challenges, highlighting their unique traits...",
                "challenges": "Describe '${sign}''s strengths and challenges, highlighting their unique traits...",
                "lucky_time": "A mystical, random time of the day... Ex. "Today you will find luck in the morning hours between 8:00 AM and 9:00 AM" or "Today you will find luck at 4:50 PM",
                "mythology": "A long & intriguing astrological myth or legend tied to '${sign}', its ruling planet, or its celestial history..."
              }

              Return only pure JSON. No markdown, no explanations, and no extra text.`,
            },
          ],
          max_tokens: 400,
          temperature: 1.1,
          top_p: 0.8,
        },
        {
          headers: {
            Authorization: `Bearer ${openaiApiKey}`,
            "Content-Type": "application/json",
          },
          timeout: 10000,
        }
      );

      let gptResponse = response.data.choices[0]?.message?.content.trim();
      console.log("GPT Response:", gptResponse);

      if (gptResponse.startsWith("```json")) {
        gptResponse = gptResponse.replace(/```json|```/g, "").trim();
      }

      const parsedData = JSON.parse(gptResponse);

      if (parsedData.today && parsedData.meditation) {
        setHoroscopeData(parsedData);
      } else {
        throw new Error("Invalid JSON structure received from OpenAI API.");
      }
    } catch (error) {
      console.error("Error fetching horoscope:", error);
      setHoroscopeData(null);
    } finally {
      setLoading(false);
    }
  }, [sign, openaiApiKey]);

  useEffect(() => {
    getHoroscope();
  }, [getHoroscope]);

  // Loading Messages (Mystical Feel)
  const loadingMessages = [
    "The cosmos whispers your fate...",
    "Celestial energies are aligning...",
    "The stars are weaving your destiny...",
    "Mystical forces are revealing their secrets...",
    "Astrological wisdom is unfolding..."
  ];

  return (
    <div className="horoscope-container">
      <h2 className="title back" onClick={() => navigate("/")}>
        Daily Astrologie
      </h2>
      {loading ? (
        <div className="loading-container">
          <p className="loading-text">
            {loadingMessages[Math.floor(Math.random() * loadingMessages.length)]}
          </p>
          <div className="loading-spinner"></div>
        </div>
      ) : (
        horoscopeData && (
          <div className="fade-in">
            <img alt="aries" className="sign-details" src={gemini}></img>
            <h1 className="sign-title">Gemini</h1>
            <p>May 21 - June 20</p>
            <hr className="hr"></hr>

            <div className="horoscope">
              <h3>{currentDate}</h3>
              <p className="attribute">
                <span className="bold">Today: </span>{horoscopeData.today}
              </p>
              <p className="attribute">
                <span className="bold">Meditation: </span>{horoscopeData.meditation}
              </p>
              <p className="attribute">
                <span className="bold">Strengths: </span>{horoscopeData.strengths}
              </p>
              <p className="attribute">
                <span className="bold">Challenges: </span>{horoscopeData.challenges}
              </p>
              <p className="attribute">
                <span className="bold">Lucky Time: </span> {horoscopeData.lucky_time}
              </p>
              <p className="attribute">
                <span className="bold">Mythology: </span> {horoscopeData.mythology}
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default GeminiHoroscope
