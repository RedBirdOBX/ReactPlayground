import React from 'react';
import PropTypes from 'prop-types';

const DisplayComponent = (props) =>
{

    // Mainly for testing and debugging.        //

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
       <div className="d-none">
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

DisplayComponent.propTypes =
{
    Objects: PropTypes.array.isRequired,
    AvailObjects: PropTypes.array.isRequired,
    UsedObjects: PropTypes.array.isRequired
}

export default DisplayComponent;