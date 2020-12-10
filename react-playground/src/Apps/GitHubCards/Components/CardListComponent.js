import React from 'react';
import ProfileCardComponent from './ProfileCardComponent';

class CardListComponent extends React.Component
{

    render() {
        return (<div>
            {this.props.Profiles.map(profile => <ProfileCardComponent key={profile.id} {...profile} />)}
        </div>);
    }
}

export default CardListComponent;
