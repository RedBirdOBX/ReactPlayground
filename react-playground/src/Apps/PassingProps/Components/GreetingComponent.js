import React from 'react';


const GreetingComponent = (props) =>
{
   return (
       <div className="mt-3">
            <h4>{props.Message}</h4>
            <h4>The answer to life is {props.AnswerToLife}</h4>
        </div>
   );
};

export default GreetingComponent;