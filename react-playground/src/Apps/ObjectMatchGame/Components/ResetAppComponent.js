import React from 'react';

const ResetAppComponent = (props) =>
{
   return (
       <div className="border m-1 p-1 bg-white">
           <div className="text-center">
               <button className="btn btn-primary" onClick={() => { props.ResetAppRef() }}>New Game</button>
           </div>
        </div>
   );
};

export default ResetAppComponent;