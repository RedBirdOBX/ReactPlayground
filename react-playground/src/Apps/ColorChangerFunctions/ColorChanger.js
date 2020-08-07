import React from 'react';
import ButtonLists from "./Components/ButtonList";
import Alert from "./Components/Alert";

function AlertConfig(name, style, msg) {
    this.AlertName = name;
    this.AlertStyle = style;
    this.Message = msg;
}

const defaultAlertConfig = new AlertConfig("Primary", "alert alert-primary", "Click the button to change this alert message to match the style of the button.");


const ColorChanger = (props) =>
{
    

    const [counter, setCounter] = useState(0);

    return(
        <div>
            <div className="row my-5">
                <div className="col-12 text-center">
                    {/* <ButtonLists ClickHandler={this.UpdateAlertState} /> */}
                    <ButtonLists />
                </div>
            </div>
            <div className="row my-5">
                <div className="col-12 text-center">
                    {/* <Alert Config={this.state.AlertConfig} /> */}
                    <Alert />
                </div>
            </div>
        </div>
    );
};

export default ColorChanger;