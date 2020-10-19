import React from 'react';

const Author = (props) =>
{

//    const [myStateObj, setMyStateObj] = useState(myDefaultVal);
//    const UpdateState = (newVal) =>
//    {
//        setMyStateOb(newVal);
//    }

//alt=[props.Author.Name]
//src={props.Author.ImageUrl}
   return (
       <div>
           <h5 className="text-center">[props.Author.Name]</h5>
           <img className="authorimage" alt="" src="" />
           <img src="http://placehold.it/400x300" />
       </div>
   );
};

export default Author;