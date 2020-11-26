import React, {useState} from 'react';
import PropTypes from 'prop-types';

const MatchComponent = (props) =>
{
    // THIS IS RENDERED with each click //

    let answerStatus = "";

    const ProcessAnswer = (answer) =>
    {
        let correctIcon = document.getElementById(`correct-icon-${BuildId(props.Answer)}`);
        let incorrectIcon = document.getElementById(`incorrect-icon-${BuildId(props.Answer)}`);

        if (answer === props.Object.Match)
        {
            answerStatus = "correct";

            correctIcon.removeAttribute("class");
            correctIcon.setAttribute("class","fas fa-check mx-2");
            incorrectIcon.removeAttribute("class");
            incorrectIcon.setAttribute("class", "fas fa-times mx-2 d-none");

            UpdateAnswerStyle("answerCorrect");
        }
        else
        {
            answerStatus = "incorrect";

            correctIcon.removeAttribute("class");
            correctIcon.setAttribute("class", "fas fa-check mx-2 d-none");
            incorrectIcon.removeAttribute("class");
            incorrectIcon.setAttribute("class", "fas fa-times mx-2");

            UpdateAnswerStyle("answerIncorrect");
        }
        props.UpdateScoreRef(answerStatus);
    };

    const BuildId = (answer) =>
    {
        let spaceRegEx = / /g;
        let commaRegEx = /,/g;
        answer = answer.replace(spaceRegEx, "").replace(commaRegEx, "");
        return answer;
    };

    const [answerStyle, UpdateAnswerStyle] = useState("answerNative");

   return (
       <div>
            <div className={answerStyle} onClick={() => ProcessAnswer(props.Answer) }>
            <h5>
                {props.Answer}
                    <span className="fas fa-check mx-2 d-none" id={"correct-icon-" + BuildId(props.Answer)}></span>
                    <span className="fas fa-times mx-2 d-none" id={"incorrect-icon-" + BuildId(props.Answer)}></span>
                </h5>
            </div>
       </div>
   );
};

MatchComponent.propTypes =
{
    Answer: PropTypes.string.isRequired
}

export default MatchComponent;