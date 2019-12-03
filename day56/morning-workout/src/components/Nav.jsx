import React from "react";
import {Router, Route, Link, useParams} from 'react-router-dom';
import history from './history';

import Actor from './Actor.jsx';

const Nav = props => {


    return (
        <>
        The two actors:
      <br></br>
            <Router history={history}>

                <Link to='/Bruce'>Bruce</Link>
                <br></br>
                <Link to='/Selma'>Selma</Link>

                <Route path='/Bruce' component={Actor}/> 
                
                <Route path='/Selma'/> 

            </Router>
        </>
    );
}

export default Nav;
