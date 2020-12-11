import React from 'react';

class FormComponent extends React.Component
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
                        <input className="form-control" id="Input1"
                            placeholder="type here"

                            // this automatically wires up this control to state
                            value={this.state.Input1Value}

                            // using inline function
                            // receives event obj as arg... because every react event function receives and event
                            onChange={(event) =>
                            {
                                // pass an obj to set state.
                                // 'target' is keyword.  Target IS the control
                                //console.log(event.target);

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
                            className="form-control"
                            placeholder="type here"
                            ref={this.Input2}
                            required>
                        </input>
                        <small>Input 2 uses a createRef and current.value.</small>
                    </div>

                    <button className="btn btn-primary">Check Values</button>
                </form>
                <div>
                    <input id="Input3"
                        className="form-control"
                        value={this.state.Input1Value}
                        readOnly>
                    </input>
                </div>
            </div>
        );
    }
}


export default FormComponent;