import React from 'react';
import Answer from './Answer';


const AnswerList = (props) =>
{
   return (
       <div>
           {
               props.PossibleAnswers.map((bookName) => <Answer key={bookName} Answer={bookName} SelectedAuthor={props.SelectedAuthor} AnswerHanderRef={props.AnswerHandlerRef} />)
           }
       </div>
   );
};

export default AnswerList;