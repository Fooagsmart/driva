import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
         <Link to="/">Home</Link>
          <Link to="/Menu">Menu</Link>
          <Link to="/Condition">Condition</Link>
          <Link to="/profile">ChangeProfile</Link>
    </div>
  )
}

export default Navbar
