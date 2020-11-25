import React, {useState} from 'react';
import InstructionsComponent from './InstructionsComponent';
import DisplayComponent from './DisplayComponent';
import ObjectComponent from './ObjectComponent';
import GameOverComponent from './GameOverComponent';
import ScoreComponent from './ScoreComponent';
import { shuffle, sample, all } from 'underscore';


const ObjectMatchGameComponent = (props) =>
{
    // TODO:
    // App Data                                     //
    // Possibly load this from a json file...       //
    // make this a single object and spread it?
    const objectsName = "Authors";
    const matchesName = "Books";
    const objects =
    [
        {
            "Id": 1,
            "Name": "Mark Twain",
            "ImageUrl": "Images/Authors/mark-twain.jpg",
            "Match": "The Adventures of Huckleberry Finn"
        },
        {
            "Id": 2,
            "Name": "Joseph Conrad",
            "ImageUrl": "Images/Authors/joseph-conrad.jpg",
            "Match": "Heart of Darkness"
        },
        {
            "Id": 3,
            "Name": "J.K Rowling",
            "ImageUrl": "Images/Authors/jk-rowling.jpg",
            "Match": "Harry Potter and the Sorcerers Stone"
        },
        {
            "Id": 4,
            "Name": "Stephen King",
            "ImageUrl": "Images/Authors/stephen-king.jpg",
            "Match": "The Shining"
        },
        {
            "Id": 5,
            "Name": "William Shakespeare",
            "ImageUrl": "Images/Authors/william-shakespeare.jpg",
            "Match": "Hamlet"
        },
        {
            "Id": 6,
            "Name": "Arthur C Clarke",
            "ImageUrl": "Images/Authors/arthur-c-clarke.jpg",
            "Match": "Rendevous with Rama"
        },
        {
            "Id": 7,
            "Name": "Neal Stevenson",
            "ImageUrl": "Images/Authors/neal-stevenson.jpg",
            "Match": "SevenEves"
        },
        {
            "Id": 8,
            "Name": "Isaac Asimov",
            "ImageUrl": "Images/Authors/isaac-asimov.jpg",
            "Match": "I, Robot"
        }
    ];

    const GetNextObject = (obj) =>
    {
        // add to used
        let newUsedObjects = [obj];
        newUsedObjects = newUsedObjects.concat(usedObjects);
        newUsedObjects = newUsedObjects.sort(o => o.Name);
        UpdateUsedObjects(newUsedObjects);

        // remove from avail
        if (newUsedObjects.length < objects.length)
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
        objects.forEach(o =>
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
    const [availObjects, UpdateAvailObjects] = useState(objects);
    const [selectedObject, UpdateSelectedObject] = useState(sample(availObjects));
    const [possibleMatches, UpdatePossibleMatches] = useState(BuildPossibleMatches(selectedObject));
    const [correct, UpdateCorrect] = useState(0);
    const [incorrect, UpdateIncorrect] = useState(0);
    const [isGameOver, UpdateGameOver] = useState(false);
    const [objectCounter, UpdateObjectCounter] = useState(1);

   return (
       <div>
           <InstructionsComponent ObjectsName={objectsName} MatchesName={matchesName} ObjectCount={objects.length} />

           <DisplayComponent
                Objects={objects}
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
                                AllObjects={objects}
                                AvailObjects={availObjects}
                                Object={selectedObject}
                                PossibleMatches={possibleMatches}
                                UpdateScoreRef={UpdateScore}
                                GetNextObjectRef={GetNextObject}
                                ObjectsName={objectsName}
                                MatchesName={matchesName}
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

export default ObjectMatchGameComponent;