import React from 'react';

const ButtonComponent = (props) =>
{
    return (<span>
                <button
                    onClick={() => props.BtnClickEvent(props.ButtonConfig)}
                    className={props.ButtonConfig.ButtonStyle}
                    >
                    {props.ButtonConfig.ButtonName}
                </button>
            </span>);
};

export default ButtonComponent;