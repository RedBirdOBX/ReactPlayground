import React from 'react';
import {useState} from 'react';
import ButtonLists from "./Components/ButtonList";
import Alert from "./Components/Alert";

function AlertConfig(name, style, msg) 
{
    this.AlertName = name;
    this.AlertStyle = style;
    this.Message = msg;
}

const defaultAlertConfig = new AlertConfig("Primary", "alert alert-primary", "Click the button to change this alert message to match the style of the button.");


const ColorChanger = (props) =>
{
    const [alertConfig, setAlertConfig] = useState(defaultAlertConfig);
    const UpdateAlertState = (btnConfig) => 
    {
        let newAlertConfig = new AlertConfig(btnConfig.ButtonName, `alert alert-${btnConfig.ButtonName.toLowerCase()}`, `You have selected the ${btnConfig.ButtonName} button`);
        setAlertConfig(newAlertConfig);
    };

    return(
        <div>
            <div className="row my-5">
                <div className="col-12 text-center">
                    <ButtonLists ClickHandler={UpdateAlertState} />
                </div>
            </div>
            <div className="row my-5">
                <div className="col-12 text-center">
                    <Alert Config={alertConfig} />
                </div>
            </div>
        </div>
    );
};

export default ColorChanger;