import React from 'react';
import ProfileCard from './ProfileCard';

class CardList extends React.Component
{

    render() {
        return (<div>
            {this.props.Profiles.map(profile => <ProfileCard key={profile.id} {...profile} />)}
        </div>);
    }
}

export default CardList;
