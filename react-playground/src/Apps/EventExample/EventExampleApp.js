import React from 'react';

const ClickerComponent = (props) =>
{
    // the standard onClick event here
   return (
       <div>
           <button onClick={(e) => { props.ClickHandler('A'); }}>A</button>
           <button onClick={(e) => { props.ClickHandler('B'); }}>B</button>
           <button onClick={(e) => { props.ClickHandler('C'); }}>C</button>
       </div>
   );
};

const EventExampleApp = () =>
{
    // notice that the function itselt is defined here.  It is passed as a prop.
   return (
       <div>
            <p>View the console.</p>
           <ClickerComponent ClickHandler={ (letter) => {console.log(`${letter} was clicked`);} } />
       </div>
   );
};

export default EventExampleApp;
