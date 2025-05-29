import React from "react";

class Classcompo extends React.Component {
    render() {
        return (
            <div className="classcompo">
            <h1>This element was made using a class Component</h1>
            <p>When creating a React  component, the component's name must start with an uppercase letter.
            <br />
            The class component has to include the <mark>extends React.Component</mark> statement, this statement 
            creates an inheritance to React.component and gives your component access to React.Component functions. 
            <br />
            The component also requires a <mark>render()</mark> method which returns HTML</p>
            </div>
        );
    }
}

export default Classcompo;