import React from 'react';

const NewGame = (props) =>
{

//    const [myStateObj, setMyStateObj] = useState(myDefaultVal);
//    const UpdateState = (newVal) =>
//    {
//        setMyStateOb(newVal);
//    }

   return (
       <div className="text-center">
           <button className="btn btn-primary btn-lg" onClick={() => { props.ClickHander(); }}>
               New Game
            </button>
       </div>
   );
};

export default NewGame;