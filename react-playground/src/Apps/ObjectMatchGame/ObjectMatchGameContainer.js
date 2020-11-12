import React, {useState} from 'react';
import ObjectMatchGameComponent from './Components/ObjectMatchGameComponent';


const ObjectMatchGameContainer = (props) =>
{
    const [appId, ResetAppId] = useState(1);
    const ResetApp = () =>
    {
        ResetAppId(appId + 1);
    };

   return (
       <div className="border p-1 m-1">
           <h4>Object Match Game Container</h4>
           <div className="text-center text-danger">appId: {appId}</div>
           <ObjectMatchGameComponent key={appId} ResetAppRef={ResetApp} />
       </div>
   );
};

export default ObjectMatchGameContainer;