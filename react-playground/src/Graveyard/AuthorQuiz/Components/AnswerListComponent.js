import React from 'react';
import AnswerComponent from './AnswerComponent';

const AnswerListComponent = (props) =>
{
   return (
       <div>
           {
               props.PossibleAnswers.map((bookName) => <AnswerComponent
                   key={bookName}
                   Answer={bookName}
                   Author={props.Author}
                   ProcessAnswerRef={props.ProcessAnswerRef} />)
           }
        </div>
   );
};

export default AnswerListComponent;