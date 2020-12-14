import React, {useState} from 'react';

const FormDemoApp = () =>
{
    // Note: be sure to disable the custom form class in the custom.css file.
    // It overrides the default bootstrap styles.

    const [textInput, SetTextInput] = useState("");
    const [textAreaInput, SetTextAreaInput] = useState("");
    const [selectInput, SetSelectInput] = useState("2");
    const [checkboxInput, SetCheckboxInput] = useState(false);
    const [radioGroupInput, SetRadioGroupInput] = useState("red");

    const FormSubmitHandler = (e) =>
    {
        e.preventDefault();

        console.log("**Form Submitted**");
        console.log("form data:");
        console.log("textInput:" + textInput);
        console.log("textAreaInput:" + textAreaInput);
        console.log("selectInput:" + selectInput);
        console.log("checkboxInput:" + checkboxInput);

        // consolidation of multiple radios
        // https://app.pluralsight.com/guides/how-to-use-radio-buttons-in-reactjs
        console.log("radioGroupInput:" + radioGroupInput);
    };

    const SetRadioState = (e) =>
    {
        SetRadioGroupInput(e.target.value);
    };

    return (
       <div className="container">
            <h3>Form Demo</h3>
            <form action="" onSubmit={FormSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="TextInput">Text Input</label>
                    <input id="TextInput"
                        type="text"
                        className="form-control"
                        placeholder="type in here"
                        value={textInput}
                        onChange={(e) =>
                        {
                            SetTextInput(e.target.value);
                            console.dir(e.target);
                        }}
                        />
                </div>

                <div className="form-group">
                    <label htmlFor="TextAreaInput">TextArea Input</label>
                    <textarea
                        id="TextAreaInput"
                        className="form-control"
                        rows="3"
                        value={textAreaInput}
                        onChange={(e) =>
                            {
                            SetTextAreaInput(e.target.value);
                        }}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="DaysOfWeekSelect">Select Input</label>
                    <select className="form-control"
                            id="DaysOfWeekSelect"
                            value={selectInput}
                            onChange={(e) => { SetSelectInput(e.target.value); }}>
                        <option value="1">Sunday</option>
                        <option value="2">Monday</option>
                        <option value="3">Tuesday</option>
                        <option value="4">Wednesday</option>
                        <option value="5">Thursday</option>
                        <option value="6">Friday</option>
                        <option value="7">Saturday</option>
                    </select>
                </div>

                <div className="form-group form-check">
                    <input type="checkbox"
                            className="form-check-input"
                            id="DemoCheckbox"
                            value={checkboxInput}
                            onChange={(e) =>
                            {
                                SetCheckboxInput(e.target.checked);
                            }}
                        />
                    <label className="form-check-label" htmlFor="DemoCheckbox">Checkbox</label>
                </div>

                <div id="RadioButtonContainer">
                    <h5>Favorite Color</h5>
                    <div className="form-check">
                        <input className="form-check-input"
                                type="radio"
                                name="DemoRadioButtons"
                                id="redRadio"
                                value="red"
                                onChange={(e) =>
                                {
                                    SetRadioState(e);
                                }}
                                checked={radioGroupInput === "red"}
                            />
                        <label className="form-check-label" htmlFor="exampleRadios1">
                            Red
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input"
                                type="radio"
                                name="DemoRadioButtons"
                                id="whiteRadio"
                                value="white"
                                onChange={(e) =>
                                {
                                    SetRadioState(e);
                                }}
                                checked={radioGroupInput === "white"}
                            />
                        <label className="form-check-label" htmlFor="exampleRadios2">
                            White
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input"
                                type="radio"
                                name="DemoRadioButtons"
                                id="blueRadio"
                                value="blue"
                                onChange={(e) =>
                                {
                                    SetRadioState(e);
                                }}
                                checked={radioGroupInput === "blue"}
                                disabled
                            />
                        <label className="form-check-label" htmlFor="exampleRadios3">
                            Blue (disabled)
                        </label>
                    </div>
                </div>

                <div className="text-center">
                    <button id="SubmitButton"
                            type="submit"
                            className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>

       </div>
   );
};

export default FormDemoApp;


