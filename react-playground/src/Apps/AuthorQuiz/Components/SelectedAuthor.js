import React from 'react';

const SelectedAuthor = (props) =>
{
    return (
        <div>
            <h5 className="text-center">{props.Author.Name}</h5>
            <img src={props.Author.ImageUrl} className="authorimage" alt={props.Author.Name} />
        </div>
    );
};

export default SelectedAuthor;