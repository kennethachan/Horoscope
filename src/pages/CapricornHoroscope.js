import React from "react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import capricorn from "../assets/capricorn.png"

function CapricornHoroscope(props) {
  let navigate = useNavigate()
  const [today, setToday] = useState([])

  useEffect(() => {
    getToday()
  })

  const getToday = async () => {
    const res = await axios.post(
      `https://aztro.sameerkumar.website/?sign=capricorn&day=today`
    )
    setToday(res.data)
  }

  return (
    <div>
      <h2>Daily Astrologie</h2>
      <p
        className="back"
        onClick={() => {
          navigate("/")
        }}
      >
        Home
      </p>
      <img className="sign-details" src={capricorn}></img>

      <h1 className="sign-title">Capricorn</h1>
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

export default CapricornHoroscope
