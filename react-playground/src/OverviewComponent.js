import React from 'react';
import { Link } from 'react-router-dom';

const Overview = () =>
{
   return (
       <div className="my-2 mb-5">
            <h4 className="mt-5">Concepts</h4>
            <table className="table table-responsive table-sm my-3">
                <tbody>
                    <tr>
                    <th scope="row">
                        <Link to="/LoopImagesApp">
                            Loop thru images
                        </Link>
                    </th>
                    <td>
                        Performs a limited loop and displays an image.  Once using traditional <code>for</code> and another using
                        a more modern <code>map()</code>. Both are pushing each iteration into an <code>ImageComponent</code>.
                    </td>
                    </tr>

                    <tr>
                    <th scope="row">
                        <Link to="/CaptureInputValueApp">
                            Capture Input value
                        </Link>
                    </th>
                    <td>
                        Demonstrates 2 different ways to capture form input. One using State and one using a simple <code>createRef()</code>.
                    </td>
                    </tr>

                    <tr>
                    <th scope="row">
                        <Link to="/PropsValidationApp">
                            Props validation
                        </Link>
                    </th>
                    <td>
                        Simple demo of validating the props data and types send into a component. The&nbsp;
                        <strong>Object Match Game</strong> does this well.
                    </td>
                    </tr>

                    <tr>
                    <th scope="row">
                        <Link to="/EventExampleApp">
                            Event Example
                        </Link>
                    </th>
                    <td>
                        A demonstration on how every React function receives an event, usually known as <code>e</code> - even if it is not specified.
                    </td>
                    </tr>

                    <tr>
                    <th scope="row">
                        <Link to="/UsedNumbersApp">
                            Used Numbers App
                        </Link>
                    </th>
                    <td>
                        This concept maintains a list of available numbers, a list of used numbers, and a list of all avaialable numbers.
                        This exercise helped layout the logic in the Object Match Game.
                    </td>
                    </tr>

                    <tr>
                    <th scope="row">
                        <Link to="/RoutingExampleApp">
                            Routing Example App
                        </Link>
                    </th>
                    <td>
                        Concept using <code>react-router-dom</code>.  Uses <code>BrowserRouter</code> and <code>Link</code>.
                    </td>
                    </tr>
                </tbody>
            </table>

            <h4 className="mt-5">Demo Apps</h4>
            <table className="table table-responsive table-sm my-3">
                <tbody>
                    <tr>
                    <th scope="row">
                        <Link to="/ColorSelectorDemoClassesApp">Color Selector Class Demo</Link>
                    </th>
                    <td>
                        App takes value of clicked button, builds new <code>config</code> object, and updates alert.
                        Uses State and passes data in props. Done with Class Components.
                    </td>
                    </tr>

                    <tr>
                    <th scope="row">
                        <Link to="/ColorSelectorDemoFunctionsApp">
                            Color Selector Function Demo
                        </Link>
                    </th>
                    <td>
                        App takes value of clicked button, builds new <code>config</code> object, and updates alert.
                        Uses State and passes data in props. Done with Function Components.
                    </td>
                    </tr>

                    <tr>
                    <th scope="row">
                        <Link to="/CounterButtonApp">
                            Counter Button App
                        </Link>
                    </th>
                    <td>
                        Simple app that updates State with value sent by click event.
                    </td>
                    </tr>

                    <tr>
                    <th scope="row">
                        <Link to="/TimerDisplayApp">
                            Timer Display App
                        </Link>
                    </th>
                    <td>
                        Uses <code>hooks</code> and clean up routines such as <code>useEffect()</code>.
                        Uses <code>setInterval()</code> to update every second.
                    </td>
                    </tr>

                    <tr>
                    <th scope="row">
                        <Link to="/MultiButtonsApp">
                            Multi Buttons App
                        </Link>
                    </th>
                    <td>
                        Demostrates using <code>map()</code> to map an array to a list of components.  Each one having thr ability
                        to update state in it's parent component.
                    </td>
                    </tr>

                    <tr>
                    <th scope="row">
                        <Link to="/FormDemoApp">
                            Form Demo App
                        </Link>
                    </th>
                    <td>
                        Basic demonstration on how to use basic form elements and how to bind them to state objects.
                    </td>
                    </tr>

                    <tr>
                    <th scope="row">
                        <Link to="/PropsChildrenExampleApp">
                            Props Children Example App
                        </Link>
                    </th>
                    <td>
                        Demonstration of how we can read a prop value and can conditionally nullify (not show) the children of a component.
                    </td>
                    </tr>

                    <tr>
                    <th scope="row">
                        <Link to="/StateDemoApp">
                            State Demo App
                        </Link>
                    </th>
                    <td>
                        Demonstrates how when a component's state is updated, the component is re-rendered but it can maintain
                        its own <code>State</code> if needed.
                    </td>
                    </tr>

                </tbody>
            </table>

            <h4 className="mt-5">Full Apps</h4>
            <table className="table table-responsive table-sm my-3">
                <tbody>
                    <tr>
                    <th scope="row">
                        <Link to="/GitHubCardsApp">
                            GitHub Cards App
                        </Link>
                    </th>
                    <td>
                        Makes a call to the GitHub API for a user profile, adds to list, and updates display.  Uses State.
                    </td>
                    </tr>

                    <tr>
                    <th scope="row">
                        <Link to="/TicTacToeApp">
                            Tic Tac Toe App
                        </Link>
                    </th>
                    <td>
                        Follows tutorial from Reactjs.org. Nice example of using a history of moves.
                    </td>
                    </tr>

                    <tr>
                    <th scope="row">
                        <Link to="/ObjectMatchGameApp">
                            Object Match Game App
                        </Link></th>
                    <td>
                        A moderately complex design. Many components managing their own state.  Match the object to its parent.
                    </td>
                    </tr>
                </tbody>
            </table>
       </div>
   );
};

export default Overview;