import React, { useState } from 'react';

const Answer = (props) =>
{

    const [bgColor, SetBgColor] = useState("");

    const ProcessAnswer = (answer, selectedAuthor) =>
    {
        let isCorrect = selectedAuthor.Books.some((book) => book === answer);
        let answerStatus = isCorrect ? "correct" : "wrong";

        console.log(`The selected answer '${answer}' was ${answerStatus.toUpperCase()} for the author ${selectedAuthor.Name}.`);

        SetBgColor(GetBackgroundColor(answerStatus));
        UpdateScore(isCorrect);
    };

    const UpdateScore = (isCorrect) => {
        //console.dir(props);
        props.AnswerHanderRef(isCorrect);
    };

    const GetBackgroundColor = (answerStatus) => {
        let mapping =
        {
            "none": "",
            "correct": "green",
            "wrong": "red"
        };

        return mapping[answerStatus];
    };

   return (
       <div className="answer" style={{ backgroundColor: bgColor }} onClick={() => { ProcessAnswer(props.Answer, props.SelectedAuthor); }}>
           {props.Answer}
       </div>
   );
};

export default Answer;