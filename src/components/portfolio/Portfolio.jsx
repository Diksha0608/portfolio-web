import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/youtube-clone.png'
import IMG2 from '../../assets/food-factory-app.png';
import IMG3 from '../../assets/insta-social.png';
import IMG4 from '../../assets/flipkart_img.png';
import IMG5 from '../../assets/guess-number.png';
import IMG6 from '../../assets/pig-img.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Youtube CLone',
    github: 'https://github.com/Diksha0608/Video-clone',
    demo: 'https://youtube-clone0608.netlify.app/'
    
  },
  

  {
    id: 2,
    image: IMG2,
    title: 'Food Factory App',
    github: 'https://github.com/Diksha0608/Food-Factory',
    demo: 'https://foodfactory-app.netlify.app/'
  },

  {
    id: 3,
    image: IMG3,
    title: 'InstaSocial',
    github: 'https://github.com/Diksha0608/insta-social',
    demo: 'https://social-insta.netlify.app/'
  },

  {
    id: 4,
    image: IMG4,
    title: 'E-Commerce-App',
    github: 'https://github.com/Diksha0608/Onlineshoping',
    demo: 'https://onlineshopping-app.netlify.app/'
 
  },

  {
    id: 5,
    image: IMG5,
    title: 'Guess Number',
    github: 'https://github.com/Diksha0608/guess_number',
    demo: 'https://diksha-guessnumber-game.netlify.app/'

  },

  {
    id: 6,
    image: IMG6,
    title: 'Pig Game',
    github: 'https://github.com/Diksha0608/pig-game',
    demo: 'https://game-js-app.netlify.app/'
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
