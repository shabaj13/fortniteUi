import React from 'react'
import './App.css'
const Navbar = () => {
  return (
    <>
      <div className="container">
        <div className="Navbar">
          <div className="logo">
            <h1>EpicGames</h1>
          </div>
          <div className="menu">
            <ul>
              <li>Games</li>
              <li>Reviews</li>
              <li>FAQ</li>
              <li>Chat</li>
            </ul>
            <span>
                <p>Download</p>
            </span>
          </div>
      </div>
      </div>

    </>
  )
}

export default Navbar