import React from 'react';
import MatchListComponent from './MatchListComponent';


const ObjectComponent = (props) =>
{
   return (
            <div>
                <h4 className="text-center">{props.Object.Name}</h4>
                <div className="text-center m-2"><small>({props.Counter} of {props.AllObjects.length})</small></div>
                <div className="text-center">
                    <img src={props.Object.ImageUrl} className="ObjectImage rounded-lg" />
                </div>
                <div>
                    <MatchListComponent
                        PossibleMatches={props.PossibleMatches}
                        Object={props.Object}
                        UpdateScoreRef={props.UpdateScoreRef}
                        ObjectsName={props.ObjectsName}
                        MatchesName={props.MatchesName}/>
                </div>
            <div className="text-right">
               <button className="btn btn-success"
                        onClick={() => { props.GetNextObjectRef(props.Object); }}>
                    Get Next { props.ObjectsName.substring(0, props.ObjectsName.length - 1) }
                   <span className="ml-2 fa fa-chevron-right"></span>
                </button>
            </div>
        </div>
   );
};

export default ObjectComponent;