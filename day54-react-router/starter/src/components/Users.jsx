import React from 'react';
import { Router, Switch, Route, Link, useParams } from 'react-router-dom';
import history from '../history';


import Friends from './Friends.jsx';

const Users = prop => {
    let friends  = useParams();
    
    console.log('halp', {friends})

    return (
        
    <div>
        <h1>This is the User Page</h1>
            <Router history={history}>
                <Link to='/users/:friends' friends={friends}><div>Who are your friends?</div></Link>
                
                <Switch>
                
                    <Route path="/users/:friends" component={Friends} />
                </Switch>


            </Router>
    </div>

    )
    



}
export default Users;