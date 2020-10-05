import React from 'react';
import Book from 'react';

const Turn = (props) =>
{
    const HighlightToBgColor = () =>
    {
        let mapping = { "none": "", "correct": "green", "wrong": "red" };

        // this is interesting.  dynamically selecting a property...
        console.dir(props);
        return mapping[props.Highlight];
    };

    return (
        <div className="row turn" style={{ backgroundColor: HighlightToBgColor() }}>
            <div className="col-4 offset-1">
                <img src={props.TurnData.Author.ImageUrl} className="authorimage" alt="Author" />
            </div>
            <div className="col-6">
                {
                    props.TurnData.FourRandomBooks.map((book) =>
                        <Book Title={book} key={book} BookClickHander={props.AnswerSelectedHandler} />)
                }
            </div>
        </div>
    );
};

export default Turn;