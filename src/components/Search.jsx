import React from 'react'

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user"/>
      </div>
      <div className="userChat">
        <img src="https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg" alt=""/>
        <div className="userChatInfo">
          <span>Paul</span>
        </div>
      </div>
    </div>
  )
}

export default Search