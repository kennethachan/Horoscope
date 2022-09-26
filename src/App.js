import { useEffect, useState } from "react"
import axios from "axios"
import "./App.css"
import SunSigns from "../src/components/SunSigns"

function App() {
  return (
    <div className="App">
      <h2>Select A Sign</h2>
      <SunSigns></SunSigns>
    </div>
  )
}

export default App
