import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">ASPN Chat</span>
      <div className="user">
        <img src="https://cdn.pixabay.com/photo/2015/07/31/15/01/man-869215_960_720.jpg" alt=""/>
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar