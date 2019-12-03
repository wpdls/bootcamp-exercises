import React, { Component } from "react";
import UserCard from './User-Card.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    fetch("https://nemadywgu6.execute-api.us-west-2.amazonaws.com/prod/")
      .then(res => res.json())
      .then(data => {
        this.setState({
          users: data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const userCards = this.state.users.map((user, index) => <UserCard user={user} index={index} />);
    return (
      <>
        {!!this.state.users.length || <div style={{ fontSize: "6rem" }}>Loading...</div>}
        {userCards}
      </>
    );
  }
}

export default App;
