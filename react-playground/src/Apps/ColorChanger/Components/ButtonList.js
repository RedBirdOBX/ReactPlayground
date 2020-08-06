import React from 'react';
import Button from './Button';

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

console.dir(buttonConfigs);

//let buttons = buttonTypes.map(BuildButton);



class ButtonList extends React.Component
{
    // HandleButtonClick = () =>
    // {
    //     this.props.OnClickHandler(this.props.Incrementor);
    // };

/* <button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button> */



    render()
    {
        return (
        <div>

            {
                    buttonConfigs.map(config => <Button key={config.ButtonName} ButtonConfig={config} />)
            }

        </div>);
    }
}

export default ButtonList;