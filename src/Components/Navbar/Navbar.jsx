import React from 'react'
import { Link } from 'react-router-dom'
import logoInlineWhite from '../../assets/logos/logo-inline-white.png'
import valiseWhite from '../../assets/logos/valise-white.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/home">
        <img className="navbar__img" src={logoInlineWhite} alt="image intro" />
      </Link>
      <Link className="link__valise" to="/reservations">
        <img
          className="navbar__img__valise"
          src={valiseWhite}
          alt="image intro"
        />{' '}
      </Link>
    </div>
  )
}

export default Navbar
