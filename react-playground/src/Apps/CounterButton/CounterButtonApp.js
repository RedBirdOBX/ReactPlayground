import React from 'react';
import Button from './Components/Button';

class CounterButtonApp extends React.Component
{

    constructor()
    {
        super();
        this.state =
        {
            counter: 0,
        };
    }

    SetCounter = (incrementor) =>
    {
        this.setState({ counter: (counter + incrementor) });
    };

    render()
    {
        return(
                <div>
                    <Button />
                </div>
                );
    }
}

export default CounterButtonApp;