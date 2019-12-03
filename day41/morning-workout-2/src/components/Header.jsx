import React from 'react';
import Navigation from './Navigation.jsx';
import UserInfo from './UserInfo.jsx';



export default class Header extends React.Component {
    render() {
      return (
        <header>
        <img src="https://classes.codingbootcamp.cz/assets/classes/workouts/aperture.png" alt="Aperture science" className="logo"/>

         <UserInfo />

        <Navigation />
    </header>
        
);
}
}
