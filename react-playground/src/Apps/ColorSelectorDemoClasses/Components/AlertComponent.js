import React from 'react';

class AlertComponent extends React.Component
{
    render() {
        return (
            <div className={this.props.Config.AlertStyle} role="alert">
               {this.props.Config.Message}
            </div>);
    }
}

export default AlertComponent;