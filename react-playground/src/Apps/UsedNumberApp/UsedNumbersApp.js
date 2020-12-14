import React, { useState } from 'react';
import UsedNumbersComponent from './Components/UsedNumbersComponent';


const UsedNumbersApp = (props) =>
{
    const [appId, ResetAppId] = useState(1);

    const ResetApp = () =>
    {
        ResetAppId(appId + 1);
    };

   return (
       <div className="border p-1 m-1">
            <h4>Used Numbers App Container</h4>
            <div className="text-center text-danger">appId: {appId}</div>
            <UsedNumbersComponent key={appId} ResetAppRef={ResetApp} />
       </div>
   );
};

export default UsedNumbersApp;