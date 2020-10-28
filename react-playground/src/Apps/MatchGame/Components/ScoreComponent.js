import React, {useState} from 'react';

function Score(right, wrong)
{
    this.Right = right;
    this.Wrong = wrong;
}


const ScoreComponent = () =>
{

    const [score, UpdateScore] = useState(new Score(0,0));
//    const UpdateState = (newVal) => 
//    {
//        setMyStateOb(newVal);
//    }

   return (
       <div>Right: [{score.Right}] Wrong: [{score.Wrong}]</div>
   );
};

export default ScoreComponent;