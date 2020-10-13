import React, {useState} from 'react';
import {shuffle, sample} from 'underscore';
import Hero from './Components/Hero';
import QuizTurn from './Components/QuizTurn';
import Continue from './Components/Continue';
import Footer from './Components/Footer';

// TODO:
//      use props validation (https://app.pluralsight.com/course-player?clipId=c9d9aa52-a7dc-43d2-9679-9c3054d48efd   9:00)

function TurnData(fourRandomBooks, author)
{
    this.FourRandomBooks = fourRandomBooks;
    this.Author = author;
}

function Author(id, name, imgUrl, imgSource, books)
{
    this.Id = id;
    this.Name = name;
    this.ImageUrl = imgUrl;
    this.ImageSource = imgSource;
    this.Books = books;
}

const AuthorQuiz = (highlight) =>
{
    // App Data
    let allBooks = [];
    let authors = [];
    let twain = new Author(1, 'Mark Twain', 'Images/Authors/mark-twain.jpg', 'Wikimedia Commons', ['The Adventures of Huckleberry Finn', 'Life on the Mississippi']);
    let conrad = new Author(2, 'Joseph Conrad', 'Images/Authors/joseph-conrad.jpg', 'Wikimedia Commons', ['Heart of Darkness']);
    let rowling = new Author(3, 'J.K Rowling', 'Images/Authors/jk-rowling.jpg', 'Wikimedia Commons', ['Harry Potter and the Sorcerers Stone', 'Harry Potter and some other story']);
    let king = new Author(4, 'Stephen King', 'Images/Authors/stephen-king.jpg', 'Wikimedia Commons', ['The Shining', 'It', 'Carrie']);
    let shakespeare = new Author(5, 'William Shakespeare', 'Images/Authors/william-shakespeare.jpg', 'Wikimedia Commons', ['Hamlet', 'Macbeth']);
    let clarke = new Author(6, 'Arthur C Clarke', 'Images/Authors/arthur-c-clarke.jpg', 'Wikimedia Commons', ['2001', 'Rendevous with Rama']);
    authors.push(twain, conrad, rowling, king, shakespeare, clarke);

    // get list of **all** books
    authors.forEach((author) => { author.Books.forEach((book) => { allBooks.push(book); }); });
    allBooks = allBooks.sort();

    const GetTurnData = () =>
    {
        let fourRandomBooks = shuffle(allBooks).slice(0, 4);

        // establish the ANSWER - pick one of the 4 random books
        const answer = sample(fourRandomBooks);

        // the author will come from the authors collection where the author has abook title that matches the answer
        let turnAuthor = authors.find((author) => author.Books.some((title) => title === answer))
        let turnData = new TurnData(fourRandomBooks, turnAuthor);

        return turnData;
    };

    // default starting-question data
    const defaultQuestionData = GetTurnData();

    // state / hooks
    // set the question and highlight data
    const [questionData, SetQuestionData] = useState(defaultQuestionData);
    const [bgHighlight, SetBgHighlight] = useState("");

    // for testing
    //console.log('All Books:');
    //console.dir(allBooks);

    //console.log('Question Data:');
    //console.dir(questionData);

    // answer == title
    const ProcessAnswer = (answer) =>
    {
        let isCorrect = questionData.Author.Books.some((book) => book === answer );
        let newHighlight = isCorrect ? "correct" : "wrong";
        SetBgHighlight(newHighlight);
    };

    return(
    <div className="container-fluid">
        <Hero />
            <QuizTurn TurnData={questionData}
                Highlight={bgHighlight}
                ProcessAnswerRef={ProcessAnswer}
            />
        <Continue />
        <Footer />
    </div>);
};

export default AuthorQuiz;