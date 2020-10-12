import React from 'react';
import Book from 'react';

const QuizTurn = (props) =>
{
    // https://github.com/facebook/react/issues/13445
    // how is this any different than before??

    const HighlightToBgColor = () =>
    {
        let mapping = { "none": "", "correct": "green", "wrong": "red" };

        // this is interesting.  dynamically selecting a property...
        return mapping[props.Highlight];
    };

    console.dir(props);

    //style={{ backgroundColor: HighlightToBgColor() }}
    return (
        <div className="row turn">
            <div className="col-4 offset-1">
                <h5>Author</h5>
                {/* <img src={props.TurnData.Author.ImageUrl} className="authorimage" alt="Author" /> */}
            </div>
            <div className="col-6">
                <h5>Turn Data</h5>
                {
                    props.TurnData.FourRandomBooks.map(b => <Book Title={b} key={b} BookOnClick={props.ProcessAnswerRef} />)
                }
            </div>
        </div>
    );
};


// const Book = (props) =>
// {
//     return (
//         <div className="answer" onClick={() => { props.BookOnClick(props.Title); }}>
//             {props.Title}
//         </div >
//     );
// };

export default QuizTurn;