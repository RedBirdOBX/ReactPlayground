import React, { useState } from 'react';
import HeroComponent from './Components/HeroComponent';
import AuthorComponent from './Components/AuthorComponent';
import AnswerListComponent from './Components/AnswerListComponent';
import NextAuthorComponent from './Components/NextAuthorComponent';
import ScoreComponent from './Components/ScoreComponent';
import NewGameComponent from './Components/NewGameComponent';
import FooterComponent from './Components/FooterComponent';
import { shuffle, sample } from 'underscore';


// this component needs to track 'score' in state.
// score is passed down to score component.

const AuthorQuiz = (props) =>
{
    console.log("rendering AuthorQuizComponent...");

    function Author(id, name, imgUrl, books)
    {
        this.Id = id;
        this.Name = name;
        this.ImageUrl = imgUrl;
        this.Books = books;
    }

    function Score(right, wrong)
    {
        this.Right = right;
        this.Wrong = wrong;
    }

    let authors = [];
    let allBooks = [];
    let possibleAnswers = [];
    let defaultAuthor = null;
    let answer = "";
    //let score = new Score(0,0);

    // state
    const [score, UpdateScore] = useState(new Score(0, 0));
    const [author, NextAuthor] = useState();

    const BuildAllAuthors = () =>
    {
        let twain = new Author(1, 'Mark Twain', 'Images/Authors/mark-twain.jpg', ['The Adventures of Huckleberry Finn']);
        let conrad = new Author(2, 'Joseph Conrad', 'Images/Authors/joseph-conrad.jpg', ['Heart of Darkness']);
        let rowling = new Author(3, 'J.K Rowling', 'Images/Authors/jk-rowling.jpg', ['Harry Potter and the Sorcerers Stone']);
        let king = new Author(4, 'Stephen King', 'Images/Authors/stephen-king.jpg', ['The Shining']);
        let shakespeare = new Author(5, 'William Shakespeare', 'Images/Authors/william-shakespeare.jpg', ['Hamlet']);
        let clarke = new Author(6, 'Arthur C Clarke', 'Images/Authors/arthur-c-clarke.jpg', ['Rendevous with Rama']);
        let stevenson = new Author(7, 'Neal Stevenson', 'Images/Authors/neal-stevenson.jpg', ['SevenEves']);
        let asimov = new Author(8, 'Isaac Asimov', 'Images/Authors/isaac-asimov.jpg', ['I, Robot']);
        authors.push(twain, conrad, rowling, king, shakespeare, clarke, stevenson, asimov);
    };

    const BuildAllBooks = () =>
    {
        authors.forEach((author) => { author.Books.forEach((book) => { allBooks.push(book); }); });
        allBooks = allBooks.sort();
    };

    const GetPossibleAnswers = () =>
    {
        possibleAnswers = shuffle(allBooks).slice(0, 4);
    };

    const GetAnswer = () =>
    {
        answer = sample(possibleAnswers);
    };

    const SetAuthor = () =>
    {
        // this should be called when we want a new author
        // the author will come from the authors collection where the author has abook title that matches the answer
        let a = authors.find((a) => a.Books.some((title) => title === answer))
        author = a;
    };

    const ProcessAnswer = (isCorrect) =>
    {
        // start here
        console.log('updating score....');

        let newScore = new Score(score.Right, score.Wrong);

        if (isCorrect)
        {
            newScore.Right = newScore.Right + 1;
        }
        else
        {
            newScore.Wrong = newScore.Wrong + 1;
        }

        UpdateScore(newScore);
        //score = newScore;
        console.dir(newScore);
    };

    // 1) build list of all authors
    BuildAllAuthors();

    // 2) build list of all books
    BuildAllBooks();

    // 3) get 4 random books
    GetPossibleAnswers();

    // 4) grab one of the possible answers
    GetAnswer();

    // 5) look at answer and set author
    SetAuthor();

   return (
       <div className="container-fluid">
           <HeroComponent />
           <div className="row turn">
               <div className="col-5">
                   <AuthorComponent Author={author} />
                   <ScoreComponent GameScore={score}/>
                   <NewGameComponent NewGameHandler={props.NewGameHandler} />
               </div>
               <div className="col-7">
                   <h5>Which book did this author write?</h5>
                   <AnswerListComponent PossibleAnswers={possibleAnswers} Author={author} ProcessAnswerRef={ProcessAnswer} />
                   <NextAuthorComponent />
               </div>
           </div>
           <FooterComponent GameId={props.GameId} />
       </div>
   );
};

export default AuthorQuiz;


    //const [author, setAuthor] = useState(defaultAuthor);
    //const [gameScore, setGameScore] = useState( {"Right": 0, "Wrong": 0} );

    // const SetSelectedAuthor = () => {
    //     fourRandomBooks = shuffle(allBooks).slice(0, 4);
    //     const answer = sample(fourRandomBooks);

    //     // the author will come from the authors collection where the author has abook title that matches the answer
    //     let selectedAuthor = authors.find((author) => author.Books.some((title) => title === answer))
    //     return selectedAuthor;
    // };


    // const SetDefaultAuthor = () =>
    // {
    //     // get a random author
    //     defaultAuthor = sample(authors);
    // };
