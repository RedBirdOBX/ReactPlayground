import React from 'react';

class GitHubCardApp extends React.Component
{
    render()
    {
        return(
            <div>
                <h2 className="pt-5 text-center">The GitHub Cards App</h2>
                <Card />
            </div>
        );
    }
}

class Card extends React.Component
{
    render()
    {
        return (
        <div className="github-profile">
            <img src="https://placehold.it/75" />
            <div className="info">
                <div className="name">name here</div>
                <div className="copmany">company here</div>
            </div>
        </div>);
    }
}

export default GitHubCardApp;