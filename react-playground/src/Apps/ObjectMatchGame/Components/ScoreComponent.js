import React from 'react';

const ScoreComponent = (props) =>
{
   return (
       <div className="border m-1 p-1 bg-white">
           <h4>Score Component</h4>
           correct: {props.Correct}<br />
           incorrect: {props.Incorrect}
        </div>
   );
};

export default ScoreComponent;