import React from 'react';
import PropTypes from 'prop-types';

const MessageComponent = (props) =>
{
   return (
        <div>
            <h5>{props.Greeting} I have ${props.Pocket1 + props.Pocket2}.</h5>
            <p>View Console.  We should have $3.00. We're sending in 1 and also "2".... as a string.</p>
        </div>
   );
};


// here, we add a new propTypes property to the component.
// the value of propTypes is an object.
MessageComponent.propTypes =
{
    // key  value
    Pocket1: PropTypes.number.isRequired,

    Pocket2: PropTypes.number.isRequired
}

export default MessageComponent;