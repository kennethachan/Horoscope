import React from "react"
import { useEffect, useState } from "react"
import axios from "axios"
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
      <button className="sign" onClick={() => setSelectedSign(signs[0])}>
        {signs[0]}
      </button>
      <button className="sign" onClick={() => setSelectedSign(signs[1])}>
        {" "}
        {signs[1]}
      </button>
      <button className="sign" onClick={() => setSelectedSign(signs[2])}>
        {signs[2]}
      </button>
      <button className="sign" onClick={() => setSelectedSign(signs[3])}>
        {signs[3]}
      </button>
      <button className="sign" onClick={() => setSelectedSign(signs[4])}>
        {signs[4]}
      </button>
      <button className="sign" onClick={() => setSelectedSign(signs[5])}>
        {signs[5]}
      </button>
      <button className="sign" onClick={() => setSelectedSign(signs[6])}>
        {signs[6]}
      </button>
      <button className="sign" onClick={() => setSelectedSign(signs[7])}>
        {signs[7]}
      </button>
      <button className="sign" onClick={() => setSelectedSign(signs[8])}>
        {signs[8]}
      </button>
      <button className="sign" onClick={() => setSelectedSign(signs[9])}>
        {signs[9]}
      </button>
      <button className="sign" onClick={() => setSelectedSign(signs[10])}>
        {signs[10]}
      </button>
      <button className="sign" onClick={() => setSelectedSign(signs[11])}>
        {signs[11]}
      </button>
    </div>
  )
}

export default SunSigns
