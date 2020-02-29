import React, {useState, useEffect} from 'react'
import './App.css'

export default function App() {
    const [eightDimension, setEightDimensions] = useState(false)
    const [topLeft, setTopLeft] = useState(0)
    const [topLeftAlt, setTopLeftAlt] = useState(0)
    const [topRight, setTopRight] = useState(0)
    const [topRightAlt, setTopRightAlt] = useState(0)
    const [bottomRight, setBottomRight] = useState(0)
    const [bottomRightAlt, setBottomRightAlt] = useState(0)
    const [bottomLeft, setBottomLeft] = useState(0)
    const [bottomLeftAlt, setBottomLeftAlt] = useState(0)

    useEffect(() => {
        const borderElem = document.getElementById('border-radius-element')

        if(eightDimension==='true') {
            borderElem.style.borderRadius = `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px / ${topLeftAlt}px ${topRightAlt}px ${bottomRightAlt}px ${bottomLeftAlt}px`
        } else {
            borderElem.style.borderRadius = `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`
        }
    })

    function getBorderRadius() {
        if(eightDimension==='true') {
            return `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px / ${topLeftAlt}px ${topRightAlt}px ${bottomRightAlt}px ${bottomLeftAlt}px`
        } else {
            return `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`
        }
    }

    function printCssformat() {
        return `border-radius: ${getBorderRadius()} \n-webkit-border-radius: ${getBorderRadius()} \n-moz-border-radius: ${getBorderRadius()}`
    }

    function copyToClip() {
        const copyResult = document.getElementById('text-result')
        copyResult.value = printCssformat()
        copyResult.select()
        copyResult.setSelectionRange(0, 99999)
        document.execCommand('copy')
    }

    function changeDimension(e) {
        // const radio = document.getElementsByClassName('choose-dimension')
        setEightDimensions(e.target.value)
    }

    return (
        <>
            <div id="form-container">
                <h1>Border Radius Previewer</h1>

                <div id="border-container">
                    <div id="border-radius-element">
                        <div id="style-result">
                            <div>border-radius: {getBorderRadius()}</div>
                            <div>-webkit-border-radius: {getBorderRadius()}</div>
                            <div>-moz-border-radius: {getBorderRadius()}</div>
                        </div>
                        <input id="text-result" />
                        <div id="radio-items">
                            <input type="radio" name="choose-dimension" id="four-d" defaultValue={false} onChange={(e) => changeDimension(e)} defaultChecked />
                            <label htmlFor="four-d">4 dimensions</label>
                            <input type="radio" name="choose-dimension" id="eight-d" defaultValue={true} onChange={(e) => changeDimension(e)} />
                            <label htmlFor="eight-d">8 dimensions</label>
                        </div>
                        <button onClick={() => copyToClip()}>Copy to clipboard</button>
                    </div>

                    <input type="number" id="top-left" placeholder="0" min="0" max="1000" onChange={(e) => setTopLeft(e.target.value)} />
                    <input type="number" id="top-left-alt" style={{display: eightDimension==='true' ? 'block' : 'none'}} placeholder="0" min="0" max="1000" onChange={(e) => setTopLeftAlt(e.target.value)} />
                    <input type="number" id="top-right" placeholder="0" min="0" max="1000" onChange={(e) => setTopRight(e.target.value)} />
                    <input type="number" id="top-right-alt" style={{display: eightDimension==='true' ? 'block' : 'none'}} placeholder="0" min="0" max="1000" onChange={(e) => setTopRightAlt(e.target.value)} />
                    <input type="number" id="bottom-right" placeholder="0" min="0" max="1000" onChange={(e) => setBottomRight(e.target.value)} />
                    <input type="number" id="bottom-right-alt" style={{display: eightDimension==='true' ? 'block' : 'none'}} placeholder="0" min="0" max="1000" onChange={(e) => setBottomRightAlt(e.target.value)} />
                    <input type="number" id="bottom-left" placeholder="0" min="0" max="1000" onChange={(e) => setBottomLeft(e.target.value)} />
                    <input type="number" id="bottom-left-alt" style={{display: eightDimension==='true' ? 'block' : 'none'}} placeholder="0" min="0" max="1000" onChange={(e) => setBottomLeftAlt(e.target.value)} />
                </div>
            </div>
        </>
    )
}