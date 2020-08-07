// Goal:
//  4) Use Class Components for one version and Function Components for another.

import React from 'react';
import ButtonLists from './Components/ButtonList';
import Alert from './Components/Alert';

function AlertConfig(name, style, msg)
{
    this.AlertName = name;
    this.AlertStyle = style;
    this.Message = msg;
}

const defaultAlertConfig = new AlertConfig("Primary", "alert alert-primary", "Click the button to change this alert message to match the style of the button.");


class ColorChanger extends React.Component
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
                        <ButtonLists ClickHandler={this.UpdateAlertState} />
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