import React from "react";
import {Router, Route, Switch, Link, useParams} from 'react-router-dom';
import history from '../history';

import Nav from './Nav.jsx';
import Users from './Users.jsx';
import Home from './Home.jsx';
import Friends from './Friends.jsx'

const App = () => {
  // let friends  = useParams();
  // console.log({friends})
  

  return (
    <div>
      <h1>Hello</h1>
      
      <Router history={history}>
        
      <Nav />
      
        <Switch>
            <Route exact path="/users" component={Users}/>
            <Route exact path="/home" component={Home}/>

            <Route path="/users/:friends" component={Friends} />


        </Switch>
      </Router>
    </div>
    )

}

export default App;