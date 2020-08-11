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
                role="alert">
                {props.Config.Message}
            </div>);
};

export default Alert;