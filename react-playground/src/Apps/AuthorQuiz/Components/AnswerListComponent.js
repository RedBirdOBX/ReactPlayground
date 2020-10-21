import React from 'react';
import Answer from './AnswerComponent';


const AnswerListComponent = (props) =>
{
   return (
       <div>
           {
               props.PossibleAnswers.map((bookName) => <Answer
                                                        key={bookName}
                                                        Answer={bookName}
                                                        Author={props.Author}
                                                        ProcessAnswerRef={props.ProcessAnswerRef} />)
           }
       </div>
   );
};

export default AnswerListComponent;