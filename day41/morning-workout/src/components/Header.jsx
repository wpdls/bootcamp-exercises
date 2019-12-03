import React from 'react';
import Navigation from './components/Header.jsx';
import UserInfo from './components/Header.jsx';



export default class Header extends React.Component {
    render() {
      return (
        <header>
        <img src="https://classes.codingbootcamp.cz/assets/classes/workouts/aperture.png" alt="Aperture science" class="logo"/>

         <UserInfo />

        <Navigation />
    </header>
        
);
}
}
