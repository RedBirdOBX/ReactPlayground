import React, {useState} from 'react';

const MatchComponent = (props) =>
{

    // GOAL: Alter the button or div when selected
    console.log("match rendered for " + props.Answer);
    // THIS IS RENDERED with each click


    let isCorrect = "";
    //let buttonStyle = "";

    const ProcessAnswer = (answer) =>
    {
        if (answer === props.Object.Match)
        {
            isCorrect = "correct";
            UpdateButtonTextColor("green");
            UpdateButtonStyle("btn-disable-correct");
        }
        else
        {
            isCorrect = "incorrect";
            UpdateButtonTextColor("red");
            UpdateButtonStyle("btn-disable-incorrect");
            //isDisabled="disabled";
            //console.log(isDisabled);
        }
        props.UpdateScoreRef(isCorrect);
    };

    const [buttonTextColor, UpdateButtonTextColor] = useState("black");
    const [buttonStyle, UpdateButtonStyle] = useState("");

   return (
       <div className="border p-1 m-1 bg-white">
           <h4>Match Component</h4>
           {props.Answer}<br />
           {/* <small>(correct answer {props.Object.Match})</small><br /> */}
           <button
                onClick={()=> { ProcessAnswer(props.Answer)} }
                    className={buttonStyle}
                >
                Select This Answer
            </button>
        </div>
   );
};

export default MatchComponent;