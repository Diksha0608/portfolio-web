import React from 'react'
import CV from '../../assets/CV.pdf'
import CV1 from '../../assets/CV1.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV1} download className='btn'>Download CV</a>
        <a href='' className='btn btn-primary'>Let's Talk</a>
      
    </div>
  )
}

export default CTA
