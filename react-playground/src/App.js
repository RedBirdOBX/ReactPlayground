import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

// do something with this
import logo from './logo.svg';
import './App.css';

// demos
import ColorSelectorDemoClassesApp from './Apps/ColorSelectorDemoClasses/ColorSelectorDemoClassesApp';
import ColorSelectorDemoFunctionsApp from './Apps/ColorSelectorDemoFunctions/ColorSelectorDemoFunctionsApp';
import CounterButtonApp from './Apps/CounterButton/CounterButtonApp';
import TimerDisplayApp from './Apps/TimerDisplay/TimerDisplayApp';

// full apps
import GitHubCardsApp from './Apps/GitHubCards/GitHubCardsApp';
import TicTacToeApp from './Apps/TicTacToe/TicTacToeApp';

// concepts
import LoopImagesApp from './Apps/LoopImages/LoopImagesApp';
import CaptureInputValueApp from './Apps/CapturingInputValue/CaptureInputValueApp';
import PropsValidationApp from './Apps/PropsValidation/PropsValidationApp';


// import ObjectMatchGameContainer from './Apps/ObjectMatchGame/ObjectMatchGameContainer';

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
                            <a className="nav-link dropdown-toggle" href="#" id="DemoAppsDropDown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Demo Apps
                            </a>
                            <div className="dropdown-menu" aria-labelledby="DemoAppsDropDown">
                                <Link className="dropdown-item" to="/ColorSelectorDemoClassesApp">
                                        Color Selector Class Demo
                                </Link>

                                <Link className="dropdown-item" to="/ColorSelectorDemoFunctionsApp">
                                        Color Selector Function Demo
                                </Link>
                                <Link className="dropdown-item" to="/CounterButtonApp">
                                    Counter Button App
                                </Link>
                                <Link className="dropdown-item" to="/TimerDisplayApp">
                                    Timer Display App
                                </Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="FullAppsDropDown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Full Apps
                            </a>
                            <div className="dropdown-menu" aria-labelledby="DemoAppsDropDown">
                                <Link className="dropdown-item" to="/GitHubCardsApp">
                                    GitHub Cards App
                                </Link>
                                <Link className="dropdown-item" to="/TicTacToeApp">
                                    Tic Tac Toe App
                                </Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="ConceptsDropDown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Concepts
                            </a>
                            <div className="dropdown-menu" aria-labelledby="ConceptsDropDown">
                                <Link className="dropdown-item" to="/LoopImagesApp">
                                    Loop thru images
                                </Link>
                                <Link className="dropdown-item" to="/CaptureInputValueApp">
                                    Capture Input value
                                </Link>
                                <Link className="dropdown-item" to="/PropsValidationApp">
                                    Props validation
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>

            <Route exact path="/" component={Overview} />
            <Route exact path="/ColorSelectorDemoClassesApp" component={ColorSelectorDemoClassesApp} />
            <Route exact path="/ColorSelectorDemoFunctionsApp" component={ColorSelectorDemoFunctionsApp} />
            <Route exact path="/GitHubCardsApp" component={GitHubCardsApp} />
            <Route exact path="/CounterButtonApp" component={CounterButtonApp} />
            <Route exact path="/TimerDisplayApp" component={TimerDisplayApp} />
            <Route exact path="/TicTacToeApp" component={TicTacToeApp} />
            <Route exact path="/LoopImagesApp" component={LoopImagesApp} />
            <Route exact path="/CaptureInputValueApp" component={CaptureInputValueApp} />
            <Route exact path="/PropsValidationApp" component={PropsValidationApp} />


            {/*

            <Route exact path="/ObjectMatchGameContainer" component={ObjectMatchGameContainer} />
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
