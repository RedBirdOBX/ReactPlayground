import React, {useState} from 'react';
import DisplayComponent from './DisplayComponent';
import GetNumberComponent from './GetNumberComponent';
import InstructionsComponent from './InstructionsComponent';
import NumbersAreUsedComponent from './NumbersAreUsed';
import ResetAppComponent from './ResetAppComponent';

const UsedNumbersComponent = (props) =>
{
    // data
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // methods
    const AddNumberToUsed = (val) =>
    {
        let newUsedNumbers = [val];
        newUsedNumbers = newUsedNumbers.concat(usedNumbers).sort((a, b) => a - b);
        UpdateUsedNumbers(newUsedNumbers);

        if (newUsedNumbers.length < numbers.length)
        {

            // now update avail numbers - remove the number from the avail array
            let newAvailNumbers = [];

            availNumbers.forEach((availNumber) =>
            {
                // if n is not val, add it
                if (availNumber !== val)
                {
                    newAvailNumbers.push(availNumber);
                }
            });

            newAvailNumbers.sort((a, b) => a - b);
            UpdateAvailNumbers(newAvailNumbers);
        }
        else
        {
            UpdateAvailNumbers([]);
            UpdateGameOver(true);
        }
    };

    // state and hooks
    const [usedNumbers, UpdateUsedNumbers] = useState([]);
    const [availNumbers, UpdateAvailNumbers] = useState(numbers);
    const [isGameOver, UpdateGameOver] = useState(false);

    return (
        <div className="border p-1 m-1 bg-info">
            <h4>Used Numbers Component</h4>
            <InstructionsComponent />
            <DisplayComponent Numbers={numbers} UsedNumbers={[usedNumbers]} AvailNumbers={availNumbers} IsGameOver={isGameOver} />

            {
                !isGameOver ? <GetNumberComponent AvailNumbers={availNumbers} UseNumberRef={AddNumberToUsed} />
                    : <NumbersAreUsedComponent />
            }

            <ResetAppComponent ResetAppRef={props.ResetAppRef} />
        </div>
   );
};

export default UsedNumbersComponent;