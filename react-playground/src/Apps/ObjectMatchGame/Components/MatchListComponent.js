import React from 'react';
import MatchComponent from './MatchComponent';
import PropTypes from 'prop-types';

const MatchListComponent = (props) =>
{
    return (
        <div>
            <p className="text-center">
               What {props.MatchesName.toLowerCase().substring(0, props.MatchesName.length - 1)} matches this&nbsp;
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

MatchListComponent.propTypes =
{
    Object: PropTypes.object.isRequired,
    Object: PropTypes.shape
    (
        {
            "Id": PropTypes.number.isRequired,
            "Name": PropTypes.string.isRequired,
            "ImageUrl": PropTypes.string.isRequired,
            "Match": PropTypes.string.isRequired
        }
    ),
    PossibleMatches: PropTypes.array.isRequired,
    UpdateScoreRef: PropTypes.func.isRequired,
    ObjectsName: PropTypes.string.isRequired,
    MatchesName: PropTypes.string.isRequired,
}

export default MatchListComponent;