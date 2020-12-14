import React from 'react';

const EventExampleApp = () =>
{
    // notice that the function itselt is defined here.  It is passed as a prop.
   return (
       <div>
           <ClickerComponent ClickHandler={ (letter) =>
                {
                    console.log(`${letter} was clicked`);
                    console.dir(letter);
                }
            } />
       </div>
   );
};

const ClickerComponent = (props) =>
{
    // the standard onClick event here
    return (
        <div className="mt-3">
            <h4>Event Example</h4>
            <p>View the console</p>
            <button className="btn btn-primary m-1" onClick={(e) => { props.ClickHandler('A'); }}>A</button>
            <button className="btn btn-primary m-1" onClick={(e) => { props.ClickHandler('B'); }}>B</button>
            <button className="btn btn-primary m-1" onClick={(e) => { props.ClickHandler('C'); }}>C</button>
            <button className="btn btn-primary m-1" onClick={(e) => { props.ClickHandler(e); }}>Event Test</button>
        </div>
    );
};

export default EventExampleApp;
