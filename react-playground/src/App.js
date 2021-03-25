import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

// do something with this
import logo from './logo.svg';
import './App.css';

// demos
import ColorSelectorDemoClassesApp from './Apps/ColorSelectorDemoClasses/ColorSelectorDemoClassesApp';
import ColorSelectorDemoFunctionsApp from './Apps/ColorSelectorDemoFunctions/ColorSelectorDemoFunctionsApp';
import ConditionalRenderingApp from './Apps/ConditionalRendering/ConditionalRenderingApp';
import CounterButtonApp from './Apps/CounterButton/CounterButtonApp';
import TimerDisplayApp from './Apps/TimerDisplay/TimerDisplayApp';
import MultiButtonsApp from './Apps/MultiButtons/MultiButtonsApp';
import FormDemoApp from './Apps/FormDemo/FormDemoApp';
import PropsChildrenExampleApp from './Apps/PropsChildrenExample/PropsChildrenExampleApp';
import StateDemoApp from './Apps/StateDemo/StateDemoApp';
import StopWatchApp from './Apps/StopWatch/StopWatchApp';


// full apps
import GitHubCardsApp from './Apps/GitHubCards/GitHubCardsApp';
import TicTacToeApp from './Apps/TicTacToe/TicTacToeApp';
import ObjectMatchGameApp from './Apps/ObjectMatchGame/ObjectMatchGameApp';

// concepts
import LoopImagesApp from './Apps/LoopImages/LoopImagesApp';
import CaptureInputValueApp from './Apps/CapturingInputValue/CaptureInputValueApp';
import PropsValidationApp from './Apps/PropsValidation/PropsValidationApp';
import EventExampleApp from './Apps/EventExample/EventExampleApp';
import UsedNumbersApp from './Apps/UsedNumberApp/UsedNumbersApp';
import RoutingExampleApp from './Apps/RoutingExample/RoutingExampleApp';

import Overview from './OverviewComponent';

function App()
{
  return (
    <div>
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">
                    App Menu
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#CollapseContainer">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="CollapseContainer">
                    <ul className="navbar-nav mr-auto">
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
                                <Link className="dropdown-item" to="/EventExampleApp">
                                    Event Example
                                </Link>
                                <Link className="dropdown-item" to="/UsedNumbersApp">
                                    Used Numbers App
                                </Link>
                                <Link className="dropdown-item" to="/RoutingExampleApp">
                                    Routing Example App
                                </Link>
                                <Link className="dropdown-item" to="/ConditionalRenderingApp">
                                    Conditional Rendering App
                                </Link>
                            </div>
                        </li>
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
                                <Link className="dropdown-item" to="/MultiButtonsApp">
                                    Multi Buttons App
                                </Link>
                                <Link className="dropdown-item" to="/FormDemoApp">
                                    Form Demo App
                                </Link>
                                <Link className="dropdown-item" to="/PropsChildrenExampleApp">
                                    Props Children Example App
                                </Link>
                                <Link className="dropdown-item" to="/StateDemoApp">
                                    State Demo App
                                </Link>
                                <Link className="dropdown-item" to="/StopWatchApp">
                                    StopWatch App
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
                                <Link className="dropdown-item" to="/ObjectMatchGameApp">
                                    Object Match Game App
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
            <Route exact path="/EventExampleApp" component={EventExampleApp} />
            <Route exact path="/ObjectMatchGameApp" component={ObjectMatchGameApp} />
            <Route exact path="/MultiButtonsApp" component={MultiButtonsApp} />
            <Route exact path="/UsedNumbersApp" component={UsedNumbersApp} />
            <Route exact path="/FormDemoApp" component={FormDemoApp} />
            <Route exact path="/PropsChildrenExampleApp" component={PropsChildrenExampleApp} />
            <Route exact path="/StateDemoApp" component={StateDemoApp} />
            <Route exact path="/RoutingExampleApp" component={RoutingExampleApp} />
            <Route exact path="/StopWatchApp" component={StopWatchApp} />
            <Route exact path="/ConditionalRendering" component={ConditionalRenderingApp} />
        </BrowserRouter>
    </div>
  );
}

export default App;
