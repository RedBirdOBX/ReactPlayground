import React, {useState} from 'react';
import ScoreComponent from './Components/ScoreComponent';
import TurnComponent from './Components/TurnComponent';

let authors = [];

// relocate these
function Score(right, wrong)
{
    this.Right = right;
    this.Wrong = wrong;
}

function Author(id, name, imgUrl, books)
{
    this.Id = id;
    this.Name = name;
    this.ImageUrl = imgUrl;
    this.Books = books;
}

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
    console.log('building authors....');
    console.dir(authors);
};

BuildAllAuthors();


const AuthorQuizComponent = (props) =>
{

    // keeps track of score & game id //

    // state & hooks
    const [gameId, UpdateGameId] = useState(1);
    const [score, UpdateScore] = useState(new Score(0, 0));

    const LoadNewGame = () =>
    {
        console.clear();
        console.log("Loading new game");
        UpdateGameId(gameId + 1);

        UpdateScore(new Score(0, 0));
    };

    const UpdateGameScore = () =>
    {
        //console.log("updating score...");

        //using state
        let newScore = new Score(score.Right, score.Wrong);
        newScore.Right = newScore.Right + 1;
        UpdateScore(newScore);

        // local test
        // rightAnswers = rightAnswers+1;
        // console.log(rightAnswers);
    };

   return (
       <div>
           <ScoreComponent Score={score} />
           <TurnComponent
                key={gameId}
                GameId={gameId}
                Authors={authors}
                NewGameHandler={LoadNewGame}
                UpdateScoreHandler={UpdateGameScore} />
       </div>
   );
};

export default AuthorQuizComponent;