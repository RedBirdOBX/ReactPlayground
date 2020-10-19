import React from 'react';

const Score = (props) =>
{

//    const [myStateObj, setMyStateObj] = useState(myDefaultVal);
//    const UpdateState = (newVal) =>
//    {
//        setMyStateOb(newVal);
//    }

   return (
       <div className="row">
           <div className="col-6 text-center">
               <h5><span className="badge badge-success">0</span> Right</h5>
           </div>
           <div className="col-6 text-center">
               <h5><span className="badge badge-danger">0</span> Wrong</h5>
           </div>
       </div>
   );
};

export default Score;