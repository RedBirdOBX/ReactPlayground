import React, {useState} from 'react';
import {shuffle, sample} from 'underscore';

// TODO:
//      redo architecture
//      use props validation (https://app.pluralsight.com/course-player?clipId=c9d9aa52-a7dc-43d2-9679-9c3054d48efd   9:00)

function TurnData(fourRandomBooks, author)
{
    this.FourRandomBooks = fourRandomBooks;
    this.Author = author;
}

function Author(name, imgUrl, imgSource, books)
{
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
    let twain = new Author('Mark Twain', 'Images/Authors/mark-twain.jpg', 'Wikimedia Commons', ['The Adventures of Huckleberry Finn', 'Life on the Mississippi']);
    let conrad = new Author('Joseph Conrad', 'Images/Authors/joseph-conrad.jpg', 'Wikimedia Commons', ['Heart of Darkness']);
    let rowling = new Author('J.K Rowling', 'Images/Authors/jk-rowling.jpg', 'Wikimedia Commons', ['Harry Potter and the Sorcerers Stone', 'Harry Potter and some other story']);
    let king = new Author('Stephen King', 'Images/Authors/stephen-king.jpg', 'Wikimedia Commons', ['The Shining', 'It', 'Carrie']);
    let shakespeare = new Author('William Shakespeare', 'Images/Authors/william-shakespeare.jpg', 'Wikimedia Commons', ['Hamlet', 'Macbeth']);
    let clarke = new Author('Arthur C Clarke', 'Images/Authors/arthur-c-clarke.jpg', 'Wikimedia Commons', ['2001', 'Rendevous with Rama']);
    authors.push(twain, conrad, rowling, king, shakespeare, clarke);

    // get list of **all** books
    authors.forEach((author) => { author.Books.forEach((book) => { allBooks.push(book); }); });
    allBooks = allBooks.sort();

    const GetTurnData = () =>
    {
        let fourRandomBooks = shuffle(allBooks).slice(0, 4);
        console.dir(fourRandomBooks);

        // write an example using sample
        // establish the ANSWER - pick one of the 4 random books
        const answer = sample(fourRandomBooks);
        console.dir(answer);

        // the author will come from the authors collection where the author has abook title that matches the answer
        let turnAuthor = authors.find((author) => author.Books.some((title) => title === answer))
        let turnData = new TurnData(fourRandomBooks, turnAuthor);

        return turnData;
    };

    // default, starting question data
    const defaultQuestionData = GetTurnData();

    // state hooks
    // set the question data
    const [questionData, SetQuestionData] = useState(defaultQuestionData);
    const [bgHighlight, SetBgHighlight] = useState("");


    // answer == title
    const ValidateAnswer = (answer) =>
    {
        let isCorrect = questionData.Author.Books.some((book) => book === answer );
        let newHighlight = isCorrect ? "correct" : "wrong";
        SetBgHighlight(newHighlight);
    };

    return(
    <div className="container-fluid">
        <Hero />
            {/* <Turn {...state.turnData} highlight={state.highlight} OnAnswerSelected={ValidateAnswer}/> */}
            <Turn TurnData={questionData} Highlight={bgHighlight} OnAnswerSelected={ValidateAnswer} />
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

const Turn = (props) =>
{

    //props.TurnData


    const HighlightToBgColor = () =>
    {
        let mapping = { "none": "", "correct": "green", "wrong": "red"};

        // this is interesting.  dynamically selecting a property...
        console.dir(props.Highlight);
        console.dir(mapping[props.Highlight]);
        return mapping[props.Highlight];
    };

   return (
        <div className="row turn" style={{backgroundColor: HighlightToBgColor()}}>
            <div className="col-4 offset-1">
                <img src={props.TurnData.Author.ImageUrl} className="authorimage" alt="Author" />
            </div>
            <div className="col-6">
               {props.TurnData.FourRandomBooks.map((title) => <Book Title={title} key={title} ClickHander={props.OnAnswerSelected} />)}
            </div>
        </div>
   );
};

const Book = (props) =>
{
   return (
           <div className="answer" onClick={()=>{ props.ClickHander(props.Title); } }>
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