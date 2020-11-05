import React from 'react';

const NextAuthorComponent = (props) =>
{
   return (
       <div className="text-center d-none">
           <button className="btn btn-primary btn-lg" onClick={() => { props.ClickHander(); }}>
               Next Author
            </button>
       </div>
   );
};

export default NextAuthorComponent;