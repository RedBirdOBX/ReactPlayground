import React, { useState } from 'react';
import UsedNumbersComponent from './Components/UsedNumbersComponent';


const UsedNumbersAppContainer = (props) =>
{
    const [appId, ResetAppId] = useState(1);
    const ResetApp = () =>
    {
        ResetAppId(appId + 1);
    };

   return (
       <div className="border p-1 m-1">
            <h3>Used Numbers App Container</h3>
            <div>appId: {appId}</div>
            <UsedNumbersComponent key={appId} ResetAppRef={ResetApp} />
       </div>
   );
};

export default UsedNumbersAppContainer;