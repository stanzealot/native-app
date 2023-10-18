import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='footer2'>
      <p className='flick-footer'>© Flick</p>
      <p className='footer-dot'>.</p>
      <Link to="/contact-us">
        Contact Us
        <img style={{display:"inline"}} src={process.env.PUBLIC_URL+'/images/arrowUpward.svg'} alt="contact us" />
      </Link>
      
      <Link to='/contact-us'>
        API Docs
        <img style={{display:"inline"}} src={process.env.PUBLIC_URL+'/images/arrowUpward.svg'} alt="Api" />
      </Link>
      
    </div>
  )
}

export default Footer
