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
              <h3>Industry Experience</h3>
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
          Junior Full Stack Developer with 5+ years of industry experience spanning technical and project management roles. I leverage passion, hard work and diverse experience to achieve results. An advocate of grit, determination and rolled-up sleeves. A proponent of pushing the boundaries and finding the answer to “What is the best way we can do this? ” Above all, I am a team player who believes the sweetest victories are won together.	

 
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}


export default About
