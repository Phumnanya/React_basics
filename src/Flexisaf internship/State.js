import React from "react";
import { useState } from "react";

function State() {
    const [word, setWord] = useState("This will change if you click the button")

    const change = () => {
        setWord = document.getElementById('text').innerHTML;
    }
    return(
        <>
            <div className="classcompo">
            <h1 id="text">This is a demonstration of the useState hook</h1>
            <button type="button" onClick={change}>Submit</button>
            <h3>{word}</h3>
            </div>
        </>
    )
}

export default State;
