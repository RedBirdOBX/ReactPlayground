import React from 'react';
import { Link } from 'react-router-dom';

const FooComponent = (props) =>
{
   return (
       <div>
           <p>This is the Foo component. This is rendered when the url is "/foo".</p>
           <p><Link to="/RoutingExampleApp">Welcome Component</Link></p>
           <p><Link to="/RoutingExampleApp/Foo">Foo Component</Link></p>
           <p><Link to="/RoutingExampleApp/Detail/42">Detail:42 Component</Link></p >

           <p>
               <strong>HTML versions</strong>. Notice the page refreshes here.  It is an actual HTTP request.
               The <code>&lt;Link /&gt;</code> does not.
            </p>
           <p><a href="/RoutingExampleApp">Welcome</a></p>
           <p><a href="/RoutingExampleApp/foo">Foo</a></p>
           <p><a href="/RoutingExampleApp/detail/42">Detail 42</a></p>
        </div>
   );
};

export default FooComponent;