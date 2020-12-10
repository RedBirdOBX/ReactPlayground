import React from 'react';

class Button extends React.Component
{
    // this concept is extremely important to understand.
    // We cannot do this:
    // <button onClick={this.props.OnClickHandler(this.props.Incrementor)}>
    // We need the FUNCTION REFERENCE for this click handler...NOT an invokation.
    // Ex: This is invoking:  myFunction(42);
    // The solution is to 'wrap' this function into the definition of an anonymous inline function definition.
    // Solution 1: <button onClick={() => this.props.OnClickHandler(this.props.Incrementor)}>
    // That said, it makes it a little more readable if you use a local, internal function for this button
    // component.  We will use 'HandleButtonClick' and REFERENCE that.

    // (2) wire up a function in here to invoke the function that was passed down thru thru the props.
    // Invoke 'OnClickHandler()'.
    HandleButtonClick = () =>
    {
        this.props.OnClickHandler(this.props.Incrementor);
    };

    render()
    {
        // (3) set up the onClick js event to use the local function above
        return (
            <button className="btn btn-lg btn-info mx-1" onClick={this.HandleButtonClick}>
                +{this.props.Incrementor}
            </button>);
    }
}

export default Button;