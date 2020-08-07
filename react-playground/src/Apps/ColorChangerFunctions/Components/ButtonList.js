import React from 'react';
import Button from './Button';

let primaryBtn = new ButtonConfig("Primary", "btn btn-lg btn-primary");
let secondaryBtn = new ButtonConfig("Secondary", "btn btn-lg btn-secondary");
let successBtn = new ButtonConfig("Success", "btn btn-lg btn-success");
let dangerBtn = new ButtonConfig("Danger", "btn btn-lg btn-danger");
let warningBtn = new ButtonConfig("Warning", "btn btn-lg btn-warning");
let infoBtn = new ButtonConfig("Info", "btn btn-lg btn-info");
let lightBtn = new ButtonConfig("Light", "btn btn-lg btn-light");
let darkBtn = new ButtonConfig("Dark", "btn btn-lg btn-dark");

let buttonConfigs = [];
buttonConfigs.push(primaryBtn, secondaryBtn, successBtn, dangerBtn, warningBtn, infoBtn, lightBtn, darkBtn);

function ButtonConfig(name, style) 
{
    this.ButtonName = name;
    this.ButtonStyle = style;
};

const ButtonList = (props) =>
{
    return (<div>
                {buttonConfigs.map(config =>
                    <Button
                        BtnClickEvent={props.ClickHandler}
                        key={config.ButtonName}
                        ButtonConfig={config} />)
                }
            </div>);

};

export default ButtonList;