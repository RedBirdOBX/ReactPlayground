import React, {useState} from 'react';

function Score(right, wrong)
{
    this.Right = right;
    this.Wrong = wrong;
}


const ScoreComponent = () =>
{
    let startingScore = new Score(0, 0);
    const [score, UpdateScore] = useState(startingScore);

    const ProcessScore = (isCorrect) =>
    {
        let newScore = new Score(score.Right, score.Wrong);

        if (isCorrect)
        {
            newScore.Right = newScore.Right + 1;
        }
        else
        {
            newScore.Wrong = newScore.Wrong + 1;
        }

        UpdateScore(newScore);
    }

   return (
       <div className="text-center border p-2">
           <h4>Score Component</h4>
            <div>
                Right: [{score.Right}] Wrong: [{score.Wrong}]
            </div>
            <div>
                <button onClick={() => ProcessScore(true) }>Right</button>
                <button onClick={() => { ProcessScore(false) }}>Wrong</button>
           </div>
        </div>
   );
};

export default ScoreComponent;