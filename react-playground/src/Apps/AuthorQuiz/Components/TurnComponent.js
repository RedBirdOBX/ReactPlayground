import React from 'react';
import HeroComponent from './HeroComponent';
import FooterComponent from './FooterComponent';
import NewGameComponent from './NewGameComponent';

const TurnComponent = (props) =>
{
   return (
       <div>
           <div className="container-fluid">
               <HeroComponent />
               <div className="row turn">
                   <div className="col-5">
                       [AuthorComponent Author=author ]<br />
                       [ScoreComponent GameScore=score ]<br />
                       [NewGameComponent NewGameHandler=props.NewGameHandler ]
                   </div>
                   <div className="col-7">
                       <h5>Which book did this author write?</h5>
                       [AnswerListComponent PossibleAnswers=possibleAnswers Author=author ProcessAnswerRef=ProcessAnswer ]<br />
                       (temp)
                       <button onClick={() => props.UpdateScoreHandler()}>Test</button><br />
                       [NextAuthorComponent ]
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