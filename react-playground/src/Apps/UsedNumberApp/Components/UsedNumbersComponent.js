import React, {useState} from 'react';
import DisplayComponent from './DisplayComponent';
import GetNumberComponent from './GetNumberComponent';
import InstructionsComponent from './InstructionsComponent';
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

        newAvailNumbers.sort((a, b) => a - b);
        UpdateAvailNumbers(newAvailNumbers);
    };

    // state and hooks
    const [usedNumbers, UpdateUsedNumbers] = useState([]);
    const [availNumbers, UpdateAvailNumbers] = useState(numbers);

    return (
        <div className="border p-1 m-1 bg-info">
            <h3>Used Numbers Component</h3>
            <InstructionsComponent />
            <DisplayComponent Numbers={numbers} UsedNumbers={[usedNumbers]} AvailNumbers={availNumbers} />
            <GetNumberComponent AvailNumbers={availNumbers} UseNumberRef={AddNumberToUsed} />
            <ResetAppComponent ResetAppRef={props.ResetAppRef} />
        </div>
   );
};

export default UsedNumbersComponent;