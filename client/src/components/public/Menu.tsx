import React from 'react'
import { Link } from 'react-router-dom'
import myPath from '../../utils/path'

const Menu = () => {
  const bfLoginLinks = [
    { label: 'Login', path: `${myPath.LOGIN}`  },
    { label: 'Register', path:`${myPath.REGISTER}` }
  ]

  return (
    <ul className="navbar-nav ms-auto">
      {
        bfLoginLinks.map((link, index) => (
          <li key={index} className="nav-item">
            <Link className="nav-link" to={link.path}>{link.label}</Link>
          </li>
        ))
      }

      <li className="nav-item dropdown">
        <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          UserName
        </span>

        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
          <li><hr className="dropdown-divider" /></li>
          <li><Link className="dropdown-item" to="/">Logout</Link></li>
        </ul>
      </li>

    </ul>
  )
}

export default Menu