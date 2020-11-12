import React from 'react';
import { shuffle, sample, all } from 'underscore';

const ObjectComponent = (props) =>
{

//    const [myStateObj, setMyStateObj] = useState(myDefaultVal);
//    const UpdateState = (newVal) =>
//    {
//        setMyStateOb(newVal);
//    }


    // pick a random object
    let obj = sample(props.AvailObjects);
    console.dir(obj);

    // show in ui
    // update usedObjects

   return (
       <div className="border m-1 p-1 bg-white">
           <h4>Object Component</h4>
           <div>
               Selected: {obj.Name}
           </div>
           <div>
               <button onClick={() => { props.UseCurrentObjectRef(obj); } }>Get Next Object</button>
           </div>
       </div>
   );
};

export default ObjectComponent;