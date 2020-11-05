import React, {useState} from 'react';
import DisplayComponent from './Components/DisplayComponent';
import GetNumberComponent from './Components/GetNumberComponent';

const UsedNumbersComponent = (props) =>
{

    const AddNumberToUsed = (val) =>
    {
        let newUsedNumbers = [val];
        newUsedNumbers = newUsedNumbers.concat(usedNumbers)
        UpdateUsedNumbers(newUsedNumbers);

        // now update avail numbers - remove the number from the avail array
        let newAvailNumbers = [];
        availNumbers.forEach((n) =>
        {
            // if n is not val, add it
            if (n !== val)
            {
                newAvailNumbers.push(n);
            }
        });

        // start here...sorting is done alpha numeric, not numeric.  Fix this.
        newAvailNumbers.sort();

        UpdateAvailNumbers(newAvailNumbers);
    };

    const numbers = [1,2,3,4,5,6,7,8,9,10];
    const [usedNumbers, UpdateUsedNumbers] = useState([]);
    const [availNumbers, UpdateAvailNumbers] = useState(numbers);

    return (
        <div>
            <div className="jumbotron">
                <h3>Used Numbers App</h3>
                <h5>Goal:</h5>
                <ol>
                    <li>Create a list possible numbers - done</li>
                    <li>Create a state obj to store available numbers - done</li>
                    <li>Display in the UI these available numbers - done</li>
                    <li>Create a state obj to store used numbers done</li>
                    <li>Display in the UI these used numbers - done</li>
                    <li>Create a method to grab a random number from available numbers and display in UI</li>
                    <li>Build button and event to take selected random number, add it to used list and remove from available list</li>
                    <li>UI should update</li>
                    <li>Build an event to reset entire app - resetting all lists</li>
                </ol>
            </div>
            <DisplayComponent Numbers={numbers} UsedNumbers={[usedNumbers]} AvailNumbers={availNumbers} />
            <GetNumberComponent AvailNumbers={availNumbers} UseNumberRef={AddNumberToUsed} />
        </div>
   );
};

export default UsedNumbersComponent;