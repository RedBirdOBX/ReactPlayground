import React, {useState} from 'react';
import InstructionsComponent from './InstructionsComponent';
import DisplayComponent from './DisplayComponent';
import ObjectComponent from './ObjectComponent';
import GameOverComponent from './GameOverComponent';
import ScoreComponent from './ScoreComponent';
import { shuffle, sample } from 'underscore';
import objectData from '../Data/AuthorObjectData';
import PropTypes from 'prop-types';

const ObjectMatchGameComponent = (props) =>
{
    const GetNextObject = (obj) =>
    {
        // add to used
        let newUsedObjects = [obj];
        newUsedObjects = newUsedObjects.concat(usedObjects);
        newUsedObjects = newUsedObjects.sort(o => o.Name);
        UpdateUsedObjects(newUsedObjects);

        // remove from avail
        if (newUsedObjects.length < objectData.objects.length)
        {
            // recreate the avail objects
            let newAvailObjects = [];

            availObjects.forEach((availObject) =>
            {
                if (availObject.Id !== obj.Id)
                {
                    newAvailObjects.push(availObject);
                }
            });

            newAvailObjects = newAvailObjects.sort(o => o.Name);
            UpdateAvailObjects(newAvailObjects);

            // finally, select a new object
            let newObject = sample(newAvailObjects);
            UpdateSelectedObject(newObject);
            UpdatePossibleMatches(BuildPossibleMatches(newObject));

            // set counter
            UpdateObjectCounter(objectCounter+1);
        }
        else
        {
            UpdateAvailObjects([]);
            UpdateGameOver(true);
        }
    };

    const BuildPossibleMatches = (object) =>
    {
        let possibleMatches = [];
        let wrongMatches = [];

        // add correct match
        possibleMatches.push(object.Match)

        // find 3 other matches which will be wrong
        objectData.objects.forEach(o =>
        {
            if (o.Match !== object.Match)
            {
                wrongMatches.push(o.Match);
            }
        });

        // concat the 2 arrays and shuffle. We now have all 4 answers
        wrongMatches = shuffle(wrongMatches).slice(0, 3);
        wrongMatches.forEach((w) => possibleMatches.push(w));
        possibleMatches = shuffle(possibleMatches);

        return possibleMatches;
    };

    const UpdateScore = (answer) =>
    {
        if (answer === "correct")
        {
            UpdateCorrect(correct + 1);
        }
        else
        {
            UpdateIncorrect(incorrect + 1);
        }
    };

    const [usedObjects, UpdateUsedObjects] = useState([]);
    const [availObjects, UpdateAvailObjects] = useState(objectData.objects);
    const [selectedObject, UpdateSelectedObject] = useState(sample(availObjects));
    const [possibleMatches, UpdatePossibleMatches] = useState(BuildPossibleMatches(selectedObject));
    const [correct, UpdateCorrect] = useState(0);
    const [incorrect, UpdateIncorrect] = useState(0);
    const [isGameOver, UpdateGameOver] = useState(false);
    const [objectCounter, UpdateObjectCounter] = useState(1);

   return (
        <div>
           <InstructionsComponent ObjectsName={objectData.objectsName} MatchesName={objectData.matchesName} ObjectCount={objectData.objects.length} />

           <DisplayComponent
                Objects={objectData.objects}
                UsedObjects={usedObjects}
                AvailObjects={availObjects}
                SelectedObject={selectedObject}
                IsGameOver={isGameOver} />

            <div className="row">
                    <div className="col-6">
                    {
                        !isGameOver
                            ? <ObjectComponent
                                key={selectedObject.Name}
                                AllObjects={objectData.objects}
                                AvailObjects={availObjects}
                                Object={selectedObject}
                                PossibleMatches={possibleMatches}
                                UpdateScoreRef={UpdateScore}
                                GetNextObjectRef={GetNextObject}
                                ObjectsName={objectData.objectsName}
                                MatchesName={objectData.matchesName}
                                Counter={objectCounter} />
                           : <GameOverComponent Correct={correct} Incorrect={incorrect} ResetAppRef={props.ResetAppRef} />
                    }
                    </div>
                    <div className="col-6">
                        <ScoreComponent Correct={correct} Incorrect={incorrect} />
                    </div>
                </div>
       </div>
   );
};

ObjectMatchGameComponent.propTypes =
{
    ResetAppRef: PropTypes.func.isRequired
}

export default ObjectMatchGameComponent;