import React from 'react';
import ReactDOM from 'react-dom';


import './index.html';
import './index.scss';

class App extends React.Component {
  constructor(props) {
    super(props); 

    this.state = {
      data: null
    };

     this.url = "https://classes.codingbootcamp.cz/api/student_attendance/coding-bootcamp/autumn-2019/2863";
    }
  
    componentDidMount() {
      fetch(this.url)
        .then(response => response.json())
        .then(data => {
            this.setState({
               data: data,
  

            })
      });
  }


  
    render() {
      console.log(this.state.data);

      
      if(this.state.data == null) {
        return "loading"
      } else {
        console.log(this.state.data)
          return (       
            <>
              <h1>Student List</h1>
              <h2>{this.state.data.name}</h2>
                <p>{this.state.data.id}</p>
                  {
                    this.state.data.attendance.map(attendance => (
                    <p>{attendance.date} </p>))
                  }
            </>
          )
        }
    }
  }
  
  ReactDOM.render(<App />, document.getElementById('app'));