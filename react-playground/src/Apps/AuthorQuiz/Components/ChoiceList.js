import React from 'react';
import Choice from './Choice';

const ChoiceList = (props) =>
{
   return (
       <div>
           <div>choices</div>
           <Choice Title={props.Choices[0]} AnswerSelected={props.ChoiceSelectionHander} ChoiceNumber={1} />
           <Choice Title={props.Choices[1]} AnswerSelected={props.ChoiceSelectionHander} ChoiceNumber={2} />
           <Choice Title={props.Choices[2]} AnswerSelected={props.ChoiceSelectionHander} ChoiceNumber={3} />
           <Choice Title={props.Choices[3]} AnswerSelected={props.ChoiceSelectionHander} ChoiceNumber={4} />
        </div>
   );
};

export default ChoiceList;