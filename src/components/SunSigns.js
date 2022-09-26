import React from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import aries from "../assets/aries.jpg"
import taurus from "../assets/taurus.png"
import gemini from "../assets/gemini.png"
import cancer from "../assets/cancer.png"
import leo from "../assets/leo.png"
import virgo from "../assets/virgo.png"
import libra from "../assets/libra.png"
import scorpio from "../assets/scorpio.png"
import sag from "../assets/sag.png"
import capricorn from "../assets/capricorn.png"
import aquarius from "../assets/aquarius.png"
import pisces from "../assets/pisces.png"

function SunSigns(props) {
  const [signs, setSigns] = useState([])
  const [selectedSign, setSelectedSign] = useState(null)

  useEffect(() => {
    getSigns()
  })

  const getSigns = async () => {
    const res = await axios.get(
      `http://sandipbgt.com/theastrologer/api/sunsigns/`
    )
    setSigns(res.data)
  }

  return (
    <div className="sign-btns">
      <div className="sign">
        <img
          className="sign-img"
          src={aries}
          onClick={() => setSelectedSign(signs[0])}
        ></img>
      </div>

      <div className="sign">
        <img
          className="sign-img"
          src={taurus}
          onClick={() => setSelectedSign(signs[1])}
        ></img>
      </div>
      <div className="sign">
        <img
          className="sign-img"
          src={gemini}
          onClick={() => setSelectedSign(signs[2])}
        ></img>
      </div>
      <div className="sign">
        <img
          className="sign-img"
          src={cancer}
          onClick={() => setSelectedSign(signs[3])}
        ></img>
      </div>
      <div className="sign">
        <img
          className="sign-img"
          src={leo}
          onClick={() => setSelectedSign(signs[4])}
        ></img>
      </div>
      <div className="sign">
        <img
          className="sign-img"
          src={virgo}
          onClick={() => setSelectedSign(signs[5])}
        ></img>
      </div>
      <div className="sign">
        <img
          className="sign-img"
          src={libra}
          onClick={() => setSelectedSign(signs[6])}
        ></img>
      </div>
      <div className="sign">
        <img
          className="sign-img"
          src={scorpio}
          onClick={() => setSelectedSign(signs[7])}
        ></img>
      </div>
      <div className="sign">
        <img
          className="sign-img"
          src={sag}
          onClick={() => setSelectedSign(signs[8])}
        ></img>
      </div>
      <div className="sign">
        <img
          className="sign-img"
          src={capricorn}
          onClick={() => setSelectedSign(signs[9])}
        ></img>
      </div>
      <div className="sign">
        <img
          className="sign-img"
          src={aquarius}
          onClick={() => setSelectedSign(signs[10])}
        ></img>
      </div>
      <div className="sign">
        <img
          className="sign-img"
          src={pisces}
          onClick={() => setSelectedSign(signs[11])}
        ></img>
      </div>
    </div>
  )
}

export default SunSigns
