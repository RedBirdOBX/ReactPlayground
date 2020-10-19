import React from 'react';

const NextAuthor = (props) =>
{

//    const [myStateObj, setMyStateObj] = useState(myDefaultVal);
//    const UpdateState = (newVal) =>
//    {
//        setMyStateOb(newVal);
//    }

   return (
       <div className="text-center">
           <button className="btn btn-primary btn-lg" onClick={() => { props.ClickHander(); }}>
               Next Author
            </button>
       </div>
   );
};

export default NextAuthor;