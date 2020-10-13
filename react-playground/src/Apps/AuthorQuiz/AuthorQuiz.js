import React, { useState } from 'react';
import Hero from './Components/Hero';
import Footer from './Components/Footer'
import Continue from './Components/Continue';
import SelectedAuthor from './Components/SelectedAuthor'
import AnswerList from './Components/AnswerList';
import { shuffle, sample } from 'underscore';

const AuthorQuiz = (props) =>
{

    // APP DATA - can be refactored
    function Author(id, name, imgUrl, imgSource, books)
    {
        this.Id = id;
        this.Name = name;
        this.ImageUrl = imgUrl;
        this.ImageSource = imgSource;
        this.Books = books;
    }

    let authors = [];
    let allBooks = [];
    let fourRandomBooks = [];

    // build authors
    let twain = new Author(1, 'Mark Twain', 'Images/Authors/mark-twain.jpg', 'Wikimedia Commons', ['The Adventures of Huckleberry Finn', 'Life on the Mississippi']);
    let conrad = new Author(2, 'Joseph Conrad', 'Images/Authors/joseph-conrad.jpg', 'Wikimedia Commons', ['Heart of Darkness']);
    let rowling = new Author(3, 'J.K Rowling', 'Images/Authors/jk-rowling.jpg', 'Wikimedia Commons', ['Harry Potter and the Sorcerers Stone', 'Harry Potter and some other story']);
    let king = new Author(4, 'Stephen King', 'Images/Authors/stephen-king.jpg', 'Wikimedia Commons', ['The Shining', 'It', 'Carrie']);
    let shakespeare = new Author(5, 'William Shakespeare', 'Images/Authors/william-shakespeare.jpg', 'Wikimedia Commons', ['Hamlet', 'Macbeth']);
    let clarke = new Author(6, 'Arthur C Clarke', 'Images/Authors/arthur-c-clarke.jpg', 'Wikimedia Commons', ['2001', 'Rendevous with Rama']);
    authors.push(twain, conrad, rowling, king, shakespeare, clarke);

    // get all the books
    authors.forEach((author) => { author.Books.forEach((book) => { allBooks.push(book); }); });
    allBooks = allBooks.sort();

    // select the turn author
    const GetSelectedAuthor = () =>
    {
        fourRandomBooks = shuffle(allBooks).slice(0, 4);

        // establish the ANSWER - pick one of the 4 random books
        const answer = sample(fourRandomBooks);

        // the author will come from the authors collection where the author has abook title that matches the answer
        let turnAuthor = authors.find((author) => author.Books.some((title) => title === answer))
        //let turnData = new TurnData(fourRandomBooks, turnAuthor);

        return turnAuthor;
    };

    const defaultSelectedAuthor = GetSelectedAuthor();


    // state / hooks
    // set the question and highlight data
    const [selectedAuthor, SetSelectedAuthor] = useState(defaultSelectedAuthor);
    const [bgHighlight, SetBgHighlight] = useState("");



    // testing
    // console.log("Authors");
    // console.dir(authors);
    // console.log("All books");
    // console.dir(allBooks);
    // console.log("Turn Author");
    // console.dir(defaultTurnAuthor);
    // END OF APP DATA


    const ProcessAnswer = (answer) =>
    {
        console.log(`${answer} clicked!`);
        let isCorrect = selectedAuthor.Books.some((book) => book === answer);
        console.log(isCorrect);
        let newHighlight = isCorrect ? "correct" : "wrong";
        SetBgHighlight(newHighlight);
        console.log(newHighlight);
        console.log(bgHighlight);
    };




    return (
        <div className="container-fluid">
            <Hero />
            <div className="row turn">
                <div className="col-4 offset-1">
                    <h5>Author</h5>
                    <SelectedAuthor Author={defaultSelectedAuthor} />
                </div>
                <div className="col-6">
                    <h5>Pick the a book by the author</h5>
                    <AnswerList Answers={fourRandomBooks} Highlight={bgHighlight} ChoiceSelectionHander={ProcessAnswer} />
                </div>
            </div>
            <Continue />
            <Footer />
        </div>
   );
};

export default AuthorQuiz;