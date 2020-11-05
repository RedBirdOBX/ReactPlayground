import React from 'react';

const NewGameComponent = (props) =>
{
   return (
       <div className="text-center">
           <button className="btn btn-primary" onClick={() => props.NewGameRef() }>
               New Game
            </button>
       </div>
   );
};

export default NewGameComponent;