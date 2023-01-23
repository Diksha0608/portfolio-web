import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio-11.jpg'
import IMG2 from '../../assets/portfolio-1.jpg';
import IMG3 from '../../assets/portfolio-3.jpg';
import IMG4 from '../../assets/portfolio-4.jpg';
import IMG5 from '../../assets/portfolio-2.jpg';
import IMG6 from '../../assets/portfolio-6.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Currency',
    github: 'http://github.com',
    demo: 'https://dribbble.com/shots/20335807-Good-Vibes/attachments/15392598?mode=media'
  },

  {
    id: 2,
    image: IMG2,
    title: 'Crypto Currency',
    github: 'http://github.com',
    demo: 'https://dribbble.com/shots/20335807-Good-Vibes/attachments/15392598?mode=media'
  },

  {
    id: 3,
    image: IMG3,
    title: 'Crypto Currency',
    github: 'http://github.com',
    demo: 'https://dribbble.com/shots/20335807-Good-Vibes/attachments/15392598?mode=media'
  },

  {
    id: 4,
    image: IMG4,
    title: 'Crypto Currency',
    github: 'http://github.com',
    demo: 'https://dribbble.com/shots/20335807-Good-Vibes/attachments/15392598?mode=media'
  },

  {
    id: 5,
    image: IMG5,
    title: 'Crypto Currency',
    github: 'http://github.com',
    demo: 'https://dribbble.com/shots/20335807-Good-Vibes/attachments/15392598?mode=media'
  },

  {
    id: 6,
    image: IMG6,
    title: 'Crypto Currency',
    github: 'http://github.com',
    demo: 'https://dribbble.com/shots/20335807-Good-Vibes/attachments/15392598?mode=media'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {
        data.map(({id,image,title,github,demo})=>{
          return(
          <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} className='btn' target='_blank'>Github</a>
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
