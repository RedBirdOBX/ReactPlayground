import React from 'react';

const Alert = (props) =>
{
    return (<div
                className={props.Config.AlertStyle}
                role="alert">
                {props.Config.Message}
            </div>);
};

export default Alert;