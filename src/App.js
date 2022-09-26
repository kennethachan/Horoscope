import "./App.css"
import { Route, Routes } from "react-router"
import Home from "../src/pages/Home"
import AriesHoroscope from "./pages/AriesHoroscope"
import TaurusHoroscope from "./pages/TaurusHoroscope"
import GeminiHoroscope from "./pages/GeminiHoroscope"
import CancerHoroscope from "./pages/CancerHoroscope"
import LeoHoroscope from "./pages/LeoHoroscope"
import VirgoHoroscope from "./pages/VirgoHoroscope"
import LibraHoroscope from "./pages/LibraHoroscope"
import ScorpioHoroscope from "./pages/ScorpioHoroscope"
import SagHoroscope from "./pages/SagHoroscope"
import CapricornHoroscope from "./pages/CapricornHoroscope"
import AquariusHoroscope from "./pages/AquariusHoroscope"
import PiscesHoroscope from "./pages/PiscesHoroscope"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aries-horoscope" element={<AriesHoroscope />} />
        <Route path="/taurus-horoscope" element={<TaurusHoroscope />} />
        <Route path="/gemini-horoscope" element={<GeminiHoroscope />} />
        <Route path="/cancer-horoscope" element={<CancerHoroscope />} />
        <Route path="/leo-horoscope" element={<LeoHoroscope />} />
        <Route path="/virgo-horoscope" element={<VirgoHoroscope />} />
        <Route path="/libra-horoscope" element={<LibraHoroscope />} />
        <Route path="/scorpio-horoscope" element={<ScorpioHoroscope />} />
        <Route path="/sag-horoscope" element={<SagHoroscope />} />
        <Route path="/capricorn-horoscope" element={<CapricornHoroscope />} />
        <Route path="/aquarius-horoscope" element={<AquariusHoroscope />} />
        <Route path="/pisces-horoscope" element={<PiscesHoroscope />} />
      </Routes>
    </div>
  )
}

export default App
