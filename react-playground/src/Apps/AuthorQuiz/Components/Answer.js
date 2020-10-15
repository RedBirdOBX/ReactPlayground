import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Should receive 2 props: Answer, & Author

const Answer = (props) =>
{
    // state & hooks
    const [bgColor, SetBgColor] = useState("");

    const ProcessAnswer = (answer, author) =>
    {
        console.log("answer is " + answer);
        console.log("author is " + author.Name);
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

// adding new property of type 'propTypes'.
Answer.propTypes =
{
    Answer: PropTypes.string.isRequired,
    Author: PropTypes.object.isRequired
}

export default Answer;