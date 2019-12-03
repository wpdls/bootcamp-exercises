import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Game/Game.jsx';

import './index.scss';
import './index.html';

class App extends React.Component {
  render() {
 
    return (

     <Game />

    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
