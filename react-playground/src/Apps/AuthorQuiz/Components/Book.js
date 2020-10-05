import React from 'react';

const Book = (props) =>
{
    return (
        <div className="answer" onClick={() => { props.BookClickHander(props.Title); }}>
            {props.Title}
        </div >
    );
};

export default Book;