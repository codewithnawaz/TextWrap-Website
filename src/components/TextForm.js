import { useState } from "react"

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        SetText(newText)
        props.showAlert("Converted to uppercase !")

    }
    const handleloClick = () => {
        let newText = text.toLowerCase();
        SetText(newText)
        props.showAlert("Converted to lowercase !")
    }
    const handleClearClick = () => {
        let newText = '';
        SetText(newText)
        props.showAlert("Text Cleared !")
    }
    const handleCopyClick = () => {
        var text = document.getElementById("TextBox")
        text.select()
        document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text copied to clip board !")
    }
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        SetText(newText.join(" "))
        props.showAlert("Extra spaces removed !")
    }

    const handleOnChange = (event) => {
        SetText(event.target.value);
    }
    const [text, SetText] = useState("");
    return (
        <>
            <div>
                <h1>{props.heading}</h1>
                <div className="mb-3" >
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="TextBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick} >Convert to UpperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleloClick} >Convert to LowerCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick} >Clear text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCopyClick} >Copy text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace} >Remove extra spaces</button>
            </div>
            <div className="container my-3" >
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview !"}</p>
            </div>
        </>
    )
}
