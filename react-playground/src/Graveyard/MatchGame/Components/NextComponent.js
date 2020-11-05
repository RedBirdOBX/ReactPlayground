import React from 'react';

const NextComponent = (props) =>
{
   return (
       <div className="border p-1 text-center">
           <h4>Next Component</h4>
           <button className="btn btn-primary" onClick={() => { props.NextTurnRef() } }>Next</button>
        </div>
   );
};

export default NextComponent;