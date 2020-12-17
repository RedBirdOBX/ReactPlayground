import React from 'react';

// this represents the **entire** state of our app.
let model =
{
    Running: false,
    Time: 110
};

// this is an object
let intents =
{
    TICK: "TICK",
    START: "START",
    STOP: "STOP",
    RESET: "RESET"
};

const StopWatchApp = () =>
{
    let minutes = Math.floor(model.Time / 60);
    let seconds = model.Time - (minutes * 60);

   return (
       <div className="mt-3">
           <h4>StopWatch App</h4>
           <div>Running: {model.Running.toString()}</div>
           <div>Time: {minutes}:{seconds}</div>
        </div>
   );
};

export default StopWatchApp;