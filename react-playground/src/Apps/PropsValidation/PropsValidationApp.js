import React from 'react';
import MessageComponent from '../PropsValidation/Components/MessageComponent.js';

class PropsValidationApp extends React.Component
{
    render()
    {
        return (
            <div className="mt-3">
                <h4>Props Validation</h4>
                <div>
                    <MessageComponent Greeting={'Whats in my pockets my precious?'} Pocket1={2} Pocket2={"1"} />
                </div>
            </div>
        );
    }
}

export default PropsValidationApp;

