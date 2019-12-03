import React from 'react';

import './navigationitems.css';
import NavigationItem from './NavigationItem.jsx'


const navigationItems  = () => (
    <ul className="NavigationItems">
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);

export default navigationItems;