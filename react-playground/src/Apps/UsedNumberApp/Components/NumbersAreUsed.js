import React from 'react';

const NumbersAreUsedComponent = (props) =>
{
   return (
       <div className="border m-1 p-1 bg-white">
           <h4>
               Numbers Are Used Component
            </h4>
           <div className="text-danger text-center">
               All numbers are all used.
            </div>
        </div>
   );
};

export default NumbersAreUsedComponent;