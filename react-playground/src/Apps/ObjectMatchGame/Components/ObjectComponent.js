import React from 'react';
import { shuffle, sample, all } from 'underscore';
import MatchListComponent from './MatchListComponent';

const ObjectComponent = (props) =>
{
    // pick a random object
    let obj = sample(props.AvailObjects);
    let possibleMatches = [];

    // build possible answers
    const BuildPossibleMatches = () =>
    {
        // add correct match
        possibleMatches.push(obj.Match)

        // find 3 other matches which will be wrong
        let wrongMatches = [];
        props.AllObjects.forEach(o =>
        {
            if (o.Match !== obj.Match)
            {
                wrongMatches.push(o.Match);
            }
        });

        // concat the 2 arrays and shuffle. We now have all 4 answers
        wrongMatches = shuffle(wrongMatches).slice(0, 3);
        wrongMatches.forEach((w) => possibleMatches.push(w));
        possibleMatches = shuffle(possibleMatches);

        console.log("object");
        console.dir(obj);

        console.log("matches");
        console.dir(possibleMatches);
    };

    BuildPossibleMatches();

   return (
       <div className="border m-1 p-1 bg-white">
           <h4>Object Component</h4>
           <div>
               Selected: {obj.Name}
           </div>
           <div>
               <MatchListComponent PossibleMatches={possibleMatches} Object={obj} />
           </div>
           <div>
               <button onClick={() => { props.UseCurrentObjectRef(obj); } }>Get Next Object</button>
           </div>
       </div>
   );
};

export default ObjectComponent;