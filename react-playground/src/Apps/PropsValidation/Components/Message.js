import React from 'react';
import PropTypes from 'prop-types';

const Message = (props) =>
{
   return (
        <div>{props.Greeting}. I have ${props.Pocket1 + props.Pocket2}.</div>
   );
};


// here, we add a new propTypes property to the function/object.
// the value of propTypes is an object.
Message.propTypes =
{

    // key  value
    Pocket1: PropTypes.number.isRequired,

    Pocket2: PropTypes.number.isRequired
}

export default Message;