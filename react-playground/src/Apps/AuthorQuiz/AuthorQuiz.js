import React, {useState} from 'react';
import {shuffle, sample} from 'underscore';

// TODO:
//      redo architecture
//      use props validation (https://app.pluralsight.com/course-player?clipId=c9d9aa52-a7dc-43d2-9679-9c3054d48efd   9:00)

function TurnData(allBooks, author)
{
    this.AllBooks = allBooks;
    this.Author = author;
}

function Author()
{
    this.Name = name;
    this.ImageUrl = imgUrl;
    this.ImageSource = imgSource;
    this.Books = books;
}

const AuthorQuiz = (highlight) =>
{

    // App Data
    let books = [];
    const authors =
    [
        {
            name: 'Mark Twain',
            imageUrl: 'Images/Authors/mark-twain.jpg',
            imageSource: 'Wikimedia Commons',
            books: ['The Adventures of Huckleberry Finn', 'Life on the Mississippi']
        },
        {
            name: 'Joseph Conrad',
            imageUrl: 'Images/Authors/joseph-conrad.jpg',
            imageSource: 'Wikimedia Commons',
            books: ['Heart of Darkness']
        },
        {
            name: 'J.K Rowling',
            imageUrl: 'Images/Authors/jk-rowling.jpg',
            imageSource: 'Wikimedia Commons',
            books: ['Harry Potter and the Sorcerers Stone', 'Harry Potter and some other story']
        },
        {
            name: 'Stephen King',
            imageUrl: 'Images/Authors/stephen-king.jpg',
            imageSource: 'Wikimedia Commons',
            books: ['The Shining', 'It', 'Carrie']
        },
        {
            name: 'William Shakespeare',
            imageUrl: 'Images/Authors/william-shakespeare.jpg',
            imageSource: 'Wikimedia Commons',
            books: ['Hamlet', 'Macbeth']
        },
        {
            name: 'Arthur C Clarke',
            imageUrl: 'Images/Authors/arthur-c-clarke.jpg',
            imageSource: 'Wikimedia Commons',
            books: ['2001', 'Rendevous with Rama']
        },
    ];

    // get list of **all** books
    authors.forEach((author) => { author.books.forEach((book) => { books.push(book); }); });
    books = books.sort();

    // START HERE

    const GetTurnData = () =>
    {
        let fourRandomBooks = shuffle(books).slice(0, 4);
        console.dir(fourRandomBooks);

        // write an example using sample
        // establish the ANSWER - pick one of the 4 random books
        const answer = sample(fourRandomBooks);
        console.dir(answer);

        return {
            books: fourRandomBooks,

            // the author will come from the authors collection where the author has abook title that matches the answer
            author: authors.find((author) => author.books.some((title) => title === answer))
        }
    };

    // default, starting question data
    const defaultQuestionData = GetTurnData();

    // state hooks
    const [questionData, SetQuestionData] = useState(defaultQuestionData);

    const ValidateAnswer = (answer) =>
    {
        let isCorrect  = state.turnData.author.books.some((book) => book === answer );
        state.highlight = isCorrect ? "correct" : "wrong";
    };

    return(
    <div className="container-fluid">
        <Hero />
            <Turn {...state.turnData} highlight={state.highlight} OnAnswerSelected={ValidateAnswer}/>
        <Continue />
        <Footer />
    </div>);
};

const Hero = () =>
{
    return(
        <div className="row">
            <div className="jumbotron col-10 offset-1">
                <h1>Author Quiz</h1>
                <p>Select the book written by the author shown.</p>
            </div>
        </div>
    );
};

const Turn = ({author, books, highlight, OnAnswerSelected}) =>
{
    const HighlightToBgColor = () =>
    {
        let mapping = { "none": "", "correct": "green", "wrong": "red"};

        // this is interesting.  dynamically selecting a property...
        console.dir(highlight);
        console.dir(mapping[highlight]);
        return mapping[highlight];
    };

   return (
        <div className="row turn" style={{backgroundColor: HighlightToBgColor(highlight)}}>
            <div className="col-4 offset-1">
                <img src={author.imageUrl} className="authorimage" alt="Author" />
            </div>
            <div className="col-6">
                {books.map((title) => <Book Title={title} key={title} ClickHander={OnAnswerSelected} />)}
            </div>
        </div>
   );
};

const Book = (props) =>
{
   return (
           <div className="answer" onClick={()=>{ props.ClickHander(props.Title); } }>
               {props.Title}
            </div >
   );
};

const Continue = (props) =>
{
   return (
       <div></div>
   );
};

const Footer = (props) => {
    return (
        <div className="text-center">Footer here</div>
    );
};


export default AuthorQuiz;