import React, { useState } from 'react';

const AnswerComponent = (props) =>
{

    const [bgColor, SetBgColor] = useState("");

    const ProcessAnswer = (answer, author) =>
    {
        let isCorrect = author.Books.some((book) => book === answer);
        let answerStatus = isCorrect ? "correct" : "wrong";

        console.log(`The selected answer '${answer}' was ${answerStatus.toUpperCase()} for the author ${author.Name}.`);

        SetBgColor(GetBackgroundColor(answerStatus));
        UpdateScore(isCorrect);
    };

    const UpdateScore = (isCorrect) => 
    {
        //props.ProcessAnswerRef(isCorrect);
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

export default AnswerComponent;