import React, { useState } from 'react';
import ButtonListComponent from './Components/ButtonListComponent'
import DisplayComponent from './Components/DisplayComponent'

const MultiButtonsApp = () =>
{
    const defaultMsg = "Click a button!";
    const [selectedMsg, setSelectedMsg] = useState(defaultMsg);

    const SetDisplay = (btnNum) =>
    {
        console.log(`btn ${btnNum} clicked!`);
        setSelectedMsg(`You clicked button ${btnNum}.`);

        // same problem as before! why the delay?
        console.log("state: " + selectedMsg);
    };

    return (
        <div className="mt-3">
            <h4>Multi Button App</h4>
            <div className="row my-5">
                <div className="col-12 text-center">
                    <ButtonListComponent BtnClickHandler={SetDisplay} />
                </div>
            </div>
            <div className="row my-5">
                <div className="col-12 text-center">
                    <DisplayComponent Message={selectedMsg} />
                </div>
            </div>
        </div>
    );
};

export default MultiButtonsApp;