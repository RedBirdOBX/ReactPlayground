import React from 'react';
import MatchListComponent from './MatchListComponent';
import PropTypes from 'prop-types';


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

ObjectComponent.propTypes =
{
    AllObjects: PropTypes.array.isRequired,
    AvailObjects: PropTypes.array.isRequired,
    Object: PropTypes.object.isRequired,
    PossibleMatches: PropTypes.array.isRequired,
    UpdateScoreRef: PropTypes.func.isRequired,
    GetNextObjectRef: PropTypes.func.isRequired,
    ObjectsName: PropTypes.string.isRequired,
    MatchesName: PropTypes.string.isRequired,
    Counter: PropTypes.number.isRequired
}

export default ObjectComponent;