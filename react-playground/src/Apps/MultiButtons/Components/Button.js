import React from 'react';

const Button = (props) =>
{
   return (
   <button
        className="btn btn-primary btn-lg m-1"
           onClick={() => props.BtnClickEvent(props.ButtonNumber)}>
        {props.ButtonNumber}
    </button>
   );
};

export default Button;