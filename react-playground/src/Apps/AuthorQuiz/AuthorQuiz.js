import React, { useState } from 'react';
import Hero from './Components/Hero';
import Footer from './Components/Footer'
import Continue from './Components/Continue';
import SelectedAuthor from './Components/SelectedAuthor'
import AnswerList from './Components/AnswerList';
import { shuffle, sample } from 'underscore';

function Author(id, name, imgUrl, imgSource, books)
{
    this.Id = id;
    this.Name = name;
    this.ImageUrl = imgUrl;
    this.ImageSource = imgSource;
    this.Books = books;
}

const AuthorQuiz = (props) =>
{
    let authors = [];
    let allBooks = [];
    let fourRandomBooks = [];
    let defaultSelectedAuthor = null;

    console.dir(props);

    const BuildAuthors = () =>
    {
        let twain = new Author(1, 'Mark Twain', 'Images/Authors/mark-twain.jpg', 'Wikimedia Commons', ['The Adventures of Huckleberry Finn', 'Life on the Mississippi']);
        let conrad = new Author(2, 'Joseph Conrad', 'Images/Authors/joseph-conrad.jpg', 'Wikimedia Commons', ['Heart of Darkness']);
        let rowling = new Author(3, 'J.K Rowling', 'Images/Authors/jk-rowling.jpg', 'Wikimedia Commons', ['Harry Potter and the Sorcerers Stone', 'Harry Potter and some other story']);
        let king = new Author(4, 'Stephen King', 'Images/Authors/stephen-king.jpg', 'Wikimedia Commons', ['The Shining', 'It', 'Carrie']);
        let shakespeare = new Author(5, 'William Shakespeare', 'Images/Authors/william-shakespeare.jpg', 'Wikimedia Commons', ['Hamlet', 'Macbeth']);
        let clarke = new Author(6, 'Arthur C Clarke', 'Images/Authors/arthur-c-clarke.jpg', 'Wikimedia Commons', ['2001', 'Rendevous with Rama']);
        authors.push(twain, conrad, rowling, king, shakespeare, clarke);
    };

    const BuildAllBooks = () =>
    {
        authors.forEach((author) => { author.Books.forEach((book) => { allBooks.push(book); }); });
        allBooks = allBooks.sort();
    };

    const SetSelectedAuthor = () =>
    {
        fourRandomBooks = shuffle(allBooks).slice(0, 4);

        // establish the ANSWER - pick one of the 4 random books
        const answer = sample(fourRandomBooks);

        // the author will come from the authors collection where the author has abook title that matches the answer
        let selectedAuthor = authors.find((author) => author.Books.some((title) => title === answer))
        //let turnData = new TurnData(fourRandomBooks, turnAuthor);

        return selectedAuthor;
    };

    BuildAuthors();
    BuildAllBooks();
    SetSelectedAuthor();

    defaultSelectedAuthor = SetSelectedAuthor();

    // state & hooks
    // I'm not so sure we need state here
    const [selectedAuthor, SetNewSelectedAuthor] = useState(defaultSelectedAuthor);

    return (
        <div className="container-fluid">
            <Hero />
            <div className="row turn">
                <div className="col-4 offset-1">
                    <h5 className="text-center">Author {props.AuthorCounter}</h5>
                    <SelectedAuthor Author={defaultSelectedAuthor} />
                </div>
                <div className="col-6">
                    <h5>Pick the a book by the author</h5>
                    <AnswerList Answers={fourRandomBooks} Author={selectedAuthor} />
                </div>
            </div>
            <Continue ClickHander={props.NewGameHandler} />
            <Footer />
        </div>
   );
};

export default AuthorQuiz;