import React from 'react';
import { shuffle, sample, all } from 'underscore';

const GetNumberComponent = (props) =>
{
    let numberToUse = sample(props.AvailNumbers);

    return (
        <div className="border p-1 m-1 bg-white">
            <h4>Get Number Component</h4>
            <div className="text-center">
                <button className="btn btn-primary" onClick={() => { props.UseNumberRef(numberToUse) } }>Use Number {numberToUse}</button>
            </div>
        </div>
    );
};

export default GetNumberComponent;