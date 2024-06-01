import React from 'react'
import { NavLink } from 'react-router-dom'

import { SiGithub } from 'react-icons/si'
import { SiLinkedin } from 'react-icons/si'
import { SiInstagram } from 'react-icons/si'
import { SiFacebook } from 'react-icons/si'
import { IoLocationSharp } from 'react-icons/io5'

import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink
            className="nav-li active"
            to="https://github.com/gautami20"
          >
            <SiGithub className="icon" />
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-li active"
            to="www.linkedin.com/in/gautami-gupta-ab12b824a"
          >
            <SiLinkedin className="icon" />
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-li active"
            to="https://www.instagram.com/gautami028/?next=%2F&hl=en"
          >
            <SiInstagram className="icon" />
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-li active"
            to="https://www.facebook.com/profile.php?id=61560119800722"
          >
            <SiFacebook className="icon" />
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-li active"
            to="https://maps.app.goo.gl/etF3b9kiErrR45Ex6"
          >
            <IoLocationSharp className="icon" />
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
