import React from 'react';

const ScoreComponent = (props) =>
{
    return (
        <div className="row">
            <div className="col-6 text-center">
                <h5><span className="badge badge-success">{props.Score.Right}</span> Right</h5>
            </div>
            <div className="col-6 text-center">
                <h5><span className="badge badge-danger">{props.Score.Wrong}</span> Wrong</h5>
            </div>
        </div>
    );
};

export default ScoreComponent;