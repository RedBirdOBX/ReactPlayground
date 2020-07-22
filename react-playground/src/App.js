import React from 'react';
//import logo from './logo.svg';
import './App.css';

//import CounterButtonApp from './Apps/CounterButton/CounterButtonApp';
import TimerDisplayApp from './Apps/TimerDisplay/TimerDisplayApp';

// comment and uncomment out the app components you wish to test with.
function App() {
  return (

    // default
    // <div className="App">
    //   <header className="App-header">
    //     <h3>React.js Playground</h3>
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p><small>(Guys named 'Russell' not allowed.)</small></p>
    //   </header>
    // </div>

    // <CounterButtonApp />
    <TimerDisplayApp />
  );
}

export default App;
