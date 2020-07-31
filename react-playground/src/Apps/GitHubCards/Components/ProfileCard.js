import React from 'react';

class ProfileCard extends React.Component
{
    render()
    {
        return (
            <div className="github-profile">
                <img src={this.props.avatar_url} />
                <div className="info">
                    <div className="name">{this.props.name}</div>
                    <div className="txt">{this.props.company}</div>
                    <div className="txt">{this.props.location}</div>
                </div>
            </div>);
    }
}


export default ProfileCard;