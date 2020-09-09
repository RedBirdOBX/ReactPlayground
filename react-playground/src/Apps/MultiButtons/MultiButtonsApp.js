import React from 'react';

// https://app.pluralsight.com/course-player?clipId=c2ed0f02-6868-49e7-b31e-897dc2b67f8c
const BuildButtons = (props) =>
{

    const BuildSingleButton = (btnValue) => {
        return (
            <button>{btnValue}</button>
        );
    };

    return (
       <div>
           { BuildSingleButton(props.NumberOfButtons) }
       </div>
   );
};

export default BuildButtons;