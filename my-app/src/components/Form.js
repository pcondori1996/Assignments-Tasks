import React, { useState } from "react";

function Form() {
  const [text, setText] = useState(null);
  const [file, setFile] = useState(null);

  const handleChanges = (event) => {
    const { target } = event;
    const inputType = target.type;
    const inputValue = target.value;

    if (inputType === "text") {
         setText(inputValue);
         console.log(text);
    } else if (inputType === "file") {
        setFile(inputValue);
        console.log(file)
    } else {
        alert("No input was recieved")
    }
  };

  const ResetInputs = (e) => {
    e.preventDefault();

    setFile(null);
    setText(null);
    alert("Inputs have been reset");
  };

  return (
    <div>
      <h1>This is the form list that recieves text and files!!!</h1>

      <form className="form">
        <input
          type="text"
          placeholder="Insert text here"
          name="text"
          value={text}
          onChange={handleChanges}
        ></input>
        <br></br>
        <br></br>
        <input type="file" 
        placeholder="Insert file here"
        name="file"
        value={file}
        onChange={handleChanges}
        ></input>
        <button type="button"> Submit</button>
        {"    "}
        <button className="button" onClick={ResetInputs}>
          Reset
        </button>
             
     
        <br></br>
      </form>
    </div>
  );
}

export default Form;
