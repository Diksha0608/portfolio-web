import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
    

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Build interactive UIs and impressive web applications that attract users.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>From zero, or a simple landing page, to a beautiful front-end web application.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Develop your next marketplace with the most powerful Javascript framework.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Improve the UX/UI of your application’s back-end to acquire more sales.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon1'/>
              <p> Build strong and secure single-page applications to ensure fast user experience, dynamic loading, and smooth data sync and transfer.</p>
            </li>
            {/* <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li> */}
          </ul>
        </article>

        {/* web Development */}

        {/* <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article> */}
      </div>
    </section>
  )
}

export default Services
