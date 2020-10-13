import React from 'react';
import Answer from './Answer';

const AnswerList = (props) =>
{

    const HighlightToBgColor = () => {
        let mapping = { "none": "", "correct": "green", "wrong": "red" };

        // this is interesting.  dynamically selecting a property...
        return mapping[props.Highlight];
    };

   return (
       <div style={{ backgroundColor: HighlightToBgColor() }}>
           {/* <Choice Title={props.Choices[0]} AnswerSelected={props.ChoiceSelectionHander} ChoiceNumber={1} />
           <Choice Title={props.Choices[1]} AnswerSelected={props.ChoiceSelectionHander} ChoiceNumber={2} />
           <Choice Title={props.Choices[2]} AnswerSelected={props.ChoiceSelectionHander} ChoiceNumber={3} />
           <Choice Title={props.Choices[3]} AnswerSelected={props.ChoiceSelectionHander} ChoiceNumber={4} /> */}

           {
               props.Answers.map((book) => <Answer key={book} AnswerSelected={props.ChoiceSelectionHander} Title={book} />)
           }
        </div>
   );
};

export default AnswerList;