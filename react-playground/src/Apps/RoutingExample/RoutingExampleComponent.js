import React from 'react';

const RoutingExampleComponent = (props) =>
{
   return (
       <div>
           <BrowserRouter>
                <Route exact path="/" component={WelcomeComponent} />
           </BrowserRouter>
       </div>
   );
};

export default RoutingExampleComponent;