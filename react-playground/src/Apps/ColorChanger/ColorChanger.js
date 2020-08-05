// Goal:
//  1) Show a series of bootstrap buttons - one for each context version. Primary, Info, Warning, Danger, etc.
//  2) Below the buttons, show an alert with some dummy text.  The default will be 'default'.
//  3) Have the buttons change the context of the alert.  The Danger button chnages the alert to alert-danger and so on.
//  4) Use Class Components for one version and Function Components for another.

import React from 'react';
import ButtonLists from './Components/ButtonList';

class ColorChanger extends React.Component
{
    constructor() {
        super();
        this.state =
        {
            //Counter: 0,
        };
    }

    // SetCounter = (incrementor) => {
    //     this.setState({ Counter: (this.state.Counter + incrementor) });
    // };

    render() {
        return (
            <div className="row">
                <div className="col-12 text-center">
                    <ButtonLists />
                </div>
            </div>
        );
    }
}

export default ColorChanger;