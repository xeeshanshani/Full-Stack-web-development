import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function Textform(props) {
    const [text, setText] = useState("Enter text here");
    const handleOnChange = (event) => {
        console.log("Hangle on Change");
        setText(event.target.value);
    }
    const handleUpClick = () => {
        console.log("Uppercase was clicked ");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        console.log("Lowercase was clicked ");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = () => {
        console.log("Clear was clicked ");
        let newText = "";
        setText(newText);
    }
    const handleCopy = () => {
        console.log("Copy was clicked ");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = () => {
        console.log("Extra Spaces was clicked ");
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    return (
        <>
            <div className="container">
                <div className="mb-3">
                    <h1 className='mb3'>{props.heading}</h1>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="20" value={text} onChange={handleOnChange}></textarea>
                    <button type="button" className="btn btn-primary my-3" onClick={handleUpClick}>Upercase</button>
                    <button type="button" className="btn btn-primary my-3 mx-3" onClick={handleLoClick}>Lowercase</button>
                    <button type="button" className="btn btn-primary my-3 mx-3" onClick={handleClearClick}>Clear</button>
                    <button type="button" className="btn btn-primary my-3 mx-3" onClick={handleCopy}>Copy</button>
                    <button type="button" className="btn btn-primary my-3 mx-3" onClick={handleExtraSpaces}>Extra Spaces</button>

                </div>
                {/* counting the words and characters */}
                <div className='container my-3'>
                    <h2>Your text summary</h2>
                    <p>{text.split(" ").length} words and {text.length} characters</p>
                    <p>{0.008 * text.split(" ").length} Minutes read</p>
                    <h2>Preview</h2>
                    <p>{text}</p>

                </div>
            </div>

        </>
    )
}


