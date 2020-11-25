import React from 'react';
import ResetGameComponent from './ResetGameComponent';
import PropTypes from 'prop-types';

const GameOverComponent = (props) =>
{
    let msg = "";
    let percentCorrect = props.Correct / (props.Correct + props.Incorrect);

    if (percentCorrect <= 0.5)
    {
        msg = "Yeah....maybe you'd better suited for project management or something.";
    }
    else if (percentCorrect > 0.5 && percentCorrect < 0.75)
    {
        msg = "Not too bad. You are not a Pakled.";
    }
    else if (percentCorrect > 0.75 && percentCorrect < 1)
    {
        msg = "Impressive. Most impressive.";
    }
    else
    {
        msg = "You rock.  This is the way.";
    }

    return (
        <div>
            <h4 className="text-center">Game Over</h4>
            <p className="text-center my-5">{msg}</p>
            <ResetGameComponent ResetAppRef={props.ResetAppRef} />
        </div>
   );
};

GameOverComponent.propTypes =
{
    Correct: PropTypes.number.isRequired,
    Incorrect: PropTypes.number.isRequired
}

export default GameOverComponent;