import React from 'react';

const ScoreComponent = (props) =>
{
   return (
       <div>
            <div className="row">
                <div className="col-6 text-center">
                    <h4>
                        <span className="badge badge-pill badge-success">{props.Correct}</span>&nbsp;
                        <span className="text-success"><strong>correct</strong></span>
                    </h4>
                </div>
                <div className="col-6 text-center">
                    <h4>
                        <span className="badge badge-pill badge-danger">{props.Incorrect}</span>&nbsp;
                        <span className="text-danger"><strong>incorrect</strong></span>
                    </h4>
                </div>
            </div>
        </div>
   );
};

export default ScoreComponent;