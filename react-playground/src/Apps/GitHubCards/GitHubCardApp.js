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
    render()
    {
        return(
            <div>
                <h2 className="pt-5 text-center">The GitHub Cards App</h2>
                <CardList />
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
                    {testData.map(profile => <Card2 {...profile} />)}
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
export default GitHubCardApp;