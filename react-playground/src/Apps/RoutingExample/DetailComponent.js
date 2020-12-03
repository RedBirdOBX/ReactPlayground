import React from 'react';

const DetailComponent = (props) =>
{
   return (
       <div>
            <p>
                This is the Detail component.
                This is rendered when the url is "/detail/(n)".
            </p>

            <h4>This id in the route is {props.match.params.id}</h4>

        </div>
   );
};

export default DetailComponent;