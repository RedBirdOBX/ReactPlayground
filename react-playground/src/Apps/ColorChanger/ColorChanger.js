// Goal:
//  1) Show a series of bootstrap buttons - one for each context version. Primary, Info, Warning, Danger, etc. - Done
//  2) Below the buttons, show an alert with some dummy text.  The default will be 'default'. - done
//  3) Have the buttons change the context of the alert.  The Danger button chnages the alert to alert-danger and so on.
//  4) Use Class Components for one version and Function Components for another.

import React from 'react';
import ButtonLists from './Components/ButtonList';
import Button from './Components/Button';
import Alert from './Components/Alert';


let primaryBtn = new ButtonConfig("Primary","btn btn-lg btn-primary");
let secondaryBtn = new ButtonConfig("Secondary", "btn btn-lg btn-secondary");
let successBtn = new ButtonConfig("Success", "btn btn-lg btn-success");
let dangerBtn = new ButtonConfig("Danger", "btn btn-lg btn-danger");
let warningBtn = new ButtonConfig("Warning", "btn btn-lg btn-warning");
let infoBtn = new ButtonConfig("Info", "btn btn-lg btn-info");
let lightBtn = new ButtonConfig("Light", "btn btn-lg btn-light");
let darkBtn = new ButtonConfig("Dark", "btn btn-lg btn-dark");

let buttonConfigs = [];
buttonConfigs.push(primaryBtn, secondaryBtn, successBtn, dangerBtn, warningBtn, infoBtn, lightBtn, darkBtn);

function ButtonConfig (name, style)
{
    this.ButtonName = name;
    this.ButtonStyle = style;
};










function AlertConfig(name, style, msg) 
{
    this.AlertName = name;
    this.AlertStyle = style;
    this.Message = msg;
}

const defaultAlertConfig = new AlertConfig("Primary", "alert alert-primary", "Click the button to change this alert message to match the style of the button.");












class ColorChanger extends React.Component
{
    constructor() {
        super();
        this.state =
        {
            AlertConfig: defaultAlertConfig
        };
    }

    TrueButtonClickHandler = (msg) =>
    {
        console.log("msg: " + msg);
    };


    // lets try not using a list but static buttons and see if that helps.

    render() {
        return (
            <div>
                <div className="row my-5">
                    <div className="col-12 text-center">
                        {/* <ButtonLists ClickHandlerProp={this.TrueButtonClickHandler} /> */}
                        <Button />
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-12 text-center">
                        <Alert Config={this.state.AlertConfig} />
                    </div>
                </div>
            </div>
        );
    }
}

export default ColorChanger;