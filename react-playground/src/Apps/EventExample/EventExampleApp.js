import React from 'react';

// const EventExampleApp = () =>
// {
//     // notice that the function itselt is defined here.  It is passed as a prop.
//    return (
//        <div>
//             <p>View the console.</p>
//            <ClickerComponent ClickHandler={ (letter) =>
//                 {
//                     console.log(`${letter} was clicked`);
//                     console.dir(letter);
//                 }
//             } />
//        </div>
//    );
// };

// const ClickerComponent = (props) =>
// {
//     // the standard onClick event here
//     return (
//         <div>
//             <button onClick={(e) => { props.ClickHandler('A'); }}>A</button>
//             <button onClick={(e) => { props.ClickHandler('B'); }}>B</button>
//             <button onClick={(e) => { props.ClickHandler('C'); }}>C</button>
//             <button onClick={(e) => { props.ClickHandler(e); }}>Event Test</button>
//         </div>
//     );
// };



const EventExampleApp = () =>
{
    const ClickHandler = (e) =>
    {
        console.log(e);
    };

   return (
       <button onClick={ClickHandler}>Make an Event</button>
   );
};

export default EventExampleApp;
