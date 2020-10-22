import React, {useState} from 'react';
import ChildComponent from './ChildComponent';

// document this!!
const StateExperimentComponent = (props) =>
{
    let randomNumber = (Math.random() * 100).toFixed(0);
    const [randomNum, setRandomNum] = useState(randomNumber);
    const NewRandomNum = () =>
    {
        setRandomNum((Math.random() * 100).toFixed(0));
    }

   return (
       <div>
            <h3>Parent Component</h3>
            <p>
                Random number stored in AppLevel State: <span className="text-info"><strong>{randomNum}</strong></span>.
                When this number in state changes, this <strong>and any child</strong> components
                are reinvoked.
            </p>
            <div>
                <ChildComponent />
            </div>
            <div className="text-center m-5">
                <button className="btn btn-info" onClick={() => NewRandomNum()}>Update Parent State</button>
            </div>
        </div>
   );
};

export default StateExperimentComponent;