import React from 'react';

const TurnAuthor = (props) =>
{
    return (
        <div>
            <img src={props.Author.ImageUrl} className="authorimage" alt={props.Author.Name} />
        </div>
    );
};

export default TurnAuthor;