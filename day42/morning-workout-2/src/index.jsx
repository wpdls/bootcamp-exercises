import React from 'react';
import ReactDOM from 'react-dom';
import StudentList from './StudentList.jsx';


import './index.html';
import './index.scss';

class App extends React.Component {
 

    render() {
        return <StudentList />
    }
}

ReactDOM.render(<App />, document.getElementById('app'));