import React from 'react';

import './drawertoggle.css';

const drawerToggle = (props) => (
    <div className="DrawerToggle" onClick={props.clicked}>
        
        <div className="white"></div>
        <div className="white"></div>
        <div className="white"></div>
       
    </div>
);

export default drawerToggle;
