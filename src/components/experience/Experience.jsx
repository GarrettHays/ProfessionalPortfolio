import React from 'react'
import './experience.css'
import {FaHtml5, FaCss3Alt, FaReact, FaAngular, FaBootstrap, FaNodeJs} from 'react-icons/fa'
import {SiJavascript, SiCsharp, SiDotnet, SiMysql, SiFirebase} from 'react-icons/si'
import {BsGearFill} from 'react-icons/bs'


const Experience = () => {
  return (
    <section id= 'experience'>
      <h5>Skills I have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaHtml5 className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className='experience__details'>
              <FaCss3Alt className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiJavascript className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className='experience__details'>
              <FaReact className='experience__details-icon'/>
              <div>
                <h4>React</h4>
              </div>
            </article>
            <article className='experience__details'>
              <FaAngular className='experience__details-icon'/>
              <div>
                <h4>Angular</h4>
              </div>
            </article>
            <article className='experience__details'>
              <FaBootstrap className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
              </div>
            </article>
          </div>
        </div>

        {/* END OF FRONT END */}

        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <SiCsharp color='var(--color-bg)' className='experience__details-icon'/>
              <div>
                <h4>C#</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiDotnet className='experience__details-icon'/>
              <div>
                <h4>.NET</h4>
              </div>
            </article>
            <article className='experience__details'>
              <FaNodeJs className='experience__details-icon'/>
              <div>
                <h4>Node JS</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiMysql className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiFirebase className='experience__details-icon'/>
              <div>
                <h4>Firebase</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsGearFill className='experience__details-icon'/>
              <div>
                <h4>REST API</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience