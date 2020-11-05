import React from 'react';

const DisplayComponent = (props) =>
{
    console.log("display rendered...");

   return (
        <div>
            <h3>Display Component</h3>
                <div className="border m-1 p-1">
                    All numbers: {props.Numbers.join(",")}<br />
                    Used numbers: {props.UsedNumbers.join(",")}<br />
                    Avail numbers: {props.AvailNumbers.join(",")}<br />
                </div>
        </div>
   );
};

export default DisplayComponent;