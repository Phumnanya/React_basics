import React from "react";

function Property(props) {
    return(
        <div className="event">
        <h2>My name is {props.fullname} and I was rendered using React props</h2>
        </div>
    )
}
export default Property;
