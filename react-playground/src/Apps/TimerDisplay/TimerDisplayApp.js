import React from 'react';
import TimeDisplay from './Components/TimeDisplay';

class TimerDisplayApp extends React.Component
{
    render()
    {
        return(
            <div className="pt-5"><TimeDisplay /></div>
        );
    }
}

export default TimerDisplayApp;