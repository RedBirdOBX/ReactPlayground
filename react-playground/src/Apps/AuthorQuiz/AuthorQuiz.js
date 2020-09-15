import React from 'react';


const authors =
[
    {
        name: 'Mark Twain',
        imageUrl: 'Images/Authors/mark-twain.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['The Adventures of Huckleberry Finn']
    }
];


//outside of react?
const state =
{
    turnData:
    {
        author: authors[0],
        books: authors[0].books
    }
};

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
                {books.map((title) => <p>{title}</p>)}
            </div>
        </div>
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