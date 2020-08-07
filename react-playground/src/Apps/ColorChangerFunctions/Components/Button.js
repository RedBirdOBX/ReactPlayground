import React from 'react';

const Button = (props) =>
{
    return (<span>
                <button
                    //onClick={this.HandleButtonClick}
                    className={props.ButtonConfig.ButtonStyle}
                    >
                    {props.ButtonConfig.ButtonName}
                </button>
            </span>);
};

export default Button;