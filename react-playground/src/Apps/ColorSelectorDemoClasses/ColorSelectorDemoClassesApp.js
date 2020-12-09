import React from 'react';
import ButtonListComponent from './Components/ButtonListComponent';
import AlertComponent from './Components/AlertComponent';

function AlertConfig(name, style, msg)
{
    this.AlertName = name;
    this.AlertStyle = style;
    this.Message = msg;
}

const defaultAlertConfig = new AlertConfig("Primary", "alert alert-primary", "Click the button to change this alert message to match the style of the button.");


class ColorSelectorDemoClassesApp extends React.Component
{
    constructor()
    {
        super();
        this.state =
        {
            AlertConfig: defaultAlertConfig
        };
    }

    UpdateAlertState = (btnName) =>
    {
        this.setState( { AlertConfig:
                                    {
                                        "AlertName":  btnName,
                                        "AlertStyle": `alert alert-${btnName.toLowerCase()}`,
                                        "Message": `You have selected the ${btnName} button.`
                                    }
                        }
                    );
    };

    render() {
        return (
            <div>
                <div className="row my-5">
                    <div className="col-12 text-center">
                        <ButtonListComponent ClickHandler={this.UpdateAlertState} />
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-12 text-center">
                        <AlertComponent Config={this.state.AlertConfig} />
                    </div>
                </div>
            </div>
        );
    }
}

export default ColorSelectorDemoClassesApp;