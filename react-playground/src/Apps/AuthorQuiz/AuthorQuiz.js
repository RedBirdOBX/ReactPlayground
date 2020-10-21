import React, { useState } from 'react';
import Hero from './Components/Hero';
import SelectedAuthor from './Components/SelectedAuthor';
import AnswerList from './Components/AnswerList';
import NextAuthor from './Components/NextAuthor';
import Score from './Components/Score';
import NewGame from './Components/NewGame';
import Footer from './Components/Footer';
import { shuffle, sample } from 'underscore';

// Start:
//  object and var names shouldn't be the same as component names
//  fix score vals in Score Component
// does updating score reset whole game?  WHERE should this state be maintained?


const AuthorQuiz = (props) =>
{
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

    // app data, not component data
    let authors = [];
    let allBooks = [];
    let fourRandomBooks = [];
    let selectedAuthor = null;

    const BuildAuthors = () =>
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

    const SetSelectedAuthor = () =>
    {
        fourRandomBooks = shuffle(allBooks).slice(0, 4);
        const answer = sample(fourRandomBooks);

        // the author will come from the authors collection where the author has abook title that matches the answer
        let selectedAuthor = authors.find((author) => author.Books.some((title) => title === answer))
        return selectedAuthor;
    };

    BuildAuthors();
    BuildAllBooks();
    SetSelectedAuthor();

    selectedAuthor = SetSelectedAuthor();

    // state & hooks
    const [author, setAuthor] = useState(selectedAuthor);
    const [gameScore, setGameScore] = useState( {"Right": 0, "Wrong": 0} );

    //console.dir(score);

   return (
       <div className="container-fluid">
           <Hero />
           <div className="row turn">
               <div className="col-5">
                   <SelectedAuthor SelectedAuthor={selectedAuthor} />
                   <Score GameScore={gameScore}/>
                   <NewGame NewGameHandler={props.NewGameHandler} />
               </div>
               <div className="col-7">
                   <h5>Which book did this author write?</h5>
                   <AnswerList PossibleAnswers={fourRandomBooks} SelectedAuthor={selectedAuthor} />
                   <NextAuthor />
               </div>
           </div>
           <Footer GameId={props.GameId} />
       </div>
   );
};

export default AuthorQuiz;