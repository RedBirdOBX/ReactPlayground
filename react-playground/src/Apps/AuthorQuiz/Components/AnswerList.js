import React from 'react';
import Answer from './Answer';

const AnswerList = (props) =>
{
   return (
       <div>
        {
            props.Answers.map((book) => <Answer key={book} Answer={book} Author={props.Author} />)
        }
        </div>
   );
};

export default AnswerList;