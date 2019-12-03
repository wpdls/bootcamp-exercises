import React, {useState, useEffect} from "react";

import UserCard from './UserCard.jsx';

// const url = "https://nemadywgu6.execute-api.us-west-2.amazonaws.com/prod/"

const App = props => {

  const [users, setUsers] = useState([])

  useEffect( () => {
    fetch('https://nemadywgu6.execute-api.us-west-2.amazonaws.com/prod/')
    .then(res => res.json())
    .then(
      users => {
        setUsers(users)
        console.log(users)
      })
  }, [])

  console.log('users', users[0]);
  return (
    
    <div>
      <div style={{ fontSize: "6rem" }}>Loading....</div>
      User:
      {/* {users.map(user => {
        return (
          <div>
            {user.name}
            {user.job}
          </div>
        )
      })} */}
      <UserCard users={users}/>
    </div>
  )
  
}

export default App;
