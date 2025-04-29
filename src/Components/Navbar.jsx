import React from 'react'
import '../assets/styles/navbar.css'
import { NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/images/logo.png'


const Navbar = () => {
  let location = useLocation()
  let bool = location.pathname.startsWith('/adminPortal')
  return (
    <>
        <div className="navbar">
            <div className="logo">
              <img src={logo} alt="check internet" />
              <h3>BookHub</h3>
            </div>
            <div className="links">
                {
                  bool 
                  ?
                  <ul>
                      <li><NavLink to="/adminPortal/">Home</NavLink></li>
                      <li><NavLink to="/adminPortal/books">Books</NavLink></li>
                      <li><NavLink to="/adminPortal/addbooks">Add Books</NavLink></li>
                      <li><NavLink to="/adminPortal/users">Users</NavLink></li>
                      <li><NavLink to="/adminPortal/addusers">Add Users</NavLink></li>
                      <li><NavLink to="/">Logout</NavLink></li>
                  </ul>
                  :
                  <ul>
                      <li><NavLink to="/userPortal/">Home</NavLink></li>
                      <li><NavLink to="/userPortal/books">Books</NavLink></li>
                      <li><NavLink to="/userPortal/users">Users</NavLink></li>
                      <li><NavLink to="/userPortal/cart">Cart</NavLink></li>
                      <li><NavLink to="/">Logout</NavLink></li>
                  </ul>
                }
            </div>
        </div>
    </>
  )
}

export default Navbar