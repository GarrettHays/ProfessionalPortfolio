import React from 'react'
import './footer.css'
import {BsGithub, BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://Github.com/garretthays'><BsGithub /></a>
        <a href='https://LinkedIn.com/in/garretthays'><BsLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Garrett Hays. All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer