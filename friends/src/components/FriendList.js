import React from 'react';
import Friend from './Friend'

const FriendList = props => {
  return (
    <React.Fragment>

    {props.friends.map(friend => (
      <Friend
        key={friend.id}
        info={friend}
        handleClick={props.handleClick} />
    ))}
  </React.Fragment>
  )

}

export default FriendList
