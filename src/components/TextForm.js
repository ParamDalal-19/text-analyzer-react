import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUppercase = () => {
    console.log("Uppercase button was clicked.");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase.");
  };

  const handleLowercase = () => {
    console.log("Lowercase button was clicked.");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase.");
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed!");
  };

  const handleClearText = () => {
    setText("");
    props.showAlert("Text Cleared!");
  };

  const handleOnChange = (event) => {
    console.log("On Change.");
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#212529" }}
      >
        <h5>{props.heading}</h5>
        <div className="mb-3 my-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#212529" : "white",
              color: props.mode === "dark" ? "white" : "#212529",
            }}
            id="textBox"
            rows="5"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUppercase}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLowercase}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopyText}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearText}
        >
          Clear Text
        </button>
        <br />
        <br />
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#212529" }}
      >
        <h5>Your Text Summary</h5>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters.
        </p>
        <p>
          {0.0032 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes to read.
        </p>
        <h5>Preview</h5>
        <p>
          {text.length > 0
            ? text
            : "Start typing in the textbox to preview it here."}
        </p>
      </div>
    </>
  );
}
