import React from 'react';
import { shuffle, sample } from 'underscore';

const TurnComponent = (props) =>
{

//    const [myStateObj, setMyStateObj] = useState(myDefaultVal);
//    const UpdateState = (newVal) =>
//    {
//        setMyStateOb(newVal);
//    }
    let allMatches = [];
    let allMatchesHtml = "";
    let possibleMatches = [];
    let possibleMatchesHtml = "";
    let match = "";
    let matchHtml = "";
    let obj = null;
    let objHtml = "Object: ";

    // Goal: allow user to click thru and cycle thru all objects
    //          - determine object - set in state
    //          - look at match
    //          - grab 3 other matches which do not match the current match
    //          - set 4 possible matches.  3 incorrect, one correct
    //          - build an array of used objects - add to it w/ each turn
    //          - next turn will select another one not in used list
    //          - when used list == all objects list, game over

    // how much state is needed here vs local?
    // need to be able to loop thru all possible objects
    // display total turns
    // should we determine object first?

    // new
    const DetermineTurnObject = () =>
    {
        obj = sample(props.AllObjects);
        for (var prop in obj)
        {
            objHtml += `[${obj[prop]}] `;
        }
    };

    DetermineTurnObject();

    // end of new

    // old
    // const BuildAllObjectMatches = () =>
    // {
    //     props.AllObjects.forEach((obj) => { allMatches.push(obj.Match); });
    //     allMatches = allMatches.sort();
    //     allMatches.forEach((m) => { allMatchesHtml = allMatchesHtml + m + "<br />" });
    //     allMatchesHtml = "All Matches: " + allMatches.join(", ");
    // };

    // const BuildPossibleMatches = () =>
    // {
    //     possibleMatches = shuffle(allMatches).slice(0, 4);
    //     possibleMatchesHtml = "Possible Matches: " + possibleMatches.join(", ");
    // };

    // const DetermineMatch = () =>
    // {
    //     match = sample(possibleMatches);
    //     matchHtml = "Match: " + match;
    // };

    // const DetermineObject = () =>
    // {
    //     let o = props.AllObjects.find((o) => o.Match == match);
    //     obj = o;

    //     for (var prop in obj)
    //     {
    //         objHtml += `[${obj[prop]}] `;
    //     }
    // };

    // BuildAllObjectMatches();
    // BuildPossibleMatches();
    // DetermineMatch();
    // DetermineObject();
    // end of old

    return (
        <div className="border p-3">
            <p>Turn component</p>
            <div className="p-1">{allMatchesHtml}</div>
            <div className="p-1">{possibleMatchesHtml}</div>
            <div className="p-1">{matchHtml}</div>
            <div className="p-1">{objHtml}</div>
        </div>
   );
};

export default TurnComponent;