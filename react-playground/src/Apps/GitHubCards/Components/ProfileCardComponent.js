import React from 'react';

class ProfileCardComponent extends React.Component
{
    render()
    {
        console.dir(this.props);

        return (
            <div className="github-profile">
                <img src={this.props.avatar_url} />
                <div className="info">
                    <div className="name">{this.props.name}</div>
                    <div className="txt">{this.props.company}</div>
                    <div className="txt">{this.props.location}</div>
                    <div><a href={this.props.url} target="_blank">{this.props.url}</a></div>
                </div>
            </div>);
    }
}

export default ProfileCardComponent;