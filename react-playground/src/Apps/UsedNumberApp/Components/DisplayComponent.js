import React from 'react';

const DisplayComponent = (props) =>
{
   return (
       <div className="border m-1 p-1 bg-white">
            <h4>Display Component</h4>
            <div>
                All numbers: {props.Numbers.join(",")}<br />
                Used numbers: {props.UsedNumbers.join(",")}<br />
                Avail numbers: {props.AvailNumbers.join(",")}<br />
                Is Game Over: {props.IsGameOver.toString().toUpperCase()}<br />
            </div>
        </div>
   );
};

export default DisplayComponent;