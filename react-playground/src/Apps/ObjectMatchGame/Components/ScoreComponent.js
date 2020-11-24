import React from 'react';

const ScoreComponent = (props) =>
{
   return (
       <div className="border m-1 p-1 bg-white">
           <h5>Your Score</h5>
            <div>
                <span className="badge badge-pill badge-success">{props.Correct}</span>&nbsp;
                <span className="text-success"><strong>correct</strong></span>
            </div>
            <div>
                <span className="badge badge-pill badge-danger">{props.Incorrect}</span>&nbsp;
                <span className="text-danger"><strong>incorrect</strong></span>
            </div>
        </div>
   );
};

export default ScoreComponent;