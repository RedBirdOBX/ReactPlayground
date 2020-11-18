import React from 'react';

const DisplayComponent = (props) =>
{
    let allObjectsHtml = "";
    let availObjectsHtml = "";
    let usedObjectsHtml = "";

    const BuildTempDisplayData = () =>
    {
        props.Objects.forEach((o) => allObjectsHtml += `[${o.Name}] `);
        props.AvailObjects.forEach((ao) => availObjectsHtml += `[${ao.Name}] `);
        props.UsedObjects.forEach((uo) => usedObjectsHtml += `[${uo.Name}] `);
    };

    BuildTempDisplayData();

   return (
       <div className="border m-1 p-1 bg-white">
           <h4>Display Component</h4>
           <div>
               All objects: {allObjectsHtml}<br />
               Avail objects: {availObjectsHtml}<br />
               Used objects: {usedObjectsHtml}<br />
               Selected object: {props.SelectedObject.Name}
           </div>
       </div>
   );
};

export default DisplayComponent;