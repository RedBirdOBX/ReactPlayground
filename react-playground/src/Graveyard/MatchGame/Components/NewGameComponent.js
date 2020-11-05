import React from 'react';

const NewGameComponent = (props) =>
{
   return (
            <div className="border p-1 text-center">
                <h4>New Game Component</h4>
                <button className="btn btn-primary" onClick={() => props.NewGameRef() }>
                    New Game
                </button>
            </div>
        );
};

export default NewGameComponent;