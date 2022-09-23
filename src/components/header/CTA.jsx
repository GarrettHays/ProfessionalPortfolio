import React from 'react'
import cv from '../../assets/cv.pdf'

const CTA = () => { 
  return (
    <div className='cta'>
      <a href={cv} download className='btn'>Download Resume</a>
      <a href="#contact" className='btn btn-primary'>Let's Chat</a>
    </div>
  )
}

export default CTA