import React from 'react';

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
        super(props); //<-- ??

        this.state =
        {
            Profiles: testData
        };
    }

    render()
    {
        return(
            <div>
                <h2 className="pt-5 text-center">The GitHub Cards App</h2>
                <Form />
                <CardList Profiles={this.state.Profiles} />
            </div>
        );
    }
}

class CardList extends React.Component
{

    // will contain many cards

    render()
    {
        return (<div>
                    <Card Profile={testData[0]} />
                    <Card2 {...testData[1]} />
                    {this.props.Profiles.map(profile => <Card2 {...profile} />)}
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
                    <div className="copmany">{this.props.company}</div>
                </div>
            </div>);
    }
}

class Form extends React.Component
{
    HandleSubmit = (event) =>
    {
        event.preventDefault();
        console.log(this.state.UserName);
    };

    //UserNameInput = React.createRef();
    // this.state =
    // {
    //     UserName: ""
    // };

    // https://app.pluralsight.com/course-player?clipId=43aac0ac-3fe2-43fa-a70e-bb86cc955351
    // 5:00

    constructor()
    {
        super();

        this.state =
        {
            UserName: ""
        };
    }

    render()
    {
        return(
            <form action="" onSubmit={this.HandleSubmit}>
                <input
                    placeholder="GitHub UserName"
                    value={this.state.UserName}
                    onChange={event => {this.setState( {UserName: event.target.value} )} }
                    //ref={this.UserNameInput}
                    required></input>
                <button>Add Card</button>
            </form>
        );
    }
}


export default GitHubCardApp;