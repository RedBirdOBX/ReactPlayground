import React from 'react';

const SquareComponent = (props) => {
    return (
        <button className="square" onClick={() => props.OnSquareClick()}>
            {props.value}
        </button>
    );
};

export default SquareComponent;
