// https://app.pluralsight.com/course-player?clipId=c2ed0f02-6868-49e7-b31e-897dc2b67f8c


import React, { useState } from 'react';
import ButtonList from './Components/ButtonList'
import Display from './Components/Display'

const MultiButtonsApp = (props) =>
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
        <div>
            <div className="row my-5">
                <div className="col-12 text-center">
                    <ButtonList BtnClickHandler={SetDisplay} />
                </div>
            </div>
            <div className="row my-5">
                <div className="col-12 text-center">
                    <Display Message={selectedMsg} />
                </div>
            </div>
        </div>
    );
};

export default MultiButtonsApp;