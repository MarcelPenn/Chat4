import React from 'react'

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img 
          src="https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg"
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src="https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg" alt=""/>
      </div>
    </div>
  )
}

export default Message