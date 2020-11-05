import React, {useState} from 'react';
import FooterComponent from './Components/FooterComponent';
import NewGameComponent from './Components/NewGameComponent';
import NextComponent from './Components/NextComponent';
import ScoreComponent from './Components/ScoreComponent';
import TurnComponent from './Components/TurnComponent';
import { shuffle, sample, all } from 'underscore';

const MatchGameComponent = (props) =>
{

    // Goal: allow user to click thru and cycle thru all objects
    //          - get turn object - set in state - done
    //          - look at match - done
    //          - grab 3 other matches which do not match the current match - done
    //          - set 4 possible matches.  3 incorrect, one correct - done
    //
    //          next....
    //          - build an array of used objects - add to it w/ each turn
    //          - next turn will select another one not in used list
    //          - when used list == all objects list, game over

    // how much state is needed here vs local?
    // need to be able to loop thru all possible objects
    // display total turns
    // should we determine object first?


    console.log("**Component Loaded**");

    // App Data
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


    const [gameId, SetGameId] = useState(1);
    const NewGame = () =>
    {
        SetGameId(gameId + 1);
        SetNewObject(GetTurnObject());
    };


    const [usedObjects, AddToUsedObjects] = useState([]);
    const GetTurnObject = () =>
    {
        let obj = sample(objects);

        // add to used objects
        // take current list of used objs and add/map to new array
        // take that array and replace the current state obj of used objs
        let newUsedObjects = [];
        newUsedObjects = usedObjects.map((x) => newUsedObjects.push(x));
        

        return obj;
    };
    const [currentObject, SetNewObject] = useState(GetTurnObject());





    const BuildPossibleMatches = () =>
    {
        // add correct match
        possibleMatches.push(currentObject.Match)

        // find 3 other matches which will be wrong
        let wrongMatches = [];
        objects.forEach(o =>
        {
            if (o.Match !== currentObject.Match) {
                wrongMatches.push(o.Match);
            }
        });

        // concat the 2 arrays and shuffle. We now have all 4 answers
        wrongMatches = shuffle(wrongMatches).slice(0, 3);
        wrongMatches.forEach((w) => possibleMatches.push(w));
        possibleMatches = shuffle(possibleMatches);
    };

    const NextTurn = () =>
    {
        SetNewObject(GetTurnObject());
    };


    BuildPossibleMatches();



    // temp
    let possibleMatches = [];
    let usedObjectsHtml = "";

    const BuildTempDisplayData = () =>
    {
        usedObjects.forEach((uo) => usedObjectsHtml += `[${uo.Name}] `);
    };

    BuildTempDisplayData();
    // end of temp

    return (
       <div className="border p-2">
           <h4>Match Game Component</h4>
            <div>Used Objects: {usedObjectsHtml}</div>
           <ScoreComponent key={gameId} />
            <TurnComponent Object={currentObject} PossibleMatches={possibleMatches} />
            <NextComponent NextTurnRef={NextTurn} />
           <NewGameComponent NewGameRef={NewGame}  />
           <FooterComponent GameId={gameId} />
        </div>
   );
};

export default MatchGameComponent;