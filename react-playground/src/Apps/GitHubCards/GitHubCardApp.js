import React from 'react';

// NOTES:
// This app has two state objects.


// https://api.github.com/users/redbirdobx
const testData =
[
    {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
    {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
    {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];



class GitHubCardApp extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            Profiles: testData
        };
    }

    AddNewProfile = (profile) =>
    {
        console.log(profile);

        // adding to Profiles state obj
        let currentProfiles = this.state.Profiles;

        // before: console.dir(currentProfiles);
        currentProfiles.push(profile);

        let newProfiles = currentProfiles;
        // after: console.dir(newProfiles);

        this.setState({ Profiles: newProfiles });

        // approach #2 - use concat

        // approach #3 - more advanced approach
        // prevState will give you access to the previous state
        // what it returns is the NEW state..so we say Profiles is the old state...spread...and add the new element to the array!
        //this.setState(prevState => ({ Profiles: [...prevState.Profiles, profileData] }));
    };

    render()
    {
        return(
            <div>
                <h2 className="pt-5 text-center">The GitHub Cards App</h2>
                <Form OnSubmitRef={this.AddNewProfile} />
                <CardList Profiles={this.state.Profiles} />
            </div>
        );
    }
}

class CardList extends React.Component
{

    // will contain many cards

    // why isn't key working?
    // https://app.pluralsight.com/course-player?clipId=8f583202-ceab-46d0-bba8-482f0401e6a1
    // 7:00 ?

    render()
    {
        return (<div>
                    {/* <Card Profile={testData[0]} />
                    <Card2 {...testData[1]} /> */}
                    {this.props.Profiles.map(profile => <Card2 key={profile.id} {...profile} />)}
                </div>);
    }
}

class Card extends React.Component
{
    render()
    {
        return (
        <div className="github-profile">
            <img src={this.props.Profile.avatar_url} />
            <div className="info">
                <div className="name">{this.props.Profile.name}</div>
                <div className="copmany">{this.props.Profile.company}</div>
            </div>
        </div>);
    }
}

class Card2 extends React.Component
{
    // here's an alternate way of doing this.  We spread 'testData[1]' as props properties.
    // all the properties within testData[1] become properties sent to the component.
    // we then can just pick them up as this.props.{prop name of object}.
    render()
    {
        return (
            <div className="github-profile">
                <img src={this.props.avatar_url} />
                <div className="info">
                    <div className="name">{this.props.name}</div>
                    <div className="company">{this.props.company}</div>
                    <div className="company">{this.props.key}</div>
                </div>
            </div>);
    }
}

class Form extends React.Component
{
    constructor()
    {
        super();

        this.state =
        {
            UserName: ""
        };
    }

    HandleSubmit = async (event) =>
    {
        event.preventDefault();
        console.log(this.state.UserName);

        let apiUrl = `https://api.github.com/users/${this.state.UserName}`;
        let githubResponse = await fetch(apiUrl);
        let jsonResponse = await githubResponse.json();

        console.dir(jsonResponse);

        // handle possible errors
        // '.message' will only be present if user is not found
        if (jsonResponse.message !== undefined) {
            if (jsonResponse.message.toLowerCase() === "not found") {
                console.error(`User not found at ${apiUrl}`);
                //alert(`User not found at ${apiUrl}`);
            }
            else {
                console.error(jsonResponse.message);
                alert(jsonResponse.message);
            }
        }

        // if username is found
        if (jsonResponse.name !== undefined) {
            // we need to update the app's state 'Profiles', not the testData array.
            //testData.push(jsonResponse);
            this.props.OnSubmitRef(jsonResponse);

            // reset input after successfull add
            this.setState({ UserName: "" });

        }
        console.dir(testData);


    };

    render()
    {
        return(
            <form action="" onSubmit={this.HandleSubmit}>
                <input
                    placeholder="GitHub UserName"
                    value={this.state.UserName}
                    onChange={event =>
                        {
                            this.setState( { UserName: event.target.value } );
                            //console.log(event.target.value);
                        }
                    }
                    required></input>
                <button>Add Card</button>
            </form>
        );
    }
}


export default GitHubCardApp;