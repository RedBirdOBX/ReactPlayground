import React from 'react';

const Choice = (props) =>
{
   return (
       <div onClick={() => { props.AnswerSelected(props.Title) } }>
           {props.Title}
        </div>
   );
};

export default Choice;