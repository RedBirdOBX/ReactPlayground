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

    return (
        <div className="row turn" style={{ backgroundColor: HighlightToBgColor() }}>
            <div className="col-4 offset-1">
                <h5>Author</h5>
                <img src={props.TurnData.Author.ImageUrl} className="authorimage" alt="Author" />
            </div>
            <div className="col-6">
                <h5>Turn Data</h5>
                {
                    props.TurnData.FourRandomBooks.map((book) => <Book Title={book} key={book} BookOnClick={props.AnswerProcessor} /> )


                    // props.TurnData.FourRandomBooks.map((book) =>
                    // {
                    //      //console.dir(book);
                    //      //console.log(typeof book)

                    //      // I think this should be a function ref
                    //     console.log(props.ProcessAnswerRef);
                    //     console.log(typeof props.ProcessAnswerRef);
                    //     console.dir(book);
                    //     return null;
                    // })
                }
                {
                    props.TurnData.FourRandomBooks.map((book) => <Book Title={book} key={book} BookOnClick={props.ProcessAnswerRef} />)
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