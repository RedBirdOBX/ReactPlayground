import React, { useState } from 'react';
import { shuffle, sample } from 'underscore';
import HeroComponent from './HeroComponent';
import FooterComponent from './FooterComponent';
import NewGameComponent from './NewGameComponent';
import AuthorComponent from './AuthorComponent';
import NextTurnComponent from './NextTurnComponent';
import AnswerListComponent from './AnswerListComponent';


const TurnComponent = (props) =>
{
    // keeps track of author and possible answers //

    //let possibleAnswers = [];
    let allBooks = [];
    let answer = "";

    // get all books
    const BuildAllBooks = () =>
    {
        props.Authors.forEach((author) => { author.Books.forEach((book) => { allBooks.push(book); }); });
        allBooks = allBooks.sort();
    };

    // get 4 random books
    const GetPossibleAnswers = () =>
    {
        possibleAnswers = shuffle(allBooks).slice(0, 4);
    };

    // pick an answer from the 4 random books
    const GetAnswer = () =>
    {
        answer = sample(possibleAnswers);
    };

    // set the author for this turn
    const GetAuthorFromAnswer = () =>
    {
        // this should be called when we want a new author
        // the author will come from the authors collection where the author has abook title that matches the answer
        let a = props.Authors.find((a) => a.Books.some((title) => title === answer))
        return a;
    };

    const NextTurnHandler = () =>
    {
        GetPossibleAnswers();
        GetAnswer();
        GetAuthor(GetAuthorFromAnswer());
    };

    BuildAllBooks();
    GetPossibleAnswers();
    GetAnswer();
    GetAuthorFromAnswer();

    const [author, GetAuthor] = useState(GetAuthorFromAnswer());
    const [possibleAnswers, SetPossibleAnswer] = useState();
    const [answer, SetAnswer] = useState();

   return (
       <div>
           <div className="container-fluid">
               <HeroComponent />
               <div className="row turn">
                   <div className="col-5">
                       <AuthorComponent Author={author} />
                   </div>
                   <div className="col-7">
                       <h5>Which book did this author write?</h5>
                       <AnswerListComponent Author={author} PossibleAnswers={possibleAnswers} />
                       <button onClick={() => props.UpdateScoreHandler()}>Test score</button><br />
                       <NextTurnComponent NextTurnRef={NextTurnHandler} />
                   </div>
               </div>
               <div className="row turn">
                   <div className="col-12">
                       <NewGameComponent NewGameRef={props.NewGameHandler} />
                       <FooterComponent GameId={props.GameId} />
                   </div>
               </div>
           </div>

       </div>
   );
};

export default TurnComponent;