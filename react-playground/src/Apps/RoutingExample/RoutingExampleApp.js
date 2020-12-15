import React from 'react';
import WelcomeComponent from './WelcomeComponent';
import FooComponent from './FooComponent';
import DetailComponent from './DetailComponent';
import {BrowserRouter, Route} from 'react-router-dom';


const RoutingExampleApp = () =>
{
   return (
       <div className="mt-3">
           <h4>Routing Example App</h4>
           <BrowserRouter>
                <Route exact path="/RoutingExampleApp" component={WelcomeComponent} />
                <Route exact path="/RoutingExampleApp/foo" component={FooComponent} />
                <Route exact path="/RoutingExampleApp/detail/:id" component={DetailComponent} />
           </BrowserRouter>
       </div>
   );
};

export default RoutingExampleApp;