import React from 'react';
import MatchComponent from './MatchComponent';

const MatchListComponent = (props) =>
{
    console.dir(props);

   return (
       <div className="border p-1 m-1 bg-white">
           <h4>Match List Component</h4>
            {
               props.PossibleMatches.map((match) =>
                   <MatchComponent key={match}
                       Answer={match}
                       Object={props.Object}
                       UpdateScoreRef={props.UpdateScoreRef}
                       //ProcessAnswerRef={props.ProcessAnswerRef}
                    />)
           }

        </div>
   );
};

export default MatchListComponent;