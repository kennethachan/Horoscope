import "./App.css"
import { Route, Routes } from "react-router"
import Home from "../src/pages/Home"
import AriesHoroscope from "./pages/AriesHoroscope"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aries-horoscope" element={<AriesHoroscope />} />
      </Routes>
    </div>
  )
}

export default App
