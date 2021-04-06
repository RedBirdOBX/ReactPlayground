import React from 'react';
import GreetingComponent from './Components/GreetingComponent';


const PassingPropsApp = () =>
{
   return (
       <div className="mt-3">
            <h2>Passing Props</h2>
            <GreetingComponent Message={"Hello World!"} AnswerToLife={42} />
        </div>
   );
};

export default PassingPropsApp;