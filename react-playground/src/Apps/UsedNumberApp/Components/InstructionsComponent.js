import React from 'react';

const InstructionsComponent = (props) =>
{
   return (
       <div className="border p-1 m-1 bg-white">
           <h4>Instructions Component</h4>
            <div className="jumbotron">
                <h5>Used Numbers App</h5>
                <ol className="d-none">
                    <li>Create a list possible numbers - done</li>
                    <li>Create a state obj to store available numbers - done</li>
                    <li>Display in the UI these available numbers - done</li>
                    <li>Create a state obj to store used numbers done</li>
                    <li>Display in the UI these used numbers - done</li>
                    <li>Create a method to grab a random number from available numbers and display in UI - done</li>
                    <li>Build button and event to take selected random number, add it to used list and remove from available list - done</li>
                    <li>Build an button &amp; event to reset entire app - resetting all lists - done</li>
                    <li>Move jumbotron data to it's own component - done</li>
                    <li>When avail numbers is empty, lock game. - done</li>
                </ol>
                <p>Click the numbers until they are used up.</p>
            </div>
       </div>
   );
};

export default InstructionsComponent;