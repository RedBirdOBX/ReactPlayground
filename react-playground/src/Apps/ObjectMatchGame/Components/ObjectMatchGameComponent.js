import React, {useState} from 'react';
import ResetAppComponent from './ResetAppComponent';
import InstructionsComponent from './InstructionsComponent';
import DisplayComponent from './DisplayComponent';
import ObjectComponent from './ObjectComponent';
import GameOverComponent from './GameOverComponent';

const ObjectMatchGameComponent = (props) =>
{
    // App Data
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

    const UseCurrentObject = (obj) =>
    {
        console.log("object to use up: ");
        console.dir(obj);

        // add to used
        let newUsedObjects = [obj];
        newUsedObjects = newUsedObjects.concat(usedObjects);
        newUsedObjects = newUsedObjects.sort(o => o.Name);
        UpdateUsedObjects(newUsedObjects);

        // remove from avail
        if (newUsedObjects.length < objects.length)
        {
            // now update avail numbers - remove the number from the avail array
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
        }
        else
        {
            UpdateAvailObjects([]);
            UpdateGameOver(true);
        }
    };

    const [usedObjects, UpdateUsedObjects] = useState([]);
    const [availObjects, UpdateAvailObjects] = useState(objects);
    const [isGameOver, UpdateGameOver] = useState(false);

   return (
       <div className="border p-1 m-1 bg-info">
           <h4>Object Match Game Component</h4>
           <InstructionsComponent />

           <DisplayComponent
                Objects={objects}
                UsedObjects={usedObjects}
                AvailObjects={availObjects}
                IsGameOver={isGameOver} />


           {
               !isGameOver
                   ? <ObjectComponent AvailObjects={availObjects}  UseCurrentObjectRef={UseCurrentObject} />
                   : <GameOverComponent />
           }


           <ResetAppComponent ResetAppRef={props.ResetAppRef} />
       </div>
   );
};

export default ObjectMatchGameComponent;