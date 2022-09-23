import React from 'react'
import {BsLinkedin, BsGithub } from 'react-icons/bs'
 

const HeaderSocial = () => {
  return (
    <div className='header__social'>
      <a href="https://www.linkedin.com/in/garretthays/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/garretthays" target="_blank"><BsGithub /></a>
    </div>
  )
}

export default HeaderSocial