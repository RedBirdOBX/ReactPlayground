import React, { useEffect } from 'react';

const Alert = (props) =>
{

    useEffect(() =>
    {
        // demo of useEffect()
        console.log("Done rendering...");
        return () => {console.log("Component is going to rerender..."); };
    });

    return (<div
                className={props.Config.AlertStyle}
                role="alert"
                style={{ fontSize: (props.Config.AlertName === "Danger") ? "36px" : "16px" }}>
                {props.Config.Message}
            </div>);
};

export default Alert;