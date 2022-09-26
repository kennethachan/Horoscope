import React from "react"
import SunSigns from "../components/SunSigns"

function Home(props) {
  return (
    <div className="App">
      <h2> What Are The Stars Saying ?</h2>
      <SunSigns></SunSigns>
      <footer>Images by rawpixel.com</footer>
    </div>
  )
}

export default Home
