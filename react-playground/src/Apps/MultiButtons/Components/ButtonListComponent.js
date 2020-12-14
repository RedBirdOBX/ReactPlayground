import React from 'react';
import ButtonComponent from './ButtonComponent';

let _buttons = [];
const _numOfButtons = 100;

for (let index = 1; index <= _numOfButtons; index++)
{
    _buttons.push(index)
}


const ButtonListComponent = (props) =>
{
    return (
    <div>
        {_buttons.map(btn =>
            <ButtonComponent
                BtnClickEvent={props.BtnClickHandler}
                key={btn}
                ButtonNumber={btn}
            />)
        }
    </div>);

};

export default ButtonListComponent;