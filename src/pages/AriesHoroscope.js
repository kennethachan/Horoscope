import React from "react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import aries from "../assets/aries.jpg"

function AriesHoroscope(props) {
  let navigate = useNavigate()
  const apiKey = 'YOUR_OPENAI_API_KEY';
  // const prompt = `Generate a horoscope for the zodiac sign ${sign} for today.`;
  const [today, setToday] = useState([])

  useEffect(() => {
    getToday()
  })

  const getToday = async () => {
console.log(process.env.REACT_APP_API_KEY)
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
      </div>
    </div>
  )
}

export default AriesHoroscope
