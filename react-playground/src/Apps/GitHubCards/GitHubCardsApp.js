import React from 'react';
import HeaderComponent from './Components/HeaderComponent';
import FormComponent from './Components/FormComponent';
import CardListComponent from './Components/CardListComponent';

// NOTES:
// This app has two state objects.
// The app has a state ob called Profiles.  It passes this down to the CardList component and is used by the ProfileCard.
// Whenever the form submits a new GitHub profile, calls the AddnewProfile method in the App and updates the state.
//
// The form also uses state and has a prop called UserName. It starts off empty and with each change event in the form
// input, it updates the form's state 'UserName'.  We do this in case we needed to apply validation rules against the current
// value.  Eventually, the UserName is populated with GitHub data and sent back up to the app level.


class GitHubCardApp extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            Profiles: this.GetDefaultProfiles()
        };
    }

    GetDefaultProfiles = () =>
    {
        let results = [];

        //https://api.github.com/users/redbirdobx
        let defaultProfile =
        {
            "login": "RedBirdOBX",
            "id": 11718655,
            "node_id": "MDQ6VXNlcjExNzE4NjU1",
            "avatar_url": "https://avatars1.githubusercontent.com/u/11718655?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/RedBirdOBX",
            "html_url": "https://github.com/RedBirdOBX",
            "followers_url": "https://api.github.com/users/RedBirdOBX/followers",
            "following_url": "https://api.github.com/users/RedBirdOBX/following{/other_user}",
            "gists_url": "https://api.github.com/users/RedBirdOBX/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/RedBirdOBX/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/RedBirdOBX/subscriptions",
            "organizations_url": "https://api.github.com/users/RedBirdOBX/orgs",
            "repos_url": "https://api.github.com/users/RedBirdOBX/repos",
            "events_url": "https://api.github.com/users/RedBirdOBX/events{/privacy}",
            "received_events_url": "https://api.github.com/users/RedBirdOBX/received_events",
            "type": "User",
            "site_admin": false,
            "name": "Shane Fowlkes",
            "company": "Cedar Fair Entertainment, Self",
            "blog": "",
            "location": "Richmond VA",
            "email": null,
            "hireable": null,
            "bio": "20+ years in development.  Senior Software, Full Stack Developer. DevOps Manager. Release Manager. Team Lead. Janitor.",
            "twitter_username": null,
            "public_repos": 5,
            "public_gists": 0,
            "followers": 0,
            "following": 1,
            "created_at": "2015-03-30T11:10:54Z",
            "updated_at": "2020-07-27T19:41:14Z"
        };

        results.push(defaultProfile);
        return results;
    }

    AddNewProfile = (profile) =>
    {
        // approach 1
        // // adding to Profiles state obj
        // let currentProfiles = this.state.Profiles;
        // // before: console.dir(currentProfiles);
        // currentProfiles.push(profile);
        // let newProfiles = currentProfiles;
        // this.setState({ Profiles: newProfiles });

        // approach #2 - use concat
        // fix this:  https://dsf-js-playground.azurewebsites.net/Javascript/Arrays/Concat
        // let newProfiles = [];
        // newProfiles.push(profile);
        // newProfiles = newProfiles.concat(this.state.Profiles);
        // this.setState({ Profiles: newProfiles });

        // approach #3 - more advanced approach
        // prevState will give you access to the previous state
        // what it returns is the NEW state..so we say Profiles is the old state...spread...and add the new element to the array!
        this.setState(prevState => ({ Profiles: [...prevState.Profiles, profile] }));
    };

    render()
    {
        return(
            <div>
                <HeaderComponent Title={"The GitHub Profiles App"} />
                <FormComponent OnSubmitRef={this.AddNewProfile} />
                <CardListComponent Profiles={this.state.Profiles} />
            </div>
        );
    }
}

export default GitHubCardApp;