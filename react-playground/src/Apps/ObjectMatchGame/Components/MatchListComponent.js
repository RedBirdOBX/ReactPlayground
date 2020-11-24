import React from 'react';
import MatchComponent from './MatchComponent';

const MatchListComponent = (props) =>
{
    console.dir(props);

   return (
       <div className="my-1">
           <p className="text-center">
               What {props.MatchesName.toLowerCase()} matches this&nbsp;
               {props.ObjectsName.toLowerCase().substring(0, props.ObjectsName.length - 1)}?
            </p>
            {
               props.PossibleMatches.map((match) =>
                   <MatchComponent key={match}
                       Answer={match}
                       Object={props.Object}
                       UpdateScoreRef={props.UpdateScoreRef}
                    />)
           }

        </div>
   );
};

export default MatchListComponent;