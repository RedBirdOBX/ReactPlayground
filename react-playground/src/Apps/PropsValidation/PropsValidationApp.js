import React from 'react';
import Message from '../PropsValidation/Components/Message.js'

class PropsValidationApp extends React.Component
{
    render()
    {
        return (
            <div>
                <div>
                    <Message Greeting={'Hello World'} Pocket1={2} Pocket2={1} />
                </div>
            </div>
        );
    }
}

export default PropsValidationApp;

