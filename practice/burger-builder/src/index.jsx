import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './components/Layout/Layout.jsx';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder.jsx';

import './index.scss';
import './index.html';

class App extends React.Component {
  render() {
    return (
      <>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
