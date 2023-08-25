import React, { useState } from 'react'
import "../component/TrafficLight.css"

const TrafficLight = () => {
    
    const [color, setColor] = useState("")

  return (
    <div className="container">
        <div className="wire"></div>

        <div className="lightBox">
            <div onClick={() => setColor("red")} className={color == "red" ? "redOn" : "redLight"}></div>
        </div>
        <div className="lightBox">
            <div onClick={() => setColor("yellow")} className={color == "yellow" ? "yellowOn" : "yellowLight"}></div>
        </div>
        <div className="lightBox">
            <div onClick={() => setColor("green")} className={color == "green" ? "greenOn" : "greenLight"}></div>
        </div>
    </div>
  )
}

export default TrafficLight
