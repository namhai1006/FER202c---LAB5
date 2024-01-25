import React, { useState } from "react";

function content() {
    // State to hold the current count
    const [text, setText] = useState("");

    // Function to handle button click and increment count
    const content = (e) => {
        setText(e.target.value);
    };

    return (
        <div>
            <label>Type something:</label>
             <input type="text" value={text} onChange={content}></input>
            <p>Input text :{text}</p>
           
        </div>
    );
}

export default content;
