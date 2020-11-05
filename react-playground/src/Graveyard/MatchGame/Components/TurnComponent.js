import React, {useState} from 'react';
import { shuffle, sample, all } from 'underscore';

const TurnComponent = (props) =>
{
    let allMatchesHtml = "";
    let possibleMatchesHtml = "Possible Matches: ";
    let matchHtml = "Correct Match: ";
    let objHtml = "Object: ";

    const BuildTempDisplayData = () =>
    {
        for (var prop in props.Object)
        {
            objHtml += `[${props.Object[prop]}] `;
        }
        props.PossibleMatches.forEach((m) => { possibleMatchesHtml+= `[${m}] `} );
        matchHtml += props.Object.Match;
    };

    // temp
    BuildTempDisplayData();

    return (
        <div className="border p-2">
            <h4>Turn component</h4>
            <div className="p-2">{allMatchesHtml}</div>
            <div className="p-2">{possibleMatchesHtml}</div>
            <div className="p-2">{matchHtml}</div>
            <div className="p-2">{objHtml}</div>
        </div>
   );
};

export default TurnComponent;