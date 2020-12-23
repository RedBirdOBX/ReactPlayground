import React, {useState, useEffect} from 'react';

// There's definitely room for improvement for this app.  The main idea to focus on and demonstrate is how we define all our actions,
// aka "intents" in an object.  We instantiate this object with our 'intent', and return our object which has an "Actions" property.
// Each action, Tick, Stop, Start, etc, has a function definition which will be executed as needed.
// It's an interesting way to say "I want a particular object and a property...I'll tell you want the property is when I figure it out myself."

// https://dsf-js-playground.azurewebsites.net/Javascript/Objects/Properties

// This app loosely based on: https://app.pluralsight.com/course-player?clipId=ef2c7352-346c-4400-8422-611315ee254e


const StopWatchApp = () =>
{
    const _delay = 1000;
    const _reset = "Reset";
    const _start = "Start";
    const _stop = "Stop";
    const _tick = "Tick";
    const [model, UpdateModel] = useState(
    {
        IsRunning: false,
        SecondsLapsed: 0,
        Minutes: 0,
        SecondsLeft: 0,
        SecondsFormatted: "00",
        TimeFormatted: "0:00"
    });

    const Intents = (model, action) =>
    {
        const Actions =
        {
            "Tick": () =>
                        {
                            if (model.IsRunning)
                            {
                                UpdateModel(
                                    {
                                        IsRunning: true,
                                        SecondsLapsed: model.SecondsLapsed + 1,
                                        Minutes: Math.floor(model.SecondsLapsed / 60),
                                        SecondsLeft: model.SecondsLapsed - (model.Minutes * 60),
                                        SecondsFormatted: `${model.SecondsLeft < 10 ? '0' : ''}${model.SecondsLeft}`,
                                        TimeFormatted: `${model.Minutes}:${model.SecondsFormatted}`
                                    });
                                }
                            },

            "Reset" : () =>
            {
                UpdateModel(
                    {
                        IsRunning: true,
                        SecondsLapsed: 0,
                        Minutes: 0,
                        SecondsLeft: 0,
                        SecondsFormatted: "00",
                        TimeFormatted: "0:00"
                    });
            },

            "Stop" : () =>
            {
                UpdateModel(
                    {
                        IsRunning: false,
                        SecondsLapsed: model.SecondsLapsed,
                        Minutes: Math.floor(model.SecondsLapsed / 60),
                        SecondsLeft: model.SecondsLapsed - (model.Minutes * 60),
                        SecondsFormatted: `${model.SecondsLeft < 10 ? '0' : ''}${model.SecondsLeft}`,
                        TimeFormatted: `${model.Minutes}:${model.SecondsFormatted}`
                    });
            },

            "Start" : () =>
            {
                UpdateModel(
                    {
                        IsRunning: true,
                        SecondsLapsed: model.SecondsLapsed,
                        Minutes: Math.floor(model.SecondsLapsed / 60),
                        SecondsLeft: model.SecondsLapsed - (model.Minutes * 60),
                        SecondsFormatted: `${model.SecondsLeft < 10 ? '0' : ''}${model.SecondsLeft}`,
                        TimeFormatted: `${model.Minutes}:${model.SecondsFormatted}`
                    });

                    console.log(`START triggered at ${new Date().toLocaleTimeString()}`);
            }

        };

        return Actions[action](model);
    };

    let ActionHandler = () =>
    {
        if (model.IsRunning)
        {
            Intents(model, _stop);
        }
        else
        {
            Intents(model, _start);
        }

    };

    // will fire once component is rendered
    useEffect(() =>
    {
        if (model.IsRunning)
        {
            let timer = setInterval(() =>
            {
                console.log(`Timer started at ${new Date().toLocaleTimeString()}`);
                Intents(model, _tick);
            }, _delay);

            return() =>
            {
                // this is needed
                clearInterval(timer);
            };

        }
    });

   return (
       <div className="mt-3">
            <h4>StopWatch App</h4>
            <h4>{model.TimeFormatted}</h4>
            <button className="btn btn-danger mx-1"
                id="ResetButton"
                onClick={() => {Intents(model, _reset)}}>
                {_reset}
            </button>
            <button className="btn btn-primary mx-1"
                id="ActionButton"
                onClick={ActionHandler}>
                { model.IsRunning ? _stop : _start}
            </button>
        </div>
   );
};

export default StopWatchApp;