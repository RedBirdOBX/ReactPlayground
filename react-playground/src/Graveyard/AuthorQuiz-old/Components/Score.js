import React from 'react';

const Score = (props) =>
{
    return (
        <div className="row">
            <div className="col-6 text-center">
                <h5><span className="badge badge-success">{props.Right}</span> Right</h5>
            </div>
            <div className="col-6 text-center">
                <h5><span className="badge badge-danger">{props.Wrong}</span> Wrong</h5>
            </div>
        </div>
    );
};

export default Score;