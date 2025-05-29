import React from "react";
import { useState } from "react";

function States() {
    const [word, setWord] = useState("This will change if you click the button");
    return(
        <>
            <div className="event">
            <h1>the useState hook</h1>
            <button type="button" onClick={() => setWord("There you go, useState hook implemented")}>change</button>
            <h3>{word}</h3>
            </div>
        </>
    )
}

export default States;
