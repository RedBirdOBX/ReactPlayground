// Goal:
//  1) Show a series of bootstrap buttons - one for each context version. Primary, Info, Warning, Danger, etc. - Done
//  2) Below the buttons, show an alert with some dummy text.  The default will be 'default'. - done
//  3) Have the buttons change the context of the alert.  The Danger button chnages the alert to alert-danger and so on.
//  4) Use Class Components for one version and Function Components for another.

import React from 'react';
import ButtonLists from './Components/ButtonList';
import Alert from './Components/Alert';

class ColorChanger extends React.Component
{
    AlertConfig(name, style, msg) {
        this.AlertName = name;
        this.AlertStyle = style;
        this.Message = msg;
    }

    defaultAlert = new this.AlertConfig("Primary", "alert alert-primary", "Click the button to change this alert message to match the style of the button.");

    constructor() {
        super();
        this.state =
        {
            AlertMessage: this.defaultAlert
        };
    }

    render() {
        return (
            <div>
                <div className="row my-5">
                    <div className="col-12 text-center">
                        <ButtonLists />
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-12 text-center">
                        {/* <Alert Config={this.state.AlertConfig} /> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default ColorChanger;