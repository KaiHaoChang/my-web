import React from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="nav-container">
            <Link to='/' className="nav-homepage">
              <h1 className="title">首頁</h1>
              <p className="title">HOME</p>         
            </Link>
      <div className="nav-classes">
            <Link to='/project' className="nav-link">
              <h1 className="title">作品集</h1>
              <p className="title">Prjects</p>         
            </Link>
            <Link to='/experience' className="nav-link">
              <h1 className="title">經歷</h1>
              <p className="title">Experience</p>         
            </Link>
            <Link to='/about%20me' className="nav-link">
              <h1 className="title">關於我</h1>
              <p className="title">About Me</p>         
            </Link>
      </div>
    </div>
  )
}

export default Navbar