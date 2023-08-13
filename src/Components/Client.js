import React from 'react'
import Avatar from 'react-avatar';

function Client({username}) {//The prop used must be destructured before using it below.
    // console.log(username)
  return (
    <div className="Client">
        <Avatar name={username} size={50} round="14px"/>
        <span className='userName'>{username}</span>
    </div>
  )
}

export default Client
