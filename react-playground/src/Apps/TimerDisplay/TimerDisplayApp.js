import React from 'react';
import TimeDisplayComponent from './Components/TimeDisplayComponent';

class TimerDisplayApp extends React.Component
{
    render()
    {
        return(
            <div className="mt-3">
                <h4>Timer Display App</h4>
                <TimeDisplayComponent />
            </div>
        );
    }
}

export default TimerDisplayApp;