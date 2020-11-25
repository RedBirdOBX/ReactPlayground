import React from 'react';
import PropTypes from 'prop-types';

const InstructionsComponent = (props) =>
{
   return (
       <div className="p-1">
           <div className="card text-white bg-dark mb-3">
               <div className="card-body">
                   <h3 className="card-title text-center">{props.ObjectsName} and {props.MatchesName} Match Game</h3>
                   <p className="card-text">
                        Select the correct {props.MatchesName.toLowerCase().substring(0, props.MatchesName.length - 1)} which the&nbsp;
                        {props.ObjectsName.toLowerCase().substring(0, props.ObjectsName.length - 1)} wrote. Try to get to the end of the game without
                        any incorrect answers.
                    </p>
                    <p>
                       There are <strong>{props.ObjectCount}</strong> possible {props.ObjectsName.toLowerCase()} in this game.
                    </p>
               </div>
           </div>
       </div>
   );
};

InstructionsComponent.propTypes =
{
    MatchesName: PropTypes.string.isRequired,
    ObjectsName: PropTypes.string.isRequired
}

export default InstructionsComponent;