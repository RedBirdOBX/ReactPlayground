import React from 'react';
import Hero from './Components/Hero';
import Author from './Components/Author';
import AnswerList from './Components/AnswerList';
import NextAuthor from './Components/NextAuthor';
import Score from './Components/Score';
import NewGame from './Components/NewGame';
import Footer from './Components/Footer';

const AuthorQuiz = (props) =>
{

//    const [myStateObj, setMyStateObj] = useState(myDefaultVal);
//    const UpdateState = (newVal) =>
//    {
//        setMyStateOb(newVal);
//    }

   return (
       <div className="container-fluid">
           <Hero />
           <div className="row turn">
               <div className="col-5">
                   <Author />
                   <Score />
                   <NewGame />
               </div>
               <div className="col-7">
                   <h5>Which book did this author write?</h5>
                   <AnswerList />
                   <NextAuthor />
               </div>
           </div>
           <Footer />
       </div>
   );
};

export default AuthorQuiz;