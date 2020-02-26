import React, {useState} from 'react'
import './App.css'

export default function App() {
    const [topLeft, setTopLeft] = useState(0)
    const [topRight, setTopRight] = useState(0)
    const [bottomLeft, setBottomLeft] = useState(0)
    const [bottomRight, setBottomRight] = useState(0)

    function getBorderRadius() {
        return `${topLeft}px ${topRight}px ${bottomLeft}px ${bottomRight}px`
    }

    return (
        <>
            <div id="form-container">
                <h1>Border Radius Previewer</h1>
                <div id="border-container">
                    <div id="border-radius-element" style={{'borderRadius': getBorderRadius()}}></div>

                    <input type="number" id="top-left" placeholder="0" min="0" max="1000" onChange={(e) => setTopLeft(e.target.value)} />
                    <input type="number" id="top-right" placeholder="0" min="0" max="1000" onChange={(e) => setTopRight(e.target.value)} />
                    <input type="number" id="bottom-left" placeholder="0" min="0" max="1000" onChange={(e) => setBottomLeft(e.target.value)} />
                    <input type="number" id="bottom-right" placeholder="0" min="0" max="1000" onChange={(e) => setBottomRight(e.target.value)} />
                </div>
            </div>
        </>
    )
}