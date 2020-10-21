import React from 'react';

const ScoreComponent = (props) =>
{
   return (
       <div className="row">
           <div className="col-6 text-center">
                <h5><span className="badge badge-success">{props.GameScore.Right}</span> Right</h5>
           </div>
           <div className="col-6 text-center">
               <h5><span className="badge badge-danger">{props.GameScore.Wrong}</span> Wrong</h5>
           </div>
       </div>
   );
};

export default ScoreComponent;