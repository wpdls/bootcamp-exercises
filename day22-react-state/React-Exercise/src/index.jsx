import React from 'react';
import ReactDOM from 'react-dom';

import Row from './contact/row.jsx';
import './index.scss';
import './index.html';

class App extends React.Component {
  render() {
    return (
      <>
      <div className="train-carriage">
      <div className="carriage-row">
        <Row
        />
      </div>
      </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
