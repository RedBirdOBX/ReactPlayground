import React from 'react';
import {Link} from 'react-router-dom';

const WelcomeComponent = () =>
{
   return (
        <div>
           <p>Welcome. This is the component to be shown if the route is "/".</p>
           <p><Link to="/">Welcome Component</Link></p>
           <p><Link to="/Foo">Foo Component</Link></p>
           <p><Link to="/Detail/42">Detail:42 Component</Link></p >

           <p>
               <strong>HTML versions</strong>. Notice the page refreshes here.  It is an actual HTTP request.
               The <code>&lt;Link /&gt;</code> does not.
            </p>
           <p><a href="/">Welcome</a></p>
           <p><a href="/foo">Foo</a></p>
           <p><a href="/detail/42">Detail 42</a></p>
        </div>
   );
};

export default WelcomeComponent;