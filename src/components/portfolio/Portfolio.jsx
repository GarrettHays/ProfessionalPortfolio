import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Project Title 1',
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  },
  {
    id: 2,
    image: IMG1,
    title: 'Project Title 2',
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  },
  {
    id: 3,
    image: IMG1,
    title: 'Project Title 3',
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  },
  {
    id: 4,
    image: IMG1,
    title: 'Project Title 4',
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  },
  {
    id: 5,
    image: IMG1,
    title: 'Project Title 5',
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  },
  {
    id: 6,
    image: IMG1,
    title: 'Project Title 6',
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  },
]

const Portfolio = () => {
  return (
    <section id= 'portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       {
        data.map(({id, image, title, github, demo}) => {
          return (
            <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className='btn'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
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

{/* <article className='portfolio__item'>
<div className="portfolio__item-image">
  <img src={IMG1} alt="Project Thumbnail" />
</div>
<h3>Portfolio Item Title</h3>
<div className="portfolio__item-cta">
  <a href="https://github.com" className='btn'>Github</a>
  <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
</div>
</article> */}