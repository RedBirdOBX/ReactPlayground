import React, {useState, useEffect} from 'react';

// this is an object
// let intents =
// {
//     TICK: "TICK",
//     START: "START",
//     STOP: "STOP",
//     RESET: "RESET"
// };

const StopWatchApp = () =>
{
    const delay = 1000;
    const [model, UpdateModel] = useState(
    {
        IsRunning: true,
        SecondsLapsed: 0
    });

    // can these part of the model too?
    let minutes = Math.floor(model.SecondsLapsed / 60);
    let secondsLeft = model.SecondsLapsed - (minutes * 60);
    let secondsFormatted = `${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;


    const UpdateSeconds = (model, intent) =>
    {
        const updates =
        {
            'TICK': () =>
                        {
                            UpdateModel(
                                {
                                    IsRunning: true,
                                    SecondsLapsed: model.SecondsLapsed + 1
                                });
                        }
        };

        return updates[intent](model);
    };

    // will fire once component is rendered
    useEffect(() =>
    {
        let timer = setInterval(() =>
        {
            UpdateSeconds(model, 'TICK');
        }, delay);

        return() =>
        {
            // this is needed
            clearInterval(timer);
        };
    });

   return (
       <div className="mt-3">
            <h4>StopWatch App</h4>
            <div>Running: {model.IsRunning.toString()}</div>
            <h4>Time: {minutes}:{secondsFormatted}</h4>
        </div>
   );
};

export default StopWatchApp;