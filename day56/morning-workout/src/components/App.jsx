import React, {useState, useEffect} from "react";
import {Router, Route, Link} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Chart from 'react-google-charts';

import Nav from './Nav.jsx';
import Actor from './Actor.jsx';


const App = props => {
// const [actorOne, setActorOne] = useState([]);
// const [actorTwo, setActorTwo] = useState([]);
// useEffect( ()=> {
//   fetch('https://classes.codingbootcamp.cz/assets/classes/workouts/actor-o-matic/actor/22616')
//   .then(res => res.json())
//   .then(actorOne => { 
//     setActorOne(actorOne)

//   })
// }, [])

// useEffect( ()=> {
//   fetch('https://classes.codingbootcamp.cz/assets/classes/workouts/actor-o-matic/actor/19302')
//   .then(res => res.json())
//   .then(actorTwo => { 
//     setActor(actorTwo)

//   })
// }, [])

    return (
      <>
        <Nav/>
      </>
    );
}

export default App;
