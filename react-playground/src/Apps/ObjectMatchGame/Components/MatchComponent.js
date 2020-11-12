import React from 'react';

const MatchComponent = (props) =>
{

    const ProcessAnswer = (answer) =>
    {
        console.log("selecting " + answer);

        if (answer === props.Object.Match)
        {
            console.log("Correct!");
        }
        else
        {
            console.log("Incorrect!");
        }
    };

   return (
       <div className="border p-1 m-1 bg-white">
           {props.Answer}<br />
           <small>(correct answer {props.Object.Match})</small><br />
           <button onClick={()=> { ProcessAnswer(props.Answer)} } >Select This Answer</button>
        </div>
   );
};

export default MatchComponent;