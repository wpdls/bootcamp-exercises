import React from 'react';
import ReactDOM from 'react-dom';


import './index.html';
import './index.scss';

export default class StudentList extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
          data: null
      }
    }

  
    componentDidMount() {
      fetch("https://classes.codingbootcamp.cz/api/attendance/coding-bootcamp/autumn-2019/2019-11-05")
        .then(response => response.json())
        .then(data => {
            this.setState({
              data: data
            })
          })
  }

  // formatDate(date) {
  //   let date = new Date(date_string);
 
  //   return date.getHours() + (`0${date.getMinutes()}` .slice(-2));
  //   // date.getHours(); // 3
  //   // date.getMinutes(); // 24
  // }
    render() {
      console.log(this.state.data);

      let content = 'Loading...';

      if (this.state.data !== null) {
        content = (
          <>
            <h1>Date: {this.state.data.date} </h1>
            <h2>Attendance:</h2>
            <table>
              {
                this.state.data.attendance.map(student => (
                <tr>
                  <th>{student.name}</th>
                  <td> {student.from}</td>
                </tr>
              ))
              }
            </table>
          </>
        )
      }
      return (
        <>
        {content}
        </>
      )
    }
    
  }
  
 