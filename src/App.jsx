import React, {useState} from 'react'
import './App.css'

export default function App() {
    const [topLeft, setTopLeft] = useState(0)
    const [topRight, setTopRight] = useState(0)
    const [bottomRight, setBottomRight] = useState(0)
    const [bottomLeft, setBottomLeft] = useState(0)

    function getBorderRadius() {
        return `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`
    }

    function copyToClip() {
        const copyResult = document.getElementById('text-result')
        copyResult.select()
        copyResult.setSelectionRange(0, 99999)
        document.execCommand('copy')
    }

    return (
        <>
            <div id="form-container">
                <h1>Border Radius Previewer</h1>

                <div id="border-container">
                    <div id="border-radius-element" style={{'borderRadius': getBorderRadius()}}>
                        <div id="style-result">
                            <div>border-radius: {getBorderRadius()}</div>
                            <div>-webkit-border-radius: {getBorderRadius()}</div>
                            <div>-moz-border-radius: {getBorderRadius()}</div>
                        </div>
                        {/* <textarea id="text-result" defaultValue={`border-radius: ${getBorderRadius()} \n-webkit-border-radius: ${getBorderRadius()} \n-moz-border-radius: ${getBorderRadius()}`}
                        ></textarea> */}
                        <input id="text-result" value={`border-radius: ${getBorderRadius()} \n-webkit-border-radius: ${getBorderRadius()} \n-moz-border-radius: ${getBorderRadius()}`} />
                        <button onClick={() => copyToClip()}>Copy to clipboard</button>
                    </div>

                    <input type="number" id="top-left" placeholder="0" min="0" max="1000" onChange={(e) => setTopLeft(e.target.value)} />
                    <input type="number" id="top-right" placeholder="0" min="0" max="1000" onChange={(e) => setTopRight(e.target.value)} />
                    <input type="number" id="bottom-right" placeholder="0" min="0" max="1000" onChange={(e) => setBottomRight(e.target.value)} />
                    <input type="number" id="bottom-left" placeholder="0" min="0" max="1000" onChange={(e) => setBottomLeft(e.target.value)} />
                </div>
            </div>
        </>
    )
}