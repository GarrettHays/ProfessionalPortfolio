import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Project Title 1',
    desc: 'Short project description, written in languages. This is a placeholder where the description will go.',
    github: 'https://github.com/garretthays'
  },
  {
    id: 2,
    image: IMG1,
    title: 'Project Title 2',
    desc: 'Short project description, written in languages. This is a placeholder where the description will go.',
    github: 'https://github.com/garretthays'
  },
  {
    id: 3,
    image: IMG1,
    title: 'Project Title 3',
    desc: 'Short project description, written in languages. This is a placeholder where the description will go.',
    github: 'https://github.com/garretthays'
  },
]

const Portfolio = () => {
  return (
    <section id= 'portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       {
        data.map(({id, image, title, desc, github}) => {
          return (
            <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <p>{desc}</p>
            <div className="portfolio__item-cta">
              <a href={github} className='portfolio__btn'>Github</a>
            </div>
            </article>
          )
        })
       }
      </div>
    </section>
  )
}

export default Portfolio