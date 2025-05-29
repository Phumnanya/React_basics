import React from "react";

function Eventhandlers() {
    const greeting = () => {
        alert("Hello Freind");
    }
    return(
        <>
            <div className="event">
            <h2>This button will alert you with a greeting to show how event handlers work</h2>
                <button onClick={greeting}>Click here</button>
            </div>
        </>
    )
}
export default Eventhandlers;