import React from 'react';
import ReactDOM from 'react-dom';
import FrontPage from './BurgerBuilder/FrontPage.jsx';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder.jsx';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import './index.html';


class App extends React.Component {
  render() {
    return (
      <>
        <FrontPage />

       
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
