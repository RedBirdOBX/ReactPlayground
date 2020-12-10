import React from 'react';
import ButtonComponent from './Components/ButtonComponent';
import DisplayComponent from './Components/DisplayComponent';
import HeaderComponent from './Components/HeaderComponent';

class CounterButtonApp extends React.Component
{

    // using Class Components
    // State has one val: Counter
    // App has one method: SetCounter()

    constructor()
    {
        super();
        this.state =
        {
            Counter: 0,
        };
    }

    SetCounter = (incrementor) =>
    {
        this.setState({ Counter: (this.state.Counter + incrementor) });
    };

    // (1) pass the reference to the SetCounter function as a prop known as OnClickHanlder.  This a reference back
    // to the SetCounter function.
    render()
    {
        return(
            <div className="mt-3">
                <h4>Counter Button App</h4>
                <div className="row mt-5">
                    <div className="col-12 text-center">
                        <HeaderComponent />
                        <ButtonComponent Incrementor={1} OnClickHandler={this.SetCounter} />
                        <ButtonComponent Incrementor={5} OnClickHandler={this.SetCounter} />
                        <ButtonComponent Incrementor={10} OnClickHandler={this.SetCounter} />
                        <ButtonComponent Incrementor={25} OnClickHandler={this.SetCounter} />
                        <ButtonComponent Incrementor={100} OnClickHandler={this.SetCounter} />
                        <DisplayComponent CounterVal={this.state.Counter} />
                    </div>
                </div>
            </div>
            );
    }
}

export default CounterButtonApp;