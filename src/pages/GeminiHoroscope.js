import React from "react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import gemini from "../assets/gemini.png"

function GeminiHoroscope(props) {
  let navigate = useNavigate()
  const [yesterday, setYesterday] = useState([])
  const [today, setToday] = useState([])
  const [tomorrow, setTomorrow] = useState([])

  useEffect(() => {
    getYesterday()
    getToday()
    getTomorrow()
  })

  const getYesterday = async () => {
    const res = await axios.get(
      `http://sandipbgt.com/theastrologer/api/horoscope/gemini/yesterday`
    )
    setYesterday(res.data)
  }

  const getToday = async () => {
    const res = await axios.get(
      `http://sandipbgt.com/theastrologer/api/horoscope/gemini/today`
    )
    setToday(res.data)
  }

  const getTomorrow = async () => {
    const res = await axios.get(
      `http://sandipbgt.com/theastrologer/api/horoscope/gemini/tomorrow`
    )
    setTomorrow(res.data)
  }

  return (
    <div>
      <h2> What Are The Stars Saying ?</h2>
      <p
        className="back"
        onClick={() => {
          navigate("/")
        }}
      >
        Back to Sun Signs
      </p>

      <img className="sign-details" src={gemini}></img>

      <h1 className="sign-title">Gemini</h1>
      <hr className="hr"></hr>

      <div className="horoscope">
        <h3>Yesterday</h3>
        <p>{yesterday.horoscope}</p>
      </div>

      <div className="horoscope">
        <h3>Today</h3>
        <p>{today.horoscope}</p>
      </div>

      <div className="horoscope">
        <h3>Tomorrow</h3>
        <p>{tomorrow.horoscope}</p>
      </div>
    </div>
  )
}

export default GeminiHoroscope
