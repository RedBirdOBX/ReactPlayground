import React from 'react';
import {shuffle, sample} from 'underscore';

//outside of react?
let books = [];
const authors =
[
    {
        name: 'Mark Twain',
        imageUrl: 'Images/Authors/mark-twain.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['The Adventures of Huckleberry Finn', 'Life on the Mississippe']
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
        books: ['Harry Potter and the Sorcerers Stone','Harry Potter and some other story']
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


const GetTurnData = (arg) =>
{
    // get a fresh list of all books
    books = [];
    authors.forEach((author) => { author.books.forEach((book) => { books.push(book); }); });
    books = books.sort();

    let fourRandomBooks = shuffle(books).slice(0,4);
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

const state =
{
    turnData: GetTurnData(authors)
};
//outside of react?


// APP ===============================================
const AuthorQuiz = () =>
{
    return(
    <div className="container-fluid">
        <Hero />
        <Turn {...state.turnData} />
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

const Turn = ({author, books}) =>
{
   return (
        <div className="row turn" style={{backgroundColor: "#ffffff"}}>
            <div className="col-4 offset-1">
                <img src={author.imageUrl} className="authorimage" alt="Author" />
            </div>
            <div className="col-6">
                {books.map((title) => <Book Title={title} key={title} />)}
            </div>
        </div>
   );
};

const Book = (props) =>
{
   return (
           <div className="answer">
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