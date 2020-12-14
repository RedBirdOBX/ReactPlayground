import React from 'react';

const DisplayComponent = (props) =>
{
   return (
       <h4 className="text-center my-5">{props.Message}</h4>
   );
};

export default DisplayComponent;