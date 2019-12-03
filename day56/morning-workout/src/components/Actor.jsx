import React, {useEffect, useState} from "react";


const Actor = (props) => {
    const [actorOne, setActorOne] = useState([]);
const [actorTwo, setActorTwo] = useState([]);
useEffect( ()=> {
  fetch('https://classes.codingbootcamp.cz/assets/classes/workouts/actor-o-matic/actor/22616')
  .then(res => res.json())
  .then(actorOne => { 
    setActorOne(actorOne)

  })
}, [])
    
console.log('actor', actorOne)
    return (
        
      <>
      <h1>Actor Name: {actorOne.name}</h1>
      <h2>How many movies: {actorOne.movies_total}</h2>
      
       
         {/* <div>
             {props.actorOne.name}
             {props.actorOne.movies_total}
           </div> */}
       <h1> hello</h1>
      </>
    );
}

export default Actor;
