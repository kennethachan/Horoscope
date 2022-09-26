import React from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import time from "../assets/time.webp"

function HoroscopeOptions(props) {
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
      `http://sandipbgt.com/theastrologer/api/horoscope/aries/yesterday`
    )
    setYesterday(res.data)
  }

  const getToday = async () => {
    const res = await axios.get(
      `http://sandipbgt.com/theastrologer/api/horoscope/aries/today`
    )
    setToday(res.data)
  }

  const getTomorrow = async () => {
    const res = await axios.get(
      `http://sandipbgt.com/theastrologer/api/horoscope/aries/tomorrow`
    )
    setTomorrow(res.data)
  }

  return (
    <div>
      <img src={time}></img>
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

export default HoroscopeOptions
