import React, {useState} from 'react';
import FooterComponent from './Components/FooterComponent';
import NewGameComponent from './Components/NewGameComponent';
import ScoreComponent from './Components/ScoreComponent';
import TurnComponent from './Components/TurnComponent';

const MatchGameComponent = (props) =>
{
    const [gameId, SetGameId] = useState(1);
    const UpdateGameId = () =>
    {
        SetGameId(gameId + 1);
    };

    const NewGame = () =>
    {
        UpdateGameId();
    };

    let objects =
    [
        {
            "Id": 1,
            "Name": "Mark Twain",
            "ImageUrl": "Images/Authors/mark-twain.jpg",
            "Match": "The Adventures of Huckleberry Finn"
        },
        {
            "Id": 2,
            "Name": "Joseph Conrad",
            "ImageUrl": "Images/Authors/joseph-conrad.jpg",
            "Match": "Heart of Darkness"
        },
        {
            "Id": 3,
            "Name": "J.K Rowling",
            "ImageUrl": "Images/Authors/jk-rowling.jpg",
            "Match": "Harry Potter and the Sorcerers Stone"
        },
        {
            "Id": 4,
            "Name": "Stephen King",
            "ImageUrl": "Images/Authors/stephen-king.jpg",
            "Match": "The Shining"
        },
        {
            "Id": 5,
            "Name": "William Shakespeare",
            "ImageUrl": "Images/Authors/william-shakespeare.jpg",
            "Match": "Hamlet"
        },
        {
            "Id": 6,
            "Name": "Arthur C Clarke",
            "ImageUrl": "Images/Authors/arthur-c-clarke.jpg",
            "Match": "Rendevous with Rama"
        },
        {
            "Id": 7,
            "Name": "Neal Stevenson",
            "ImageUrl": "Images/Authors/neal-stevenson.jpg",
            "Match": "SevenEves"
        },
        {
            "Id": 8,
            "Name": "Isaac Asimov",
            "ImageUrl": "Images/Authors/isaac-asimov.jpg",
            "Match": "I, Robot"
        }
    ];

    return (
       <div>
           <ScoreComponent key={gameId} />
           <TurnComponent AllObjects={objects} />
           <NewGameComponent NewGameRef={NewGame}  />
           <FooterComponent GameId={gameId} />
        </div>
   );
};

export default MatchGameComponent;