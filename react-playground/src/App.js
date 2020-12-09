import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import ColorSelectorDemoClassesApp from './Apps/ColorSelectorDemoClasses/ColorSelectorDemoClassesApp';
import ColorSelectorDemoFunctionsApp from './Apps/ColorSelectorDemoFunctions/ColorSelectorDemoFunctionsApp';

// import ObjectMatchGameContainer from './Apps/ObjectMatchGame/ObjectMatchGameContainer';
// import CounterButtonApp from './Apps/CounterButton/CounterButtonApp';
// import TimerDisplayApp from './Apps/TimerDisplay/TimerDisplayApp';
// import GitHubCardApp from './Apps/GitHubCards/GitHubCardApp';
// import LoopImages from './Apps/LoopImages/LoopImages';
// import CaptureInputValueApp from './Apps/CapturingInputValue/CaptureInputValueApp';
// import TicTacToeGame from './Apps/TicTacToe/TicTacToeGame';
// import PropsValidationApp from './Apps/PropsValidation/PropsValidationApp';
// import TestExampleApp from './Apps/TestComponentExample/TestExampleApp';
// import EventExampleApp from './Apps/EventExample/EventExampleApp';
// import MultiButtonsApp from './Apps/MultiButtons/MultiButtonsApp';
// import PropsChildrenExampleApp from './Apps/PropsChildrenExample/PropsChildrenExampleApp';
// import StateExperimentComponent from './Apps/StateExperimentApp/StateExperimentApp';
// import UsedNumbersAppContainer from './Apps/UsedNumberApp/UsedNumbersAppContainer';
// import FormDemoComponent from './Apps/FormDemo/FormDemoComponent';
// import RoutingExampleComponent from './Apps/RoutingExample/RoutingExampleComponent';

import Overview from './OverviewComponent';

// comment and uncomment out the app components you wish to test with.
function App()
{
  return (

    <div>

        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">App Menu</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#CollapseContainer">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="CollapseContainer">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Demo Apps
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/ColorSelectorDemoClassesApp">
                                        Color Selector Class Demo
                                </Link>

                                <Link className="dropdown-item" to="/ColorSelectorDemoFunctionsApp">
                                        Color Selector Function Demo
                                </Link>
                            </div>
                        </li>


                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/GitHubCardApp">GitHubCardApp</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/TicTacToeGame">TicTacToeGame</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/ObjectMatchGameContainer">ObjectMatchGameContainer</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/CounterButtonApp">CounterButtonApp</Link>
                        </li> */}

                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/TimerDisplayApp">TimerDisplayApp</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/LoopImages">LoopImages</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/CaptureInputValueApp">CaptureInputValueApp</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/PropsValidationApp">PropsValidationApp</Link>
                        </li> */}

                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/TestExampleApp">TestExampleApp</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/EventExampleApp">EventExampleApp</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/MultiButtonsApp">MultiButtonsApp</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/PropsChildrenExampleApp">PropsChildrenExampleApp</Link>
                        </li> */}

                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/StateExperimentComponent">StateExperimentComponent</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/UsedNumbersAppContainer">UsedNumbersAppContainer</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/FormDemoComponent">FormDemoComponent</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/RoutingExampleComponent">RoutingExampleComponent</Link>
                        </li> */}
                    </ul>
                </div>
            </nav>

            <Route exact path="/" component={Overview} />
            <Route exact path="/ColorSelectorDemoClassesApp" component={ColorSelectorDemoClassesApp} />
            <Route exact path="/ColorSelectorDemoFunctionsApp" component={ColorSelectorDemoFunctionsApp} />

            {/* <Route exact path="/GitHubCardApp" component={GitHubCardApp} />
            <Route exact path="/TicTacToeGame" component={TicTacToeGame} />
            <Route exact path="/TicTacToeGame" component={TicTacToeGame} />
            <Route exact path="/ObjectMatchGameContainer" component={ObjectMatchGameContainer} />
            <Route exact path="/CounterButtonApp" component={CounterButtonApp} />
            <Route exact path="/TimerDisplayApp" component={TimerDisplayApp} />
            <Route exact path="/LoopImages" component={LoopImages} />
            <Route exact path="/CaptureInputValueApp" component={CaptureInputValueApp} />
            <Route exact path="/PropsValidationApp" component={PropsValidationApp} />
            <Route exact path="/TestExampleApp" component={TestExampleApp} />
            <Route exact path="/EventExampleApp" component={EventExampleApp} />
            <Route exact path="/MultiButtonsApp" component={MultiButtonsApp} />
            <Route exact path="/PropsChildrenExampleApp" component={PropsChildrenExampleApp} />
            <Route exact path="/StateExperimentComponent" component={StateExperimentComponent} />
            <Route exact path="/UsedNumbersAppContainer" component={UsedNumbersAppContainer} />
            <Route exact path="/FormDemoComponent" component={FormDemoComponent} />
            <Route exact path="/RoutingExampleComponent" component={RoutingExampleComponent} /> */}
        </BrowserRouter>
    </div>
  );
}

export default App;
