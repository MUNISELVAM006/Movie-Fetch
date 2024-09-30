import React from 'react'
import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <div>
     <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl" style={{margin:"0"}}>Movies</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/Project">Project</Link></li>
      <li><Link to="/Contact" >Contact</Link></li>
    
    </ul>
  </div>
</div>
    </div>
  )
}

export default Nav
