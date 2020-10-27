import React from 'react';

const NextTurnComponent = (props) =>
{
   return (
        <div>
            <button onClick={() => props.NextTurnRef() }>Next Author</button>
        </div>
   );
};

export default NextTurnComponent;