import React from 'react';

const Overview = () =>
{
   return (
       <div className="my-2">
            <h3>Demo Apps</h3>
            <table class="table table-responsive table-sm my-2">
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

                </tbody>
            </table>
       </div>
   );
};

export default Overview;