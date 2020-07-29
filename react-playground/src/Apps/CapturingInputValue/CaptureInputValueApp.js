import React from 'react';

// https://app.pluralsight.com/course-player?clipId=43aac0ac-3fe2-43fa-a70e-bb86cc955351
// start at 6:00
class CaptureInputValueApp extends React.Component
{
    render()
    {
        return(
            <div>
                <h2 className="pt-5 text-center">Capturing Input Values</h2>
                <Form />
                <p className="mt-3">
                    View the console. Notice how Input is tracked by onChange and set in State where as Inout 2 is
                    not tracked by React, only read from on the form submit.
                </p>
            </div>
        );
    }
}

class Form extends React.Component
{

    HandleSubmit = (event) =>
    {
        event.preventDefault();
        console.log(`Input1: ${this.state.Input1Value}`);
        console.log(`Input2: ${this.Input2.current.value}`);
    };

    // for input 1
    constructor()
    {
        super();

        this.state =
        {
            Input1Value: ""
        };
    }

    Input2 = React.createRef();

    render()
    {
        return(
            <div>
                <form className="form-group" action="" onSubmit={this.HandleSubmit}>

                    <div className="form-group">
                        <input id="Input1"
                            placeholder="type here"

                            // this automatically wires up this control to state
                            value={this.state.Input1Value}

                            // using inline function
                            // receives event obj as arg... because every react event function receives and event
                            onChange={(event) =>
                            {
                                // pass an obj to set state.
                                // 'target' is keyword.  Target IS the control
                                console.log(event.target);

                                this.setState({ Input1Value: event.target.value} );
                                console.log(event.target.value);
                            }
                        }
                        required>
                        </input>
                        <small>Input 1 uses state.</small>
                    </div>

                    <div className="form-group">
                        <input id="Input2"
                            placeholder="type here"
                            ref={this.Input2}
                            required>
                        </input>
                        <small>Input 2 uses a createRef and current.value.</small>
                    </div>

                    <button>Check Values</button>
                </form>
                <div>
                    <input id="Input3"
                        value={this.state.Input1Value}
                        readOnly>
                    </input>
                </div>
            </div>
        );
    }
}


export default CaptureInputValueApp;