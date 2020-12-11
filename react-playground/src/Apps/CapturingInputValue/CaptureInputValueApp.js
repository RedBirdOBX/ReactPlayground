import React from 'react';
import FormComponent from './Components/FormComponent'

class CaptureInputValueApp extends React.Component
{
    render()
    {
        return(
            <div className="mt-3">
                <h4 className="pb-5">Capturing Input Values</h4>
                <FormComponent />
                <p className="mt-3">
                    View the console. Notice how Input1 is tracked by onChange and set in State where as Input2 is
                    not tracked by React, only read from on the form submit.
                </p>
            </div>
        );
    }
}

export default CaptureInputValueApp;