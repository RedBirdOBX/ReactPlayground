import React from 'react';
import WelcomeComponent from './WelcomeComponent';
import FooComponent from './FooComponent';
import DetailComponent from './DetailComponent';
import {BrowserRouter, Route} from 'react-router-dom';


const RoutingExampleComponent = (props) =>
{
   return (
       <div>
           <BrowserRouter>
                <Route exact path="/" component={WelcomeComponent} />
                <Route exact path="/foo" component={FooComponent} />
                <Route exact path="/detail/:id" component={DetailComponent} />
           </BrowserRouter>
       </div>
   );
};

export default RoutingExampleComponent;