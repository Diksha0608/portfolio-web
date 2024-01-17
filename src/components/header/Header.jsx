import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/pic10.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <>
    <header>
     <div className="container container__header">
      <h5>Hello I'm</h5>
      <h1>Diksha Kumari</h1>
      <h5 className="text-light">Frontend Developer</h5>
      <CTA/>
      <HeaderSocial/>

      <div className="me">
        <img src={ME} alt='me'></img>
      </div>

      <a href='#contact' className='scroll__down'> Scroll Down</a>
     </div>

    </header>
        
      
    </>
  )
}

export default Header
