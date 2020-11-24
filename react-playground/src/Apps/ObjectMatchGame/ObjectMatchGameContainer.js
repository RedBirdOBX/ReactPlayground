import React, {useState} from 'react';
import ObjectMatchGameComponent from './Components/ObjectMatchGameComponent';

// ===============================================================================
// TODO:
//      add prop validation
//      // adding new property of type 'propTypes'.
// Answer.propTypes =
// {
//     Answer: PropTypes.string.isRequired,
//     Author: PropTypes.object.isRequired
// }
// ===============================================================================

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