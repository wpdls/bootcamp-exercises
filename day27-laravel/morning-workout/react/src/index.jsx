import React from 'react';
import ReactDOM from 'react-dom';
import List from './List/List.jsx';

import './index.scss';
import './index.html';

class App extends React.Component {
  render() {
    return (
      <>
        <List
          url="http://www.cbp-exercises.test:8080/day27/morning-workout/games-sql.php"
        />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
