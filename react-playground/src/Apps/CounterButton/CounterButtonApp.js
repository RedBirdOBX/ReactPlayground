import React from 'react';
import Button from './Components/Button';
import Results from './Components/Results';
import Header from './Components/Header';

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
                <div className="row">
                    <div className="col-12 text-center">
                        <Header />
                        <Button Incrementor={1} OnClickHandler={this.SetCounter} />
                        <Button Incrementor={5} OnClickHandler={this.SetCounter} />
                        <Button Incrementor={10} OnClickHandler={this.SetCounter} />
                        <Button Incrementor={25} OnClickHandler={this.SetCounter} />
                        <Button Incrementor={100} OnClickHandler={this.SetCounter} />
                        <Results CounterVal={this.state.Counter} />
                    </div>
                </div>
                );
    }
}

export default CounterButtonApp;