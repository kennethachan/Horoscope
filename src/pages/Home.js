import React from "react"
import SunSigns from "../components/SunSigns"
import { useNavigate } from "react-router-dom"

function Home(props) {
   let navigate = useNavigate()

  return (
    <div className="App">
      <h2 className="title">Daily Astrologie</h2>
      <p className="whatsign" onClick={() => {
          navigate("/whatsmysign")
        }}>Find My Sign</p>
         <p className="" onClick={() => {
          navigate("/whatsmysign")
        }}>Interpret My Dream</p>
      <SunSigns></SunSigns>
      <footer>Images by rawpixel.com</footer>
    </div>
  )
}

export default Home
