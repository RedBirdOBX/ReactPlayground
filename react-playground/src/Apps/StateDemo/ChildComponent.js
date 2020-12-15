import React, {useState} from 'react';

const ChildComponent = (props) =>
{
    const [randomNumInState, setRandomNumInState] = useState((Math.random() * 100).toFixed(0));
    let randomNum = (Math.random() * 100).toFixed(0);

    console.log("Child Component invoked.");

    return (
        <div className="bg-dark p-3">
            <h5 className="text-white">Child Component</h5>
            <p className="text-white">
                The number in this component's state is <span className="text-info"><strong>{randomNumInState.toString()}</strong></span>.
                This will remain constant no matter how many times the
                component is reinvoked.  It only changes when we use <code>setRandomNumInState()</code>.
            </p>
            <p className="text-white">
                The number in the local variable is <span className="text-warning"><strong>{randomNum.toString()}</strong></span>.
                It will change each time this component is reinvoked.
            </p>
            <p className="text-white">
                The parent's number in state is <span className="text-primary"><strong>{props.ParentNumber}</strong></span>.
            </p>
        </div>
    );
};

export default ChildComponent;