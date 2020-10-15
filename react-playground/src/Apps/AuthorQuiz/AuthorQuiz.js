import React, { useState } from 'react';
import Hero from './Components/Hero';
import Footer from './Components/Footer'
import Score from './Components/Score';
import Continue from './Components/Continue';
import SelectedAuthor from './Components/SelectedAuthor'
import AnswerList from './Components/AnswerList';
import { shuffle, sample } from 'underscore';


// TODO:
//      use props validation (https://app.pluralsight.com/course-player?clipId=c9d9aa52-a7dc-43d2-9679-9c3054d48efd   9:00)

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

    const BuildAuthors = () =>
    {
        let twain = new Author(1, 'Mark Twain', 'Images/Authors/mark-twain.jpg', 'Wikimedia Commons', ['The Adventures of Huckleberry Finn', 'Life on the Mississippi']);
        let conrad = new Author(2, 'Joseph Conrad', 'Images/Authors/joseph-conrad.jpg', 'Wikimedia Commons', ['Heart of Darkness']);
        let rowling = new Author(3, 'J.K Rowling', 'Images/Authors/jk-rowling.jpg', 'Wikimedia Commons', ['Harry Potter and the Sorcerers Stone', 'Harry Potter and some other story']);
        let king = new Author(4, 'Stephen King', 'Images/Authors/stephen-king.jpg', 'Wikimedia Commons', ['The Shining', 'It', 'Carrie']);
        let shakespeare = new Author(5, 'William Shakespeare', 'Images/Authors/william-shakespeare.jpg', 'Wikimedia Commons', ['Hamlet', 'Macbeth']);
        let clarke = new Author(6, 'Arthur C Clarke', 'Images/Authors/arthur-c-clarke.jpg', 'Wikimedia Commons', ['2001', 'Rendevous with Rama']);
        let stevenson = new Author(7, 'Neal Stevenson', 'Images/Authors/neal-stevenson.jpg', 'Wikimedia Commons', ['SevenEves']);
        let asimov = new Author(8, 'Isaac Asimov', 'Images/Authors/isaac-asimov.jpg', 'Wikimedia Commons', ['I, Robot']);
        authors.push(twain, conrad, rowling, king, shakespeare, clarke, stevenson, asimov);
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
    const [rightTotal, SetRightTotal] = useState(0);
    const [wrongTotal, SetWrongTotal] = useState(0);

    // for testing
    console.dir(defaultSelectedAuthor.Name);

    return (
        <div className="container-fluid">
            <Hero />
            <div className="row turn">
                <div className="col-4 offset-1">
                    <SelectedAuthor Author={defaultSelectedAuthor} />
                </div>
                <div className="col-6">
                    <h5>Which book did this author write?</h5>
                    <AnswerList Answers={fourRandomBooks} Author={defaultSelectedAuthor} />
                </div>
            </div>
            <Score Right={rightTotal} Wrong={wrongTotal} />
            <Continue ClickHander={props.NewGameHandler} />
            <Footer />
        </div>
   );
};

export default AuthorQuiz;