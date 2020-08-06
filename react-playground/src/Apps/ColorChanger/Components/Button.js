import React from 'react';


class Button extends React.Component {

    HandleButtonClick = () =>
    {
        //this.props.TrueButtonClickHandler("hello");
        console.dir(this.props);
    };

    
    render() 
    {
        return (
        <span>
                <button className={this.props.ButtonConfig.ButtonStyle} 
                    onClick={this.HandleButtonClick}>
                    {this.props.ButtonConfig.ButtonName}
                </button>
        </span>);
    }
}

export default Button;