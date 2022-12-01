import React from 'react'
import { NavLink } from 'react-router-dom'
import logoIntro from '../../assets/logos/logo-intro.png'
import './Intro.css'

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro__container">
        <img className="intro__img" src={logoIntro} alt="image intro" />
        <NavLink className="home" to="/home">
          <div className="button">
            <p className="btnText">READY ?</p>
            <div className="btnTwo">
              <p className="btnText2">GO!</p>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default Intro
