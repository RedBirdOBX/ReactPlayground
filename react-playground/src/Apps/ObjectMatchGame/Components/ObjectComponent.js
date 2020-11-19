import React from 'react';
import { shuffle, sample, all } from 'underscore';
import MatchListComponent from './MatchListComponent';

const ObjectComponent = (props) =>
{
   return (
       <div className="border m-1 p-1 bg-white">
           <h4>Object Component</h4>
           <div>
               <h5>Selected: {props.Object.Name}</h5>
           </div>
           <div>
               <MatchListComponent
                    PossibleMatches={props.PossibleMatches}
                    Object={props.Object}
                    UpdateScoreRef={props.UpdateScoreRef}
                    //ProcessAnswerRef={props.ProcessAnswerRef}
                    />
           </div>
           <div>
               <button onClick={() => { props.GetNextObjectRef(props.Object); } }>Get Next Object</button>
           </div>
       </div>
   );
};

export default ObjectComponent;