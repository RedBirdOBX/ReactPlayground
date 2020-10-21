import React from 'react';

const AuthorComponent = (props) =>
{
   return (
       <div>
           <h5 className="text-center">{props.Author.Name}</h5>
           <img className="authorimage" alt="" src={props.Author.ImageUrl} />
       </div>
   );
};

export default AuthorComponent;