import React from "react";

function Jsyntax() {
    const intro = <h1>JSX allows us to write html elements in javascript and place them directly in the DOM</h1>
    const express = <p>you can also write expressions inside curly braces just as the one below</p>
    const solve= <p>the answer of 2 + 2 is = {2 +2}</p>
    return(
        <div className="classcompo">
            {intro}
            {express}
            {solve}
        </div>
    )
}
export default Jsyntax;