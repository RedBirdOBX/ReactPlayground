import React from 'react';


class Button extends React.Component {

    HandleButtonClick = () =>
    {
        this.props.BtnClickEvent(this.props.ButtonConfig.ButtonName);
    };
    
    render() 
    {
        return (
        <span>
                <button 
                    onClick={this.HandleButtonClick} className={this.props.ButtonConfig.ButtonStyle} >
                    {this.props.ButtonConfig.ButtonName}
                </button>
        </span>);
    }
}

export default Button;