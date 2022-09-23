import React from 'react'
import './header.css'
import CTA from './CTA' 
import PROFILE from '../../assets/profile.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4></h4>
        <h1>Garrett Hays</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className='profile'>
          <img src={PROFILE} alt="profile" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header