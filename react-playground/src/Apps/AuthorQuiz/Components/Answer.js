import React from 'react';

const Answer = (props) =>
{
   return (
       <div className="answer" onClick={() => { props.AnswerSelected(props.Title) } }>
           {props.Title}
        </div>
   );
};

export default Answer;