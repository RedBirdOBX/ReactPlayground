import React, {useState} from 'react';
import ObjectMatchGameComponent from './Components/ObjectMatchGameComponent';

const ObjectMatchGameContainer = (props) =>
{
    const [appId, ResetAppId] = useState(1);
    const ResetApp = () =>
    {
        console.clear();
        ResetAppId(appId + 1);
    };

   return (
       <div>
           <div className="d-none text-center text-danger">appId: {appId}</div>
           <ObjectMatchGameComponent key={appId} ResetAppRef={ResetApp} />
       </div>
   );
};

export default ObjectMatchGameContainer;