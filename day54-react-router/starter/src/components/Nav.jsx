import React from "react";
import {Router, Route, Switch, Link, useParams} from 'react-router-dom';
import history from '../history';

const style = {
    display: 'flex',
    flexDirection: 'space-between',
    margin:'1rem'
    
}
const Nav = () => {
    return (
       <div style={style}>
            <div>
                <Link to="/users"><div>Users</div></Link>
            </div>
            <div>
                <Link to="/home"><div>Home</div></Link>
            </div>
    </div>
        
    )
}

export default Nav;