import React from 'react';

const InstructionsComponent = (props) =>
{
   return (
       <div className="border p-1 m-1 bg-white">
           <h4>Instructions Component</h4>
            <div className="jumbotron d-none">
                <h5>Used Numbers App</h5>
                <ol>
                    <li>Create a list of all objects and show in display. DONE</li>
                    <li>Create a list of avail objects and store in state. Show in Display. DONE</li>
                    <li>Create a list of used objects and store in state. Show in display. DONE</li>
                    <li>Object Component. Pick a random object from avail objects. Add it to used objects which is in state. Show in UI. DONE</li>
                    <li>Build 4 possible choices from selected object. Show in UI. DONE</li>
                    <li>Build out Scoring</li>
                    <li>Disable match when selected</li>
                </ol>
                <p>Instructions:</p>
                <p>
                    Look at the current object and then select the one of four possible matches that matches the object.
                </p>
            </div>
       </div>
   );
};

export default InstructionsComponent;