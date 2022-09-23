import React from 'react'
import './about.css'
import ABOUTME from '../../assets/aboutme.JPG'
import {AiOutlineTrophy} from 'react-icons/ai'
import {BsPeople} from 'react-icons/bs'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id ='about'>
      <h5>A little bit</h5>
      <h2>About Me</h2>

      <div className='container about__container '>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ABOUTME} alt="About Me Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <AiOutlineTrophy className='about__icon'/>
              <h3>Experience</h3>
              <h4>5</h4>
              <h5>1 yrs: Technical <br/> 4 yrs: Tech Project Mgmt</h5>
            </article>

            <article className='about__card'>
              <BsPeople className='about__icon'/>
              <h3>Clients</h3>
              <h4>25+</h4>
              <h5>world-wide, sized from startup to Fortune 500</h5>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h3>Projects</h3>
              <h4>50+</h4>
              <h5>across C#, .NET, JS, React and more </h5>
            </article>
          </div>

          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About