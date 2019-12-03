import React from 'react';

import './toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems.jsx';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle.jsx';

const toolbar = (props) => (
    <header className="Toolbar">
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        {/* <Logo height="80%"/>  */}
        <nav className="DesktopOnly">
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;