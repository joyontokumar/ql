import React from 'react'

const Header = () => {
  return (
    <div>
      <div className="topnav">
        <a href="" className="logo">
          Movie Maker
        </a>
        <div className="search-container">
          <form action="">
            <a href="/">Add Movies</a>
            <input type="text" placeholder="Search movies..." name="search" />
            <button type="submit">submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Header
