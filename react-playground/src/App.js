import React from 'react';
//import logo from './logo.svg';
import './App.css';

//import CounterButtonApp from './Apps/CounterButton/CounterButtonApp';
//import TimerDisplayApp from './Apps/TimerDisplay/TimerDisplayApp';
//import GitHubCardApp from './Apps/GitHubCards/GitHubCardApp';
//import LoopImages from './Apps/LoopImages/LoopImages';
//import CaptureInputValueApp from './Apps/CapturingInputValue/CaptureInputValueApp';
//import ColorChanger from './Apps/ColorChangerClasses/ColorChanger';
//import ColorChanger from './Apps/ColorChangerFunctions/ColorChanger';
//import TicTacToeGame from './Apps/TicTacToe/TicTacToeGame';
import AuthorQuiz from './Apps/AuthorQuiz/AuthorQuiz';
//import PropsValidationApp from './Apps/PropsValidation/PropsValidationApp';
//import TestExampleApp from './Apps/TestComponentExample/TestExampleApp';
//import EventExampleApp from './Apps/EventExample/EventExampleApp';
//import MultiButtonsApp from './Apps/MultiButtons/MultiButtonsApp';
//import PropsChildrenExampleApp from './Apps/PropsChildrenExample/PropsChildrenExampleApp';

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

    //<CounterButtonApp />
    //<TimerDisplayApp />
    //<GitHubCardApp />
    //<CaptureInputValueApp />
    //<LoopImages />
    //<ColorChanger />
    //<TicTacToeGame />
    <AuthorQuiz />
    //<PropsValidationApp />
    //<TestExampleApp />
    //<EventExampleApp />
    //<MultiButtonsApp NumberOfButtons={5} />
    //<PropsChildrenExampleApp />
  );
}

export default App;
