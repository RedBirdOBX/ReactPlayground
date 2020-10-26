import React from 'react';

const NewGameComponent = (props) =>
{
   return (
       <div className="text-center d-none">
           <button className="btn btn-primary btn-lg" onClick={() => { props.NewGameHandler(); }}>
               New Game
            </button>
       </div>
   );
};

export default NewGameComponent;