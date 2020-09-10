import React from 'react';

const Name = (props) =>
{

   const [myStateObj, setMyStateObj] = useState(myDefaultVal);
   return (
       <div>The value is {props.MyValue}.</div>
   );
};

export default Name;