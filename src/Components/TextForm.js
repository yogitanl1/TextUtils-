import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper Case", "success");
    }
    const handleLoClick = ()=>{
        //console.log("UpperCase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower Case", "success");
    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Text is cleared", "success");
    }
    const handleOnChange = (event)=>{
        //console.log("On Change");
        setText(event.target.value);
    } 
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text is copied", "success");
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces has been removed", "success");
    }
    const [text, setText] = useState(' ');
  return(
    <>
    <div className='container' style= {{color: props.mode === 'dark' ? 'white': '#042743'}}>
        <h1> {props.heading} </h1>
        <div className="mb-3">
            <textarea className="form-control" value ={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white': '#042743'}}id="myBox" rows="8"> </textarea>
        </div>
        <button className='btn btn-primary mx-2'onClick={handleUpClick}>convert to UpperCase </button>
        <button className='btn btn-primary mx-2'onClick={handleLoClick}>convert to LowerCase</button>
        <button className='btn btn-primary mx-2'onClick={handleClearClick}>Clear text</button>
        <button className='btn btn-primary mx-2'onClick={handleCopy}>Copy text</button>
        <button className='btn btn-primary mx-2'onClick={handleExtraSpaces}>Remove Extra spaces</button>
    </div>
    <div className='container my-3' style= {{color: props.mode === 'dark' ? 'white': '#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview"}</p>
    </div>
    </>
  )
}
