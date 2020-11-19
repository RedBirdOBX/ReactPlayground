import React from 'react';

const InstructionsComponent = (props) =>
{
   return (
       <div className="border p-1 m-1 bg-white">
           <h4>Instructions Component</h4>
            <div className="jumbotron">
                <p>
                    Look at the current selected object and then select the one of four possible matches that matches the object.
                </p>
            </div>
       </div>
   );
};

export default InstructionsComponent;