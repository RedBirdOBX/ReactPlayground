import React from 'react';


const authors =
[
    {
        name: 'Mark Twain',
        imageUrl: 'Images/Authors/mark-twain.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['The Adventures of Huckleberry Finn']
    },
    {
        name: 'Joseph Conrad',
        imageUrl: 'Images/Authors/joseph-conrad.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['Heart of Darkness']
    },
    {
        name: 'J.K Rowling',
        imageUrl: 'Images/Authors/jk-rowling.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['Harry Potter and the Sorcerers Stone']
    },
    {
        name: 'Stephen King',
        imageUrl: 'Images/Authors/stephen-king.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['The Shining', 'It']
    },
    {
        name: 'William Shakespeare',
        imageUrl: 'Images/Authors/william-shakespeare.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['Hamlet', 'Macbeth']
    }
];


const GetTurnData = (arg) =>
{

    // What does this function need to do?
    // Well the first thing it needs to do is select a set of possible answers.
    // And we'll do that by joining together the lists of books written by all of the authors in our data set,
    // shuffling them into a random order and then choosing the first four.
    // I can build the collection of all books in our data set by reducing the authors collection and concatenating
    // each author's books into the larger set.
    //use reduce and concat


    //The next thing I want to do is shuffle that list into a random order,
    // and that's a little bit more tricky.
    // So I'll get a little bit of help from an external library by using npm install to install the underscore library.
    // Now at the top of my script, I can import the shuffle function from underscore.
    // The value for random books is equal to shuffle all books and then use the slice
    // method to take the first four elements of the list. Now I'll choose a correct answer from the for random books.
    // Use the sample function to choose a random value. Sample is also an underscore function.
    // So I'll add it to the import. Finally, we're nearly ready to return the turn data required by the
    // turn component which is your recall was a books value and an author value.
    // Books is easy, you now four random books that we chose. And next we need the author.
    // The way that we'll get the author is by using the find method of the authors
};

//outside of react?
const state =
{
    turnData: GetTurnData(authors)
    // {
    //     author: authors[1],
    //     books: authors[1].books
    // }
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
                {books.map((title) => <Book Title={title} key={title} />)}
            </div>
        </div>
   );
};

const Book = (props) =>
{
   return (
           <div className="alert alert-primary">
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