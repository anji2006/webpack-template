import React from 'react'

import './header.css'
import {NavLink, useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'

const Header = () => {
  const navigate = useNavigate()

  const logoutFun = () => {
    Cookies.remove('token')
    navigate('/login')
  }
  return (
    <div className="header-box">
      <div className="logo-box">logo</div>
      <nav className="nav-box">
        <ul>
          <li>
            <NavLink
              to="dashboard"
              className={({isActive, isPending}) =>
                isActive ? 'active' : isPending ? 'pending' : ''
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="home"
              className={({isActive, isPending}) =>
                isActive ? 'active' : isPending ? 'pending' : ''
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contacts"
              className={({isActive, isPending}) =>
                isActive ? 'active' : isPending ? 'pending' : ''
              }
            >
              Contacts
            </NavLink>
          </li>
          <li>
            <NavLink
              to="details"
              className={({isActive, isPending}) =>
                isActive ? 'active' : isPending ? 'pending' : ''
              }
            >
              Details
            </NavLink>
          </li>
          <button type="button" onClick={() => logoutFun()}>
            Logout
          </button>
        </ul>
      </nav>
      <div className="profile-box">profile</div>
    </div>
  )
}

export default Header
