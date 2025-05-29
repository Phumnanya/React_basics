import React from "react";
import { useState } from "react";

function State() {
    const [word, setWord] = useState("")

    const change = () => {
        setWord = document.getElementById('text').value;
    }
    return(
        <>
            <div className="classcompo">
            <h2>This is a demonstration of the useState hook</h2>
            <input type="text" id="text" />
            <button type="button" onClick={change}>Submit</button>
            <h3>{word}</h3>
            </div>
        </>
    )
}

export default State;