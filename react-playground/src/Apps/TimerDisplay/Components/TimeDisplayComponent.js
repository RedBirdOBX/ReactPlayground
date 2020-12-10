import React, { useState, useEffect } from 'react';

// This normally would be very easy in vanilla js but is a little more complicated here in React.
// We're using useEffect() which fires once a component is done rendering.
// https://infinum.com/the-capsized-eight/how-to-use-react-hooks-in-class-components
// https://upmostly.com/tutorials/setinterval-in-react-components-using-hooks

const TimeDisplayComponent = () =>
{
    const [currentTime, SetCurrentTime] = useState(new Date().toString());
    const delay = 1000;

    useEffect(() => { setInterval(() => { SetCurrentTime(new Date().toString()); }, delay); });

    return (<h3 className="mt-5 text-info text-center">{currentTime}</h3>);
};

export default TimeDisplayComponent;