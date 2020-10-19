import React from 'react';

const Continue = (props) =>
{
   return (
       <div className="text-center">
           <button className="btn btn-primary btn-lg" onClick={() => { props.ClickHander(); }}>
               Next Author
            </button>
       </div>
   );
};

export default Continue;