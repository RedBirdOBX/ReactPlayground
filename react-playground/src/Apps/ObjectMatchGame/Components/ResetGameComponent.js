import React from 'react';
import PropTypes from 'prop-types';

const ResetAppGame = (props) =>
{
   return (
       <div>
           <div className="text-center">
               <button className="btn btn-success" onClick={() => { props.ResetAppRef() }}>New Game ?</button>
           </div>
        </div>
   );
};

ResetAppGame.propTypes =
{
    ResetAppRef: PropTypes.func.isRequired
}

export default ResetAppGame;