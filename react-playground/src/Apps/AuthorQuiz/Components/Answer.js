import React, { useState } from 'react';

const Answer = (props) =>
{
    // state & hooks
    const [bgColor, SetBgColor] = useState("");

    const ProcessAnswer = (answer, author) =>
    {
        let isCorrect = author.Books.some((book) => book === answer);
        let answerStatus = isCorrect ? "correct" : "wrong";
        SetBgColor(GetBackgroundColor(answerStatus));
    };

    const GetBackgroundColor = (answerStatus) =>
    {
        let mapping =
        {
            "none": "",
            "correct": "green",
            "wrong": "red"
        };

        return mapping[answerStatus];
    };


   return (
       <div className="answer" style={{ backgroundColor: bgColor }} onClick={() => { ProcessAnswer(props.Answer, props.Author); }}>
           {props.Answer}
        </div>
   );
};

export default Answer;