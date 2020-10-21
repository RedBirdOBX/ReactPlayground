import React from 'react';

const Author = (props) =>
{
   return (
       <div>
           <h5 className="text-center">{props.SelectedAuthor.Name}</h5>
           <img className="authorimage" alt="" src={props.SelectedAuthor.ImageUrl} />
       </div>
   );
};

export default Author;