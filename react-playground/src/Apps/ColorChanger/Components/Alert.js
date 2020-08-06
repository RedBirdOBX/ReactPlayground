import React from 'react';


class Alert extends React.Component {

    render() {
        return (
            <div className={this.props.Config.Message} role="alert">
               Hello
            </div>);
    }
}

export default Alert;