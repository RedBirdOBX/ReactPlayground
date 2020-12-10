import React from 'react';

const Overview = () =>
{
   return (
       <div className="my-2">
            <h4>Demo Apps</h4>
            <table className="table table-responsive table-sm my-2">
                <tbody>
                    <tr>
                    <th scope="row">Color Selector Demo (Classes)</th>
                    <td>
                        App takes value of clicked button, builds new <code>config</code> object, and updates alert.
                        Uses State and passes data in props. Done with Class Components.
                    </td>
                    </tr>

                    <tr>
                    <th scope="row">Color Selector Demo (Functions)</th>
                    <td>
                        App takes value of clicked button, builds new <code>config</code> object, and updates alert.
                        Uses State and passes data in props. Done with Function Components.
                    </td>
                    </tr>

                    <tr>
                    <th scope="row">Counter Button App</th>
                    <td>
                        Simple app that updates State with value sent by click event.
                    </td>
                    </tr>

                    <tr>
                    <th scope="row">Timer Display App</th>
                    <td>
                        Uses <code>hooks</code> and clean up routines such as <code>useEffect()</code>.
                        Uses <code>setInterval()</code> to update every second.
                    </td>
                    </tr>
                </tbody>
            </table>

            <h4 className="mt-5">Full Apps</h4>
            <table className="table table-responsive table-sm my-2">
                <tbody>
                    <tr>
                    <th scope="row">GitHub Card App</th>
                    <td>
                        Makes a call to the GitHub API for a user profile, adds to list, and updates display.  Uses State.
                    </td>
                    </tr>

                    <tr>
                    <th scope="row">Tic Tac Toe App</th>
                    <td>
                        Follows tutorial from Reactjs.org. Nice example of using a history of moves.
                    </td>
                    </tr>
                </tbody>
            </table>
       </div>
   );
};

export default Overview;