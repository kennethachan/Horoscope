import React from "react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
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
  let navigate = useNavigate()


  return (
    <div className="sign-btns">
      <div className="sign">
        <img
          className="sign-img"
          src={aries}
          onClick={() => {
            navigate(`/aries-horoscope`)
          }}
        ></img>
      </div>

      <div className="sign">
        <img
          className="sign-img"
          src={taurus}
          onClick={() => {
            navigate(`/taurus-horoscope`)
          }}
        ></img>
      </div>
      <div className="sign">
        <img
          className="sign-img"
          src={gemini}
          onClick={() => {
            navigate(`/gemini-horoscope`)
          }}
        ></img>
      </div>
      <div className="sign">
        <img
          className="sign-img"
          src={cancer}
          onClick={() => {
            navigate(`/cancer-horoscope`)
          }}
        ></img>
      </div>
      <div className="sign">
        <img
          className="sign-img"
          src={leo}
          onClick={() => {
            navigate(`/leo-horoscope`)
          }}
        ></img>
      </div>
      <div className="sign">
        <img
          className="sign-img"
          src={virgo}
          onClick={() => {
            navigate(`/virgo-horoscope`)
          }}
        ></img>
      </div>
      <div className="sign">
        <img
          className="sign-img"
          src={libra}
          onClick={() => {
            navigate(`/libra-horoscope`)
          }}
        ></img>
      </div>
      <div className="sign">
        <img
          className="sign-img"
          src={scorpio}
          onClick={() => {
            navigate(`/scorpio-horoscope`)
          }}
        ></img>
      </div>
      <div className="sign">
        <img
          className="sign-img"
          src={sag}
          onClick={() => {
            navigate(`/sag-horoscope`)
          }}
        ></img>
      </div>
      <div className="sign">
        <img
          className="sign-img"
          src={capricorn}
          onClick={() => {
            navigate(`/capricorn-horoscope`)
          }}
        ></img>
      </div>
      <div className="sign">
        <img
          className="sign-img"
          src={aquarius}
          onClick={() => {
            navigate(`/aquarius-horoscope`)
          }}
        ></img>
      </div>
      <div className="sign">
        <img
          className="sign-img"
          src={pisces}
          onClick={() => {
            navigate(`/pisces-horoscope`)
          }}
        ></img>
      </div>
    </div>
  )
}

export default SunSigns
