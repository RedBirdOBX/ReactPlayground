import React from 'react';


class Button extends React.Component {

    render() {
        return (
        <span>
                <button className={this.props.ButtonConfig.ButtonStyle}>{this.props.ButtonConfig.ButtonName}</button>
        </span>);
    }
}

export default Button;