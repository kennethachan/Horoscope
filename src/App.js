import { useEffect, useState } from "react"
import axios from "axios"
import "./App.css"
import SunSigns from "../src/components/SunSigns"

function App() {
  return (
    <div className="App">
      <h2> What Are the Stars Saying ?</h2>
      <SunSigns></SunSigns>
      <footer>Images by rawpixel.com</footer>
    </div>
  )
}

export default App
