import React from 'react';

const BuildButton = (type) => {
    return `<button class="btn btn-lg btn-${type}">${type} button</button>`;
};

let buttonTypes = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"];
let buttons = buttonTypes.map(BuildButton);



class Buttons extends React.Component
{
    // HandleButtonClick = () =>
    // {
    //     this.props.OnClickHandler(this.props.Incrementor);
    // };

/* <button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button> */




    render()
    {
        return (<div>{buttons}</div>);
    }
}

export default Buttons;