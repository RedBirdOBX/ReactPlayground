import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Should receive 2 props: Answer, & Author

const Answer = (props) =>
{
    // state & hooks
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
        //console.dir(props);
        props.AnswerHanderRef(isCorrect);
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

// adding new property of type 'propTypes'.
Answer.propTypes =
{
    Answer: PropTypes.string.isRequired,
    Author: PropTypes.object.isRequired
}

export default Answer;