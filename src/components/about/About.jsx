import React from 'react'
import './about.css'
import ME from '../../assets/pic4.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
          <img src={ME} alt="about me" />
          </div>
        

        </div>
        <div className="about__content">
<div className="about__cards">
  <article className="about__card">
    <FaAward className='about__icon'/>
    <h5>Experience</h5>
    <small>2 year working</small>
  </article>

  <article className="about__card">
    <FiUsers className='about__icon'/>
    <h5>Clients</h5>
    <small>2+ India</small>
  </article>

  <article className="about__card">
    <VscFolderLibrary className='about__icon'/>
    <h5>Projects</h5>
    <small>7+ completed</small>
  </article>
</div>


<p>I have been working as a React Developer for the past two year and have gained a
lot of experience in the field. In addition to my React development skills, I am also an expert in HTML5, CSS3,VueJs,TypeScript and JavaScript. I have a deep understanding of the latest web development trends and technologies. </p>

<a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
