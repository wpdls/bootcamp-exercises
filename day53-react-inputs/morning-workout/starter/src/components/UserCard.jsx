import React from 'react';

const UserCard = (props) => {
    console.log('child', props.users)
    return (
        <div>
            hello
    {props.users.map(user => {
        return (
          <div>
            {user.name}
            {user.job}
          </div>
        )
      })}
      </div>
    )

}

export default UserCard;