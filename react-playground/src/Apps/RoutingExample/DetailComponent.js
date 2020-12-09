import React from 'react';
import { Link } from 'react-router-dom';

const DetailComponent = (props) =>
{
   return (
       <div>
            <p>
                This is the Detail component.
                This is rendered when the url is "/detail/(n)".
            </p>

            <h4>This id in the route is {props.match.params.id}</h4>

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

export default DetailComponent;