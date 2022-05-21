import React, { useState } from "react";


export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("All letters uppercased!","success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("All letters lowercased!","success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared!","success");
  };
  const copyToClipBoard = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("copied to clipboard!","success");
  };
  const removeExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces are removed!","success");
  }

  const handleOnchange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  
  return (
    <>
      <div className={`container text-${props.mode === 'light' ? 'dark': 'light' }`}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            id = "myBox"
            // style={{
            //   backgroundColor:props.mode === 'dark'? 'grey' : 'white',
            //   color: props.mode === 'dark'? 'white':'black'
            // }}
            placeholder="Enter your text here"
            className="form-control"
            value={text}
            onChange={handleOnchange}
            // eslint-disable-next-line react/jsx-no-duplicate-props
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Conver to Uppercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Conver to Lowercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear</button>
        <button className="btn btn-primary mx-2 my-2" onClick={copyToClipBoard}>Copy</button>
        <button className="btn btn-primary mx-2 my-2" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className={`container my-3 text-${props.mode === 'light' ? 'dark': 'light' }`}>
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").filter((element)=>{return element.length!==0}).length} word and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      </div>
      <div className={`container my-3 text-${props.mode === 'light' ? 'dark': 'light' }`}>
        <h1>Preview</h1>
        <p>{text.length === 0 ? 'Enter the text above to preview it here':text}</p>
      </div>
    </>
  );
}
