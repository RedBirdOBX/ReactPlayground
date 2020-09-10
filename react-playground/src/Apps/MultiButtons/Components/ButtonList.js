import React from 'react';
import Button from './Button';

let _buttons = [];
const _numOfButtons = 100;

for (let index = 1; index <= _numOfButtons; index++)
{
    _buttons.push(index)
}


const ButtonList = (props) =>
{
    return (
    <div>
        {_buttons.map(btn =>
            <Button
                BtnClickEvent={props.BtnClickHandler}
                key={btn}
                ButtonNumber={btn}
            />)
        }
    </div>);

};

export default ButtonList;