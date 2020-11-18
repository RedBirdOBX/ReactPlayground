import React, {useState} from 'react';

const MatchComponent = (props) =>
{

    // GOAL: Alter the button or div when selected
    console.log("match rendered for " + props.Answer);
    // THIS IS RENDERED with each click


    let isCorrect = "";

    const ProcessAnswer = (answer) =>
    {
        if (answer === props.Object.Match)
        {
            isCorrect = "correct";
            UpdateButtonTextColor("green");
        }
        else
        {
            isCorrect = "incorrect";
            UpdateButtonTextColor("red");
        }
        props.UpdateScoreRef(isCorrect);
    };

    const [buttonTextColor, UpdateButtonTextColor] = useState("black");

   return (
       <div className="border p-1 m-1 bg-white">
           <h4>Match Component</h4>
           <strong>**{props.Answer}**</strong><br />
           <small>(correct answer {props.Object.Match})</small><br />
           <button
                onClick={()=> { ProcessAnswer(props.Answer)} }
                style={
                    {
                        color: buttonTextColor,

                        // not working but right idea....
                        disabled: (isCorrect === "") ? "" : "disabled"
                    }}
                >
                Select This Answer
            </button>
        </div>
   );
};

export default MatchComponent;