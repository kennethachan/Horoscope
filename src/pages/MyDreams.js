import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function DreamInterpreter() {
  const [dream, setDream] = useState("");
  const [interpretation, setInterpretation] = useState(null);
  const [loading, setLoading] = useState(false);
  const openaiApiKey = process.env.REACT_APP_API_KEY; 
  let navigate = useNavigate();
  

  const analyzeDream = async () => {
    if (!dream.trim()) {
      alert("Please enter your dream first.");
      return;
    }

    setLoading(true);
    setInterpretation(null);

    try {
        const response = await axios.post(
          "https://api.openai.com/v1/chat/completions",
          {
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "system",
                content:
                  "You are a dream interpreter with deep knowledge of symbolism, psychology, and spiritual meanings. Your interpretations are insightful, and rooted in mythology and subconscious analysis.",
              },
              {
                role: "user",
                content: `I had the following dream: "${dream}". What does it mean? Provide a deep and mystical interpretation that includes psychological and symbolic insights.`,
              },
            ],
            max_tokens: 380,
            temperature: 0.8,
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
  
        const gptResponse = response.data.choices[0]?.message?.content.trim();
        setInterpretation(gptResponse);
      } catch (error) {
        console.error("Error analyzing dream:", error);
        setInterpretation("Sorry, I couldn't interpret your dream. Please try again.");
      } finally {
        setLoading(false);
      }
    };
  
    const resetForm = () => {
      setDream("");
      setInterpretation(null);
    };
  
    return (
    <div>
         <h2 className="title">
                <span className="title back" onClick={() => navigate("/")}>Daily Astrologie</span>
            </h2>
            <div className="dream-wrapper">
                 <div className="dream-container">
        {!interpretation && !loading && (
          <>
            <p>Enter your dream below to reveal its hidden meanings.</p>
  
            <textarea
              className="dream-input"
              value={dream}
              onChange={(e) => setDream(e.target.value)}
              placeholder="Describe your dream in detail..."
            ></textarea>
  
            <button className="btn" onClick={analyzeDream}>
              Interpret
            </button>
          </>
        )}
  
        {loading && (
          <div className="loading-container">
            <p className="loading-text">Deciphering the symbols of your subconscious...</p>
            <div className="loading-spinner"></div>
          </div>
        )}
  
        {interpretation && (
          <div className="dream-result fade-in">
            <h3>Dream Interpretation:</h3>
            <p>{interpretation}</p>
            <button className="btn" onClick={resetForm}>
              New Dream
            </button>
          </div>
        )}
      </div>
            </div>

    </div>
     
    );
  }
export default DreamInterpreter;
