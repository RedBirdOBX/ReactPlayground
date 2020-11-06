import React from 'react';

const ResetAppComponent = (props) =>
{
   return (
       <div className="border m-1 p-1 bg-white">
           <h3>Reset App Component</h3>
           <div className="text-center">
               <button className="btn btn-primary" onClick={() => { props.ResetAppRef() }}>Reset App</button>
           </div>
        </div>
   );
};

export default ResetAppComponent;