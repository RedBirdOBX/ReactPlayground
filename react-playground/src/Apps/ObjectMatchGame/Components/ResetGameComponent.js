import React from 'react';

const ResetAppGame = (props) =>
{
   return (
       <div>
           <div className="text-center">
               <button className="btn btn-success" onClick={() => { props.ResetAppRef() }}>New Game ?</button>
           </div>
        </div>
   );
};

export default ResetAppGame;