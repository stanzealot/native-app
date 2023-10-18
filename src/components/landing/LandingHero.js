import React from 'react'
import './landing.scss'
import Lottie  from 'lottie-react'
import flickBanner from '../../assets/flickBanner.json';
function LandingHero() {
  return (
    <div className='landing-hero'>
      <div className='landing-wrapper'>
        <div className='hero-left '>
           
            <p className='hero-left-top'>We offer speed payment method at Flick. 👌 </p>
            <h3 className='hero-left-text'>
            Seamless <span>data</span> and <span>payment</span> integration for your product.
            </h3>
            <p className='desc-landing'>
            Flick provides smooth payments and customer identity verification for local and global transactions.
            </p>
            <div className='hero-btn'>
            <button className='btn-landing' style={{paddingTop:'14px'}}>
                Start Flicking <img className='arrow-btn'  src="/images/arrow.svg" alt="arrow"/>
            </button>
            <a className='download-flick' href='https://onelink.to/sa33jx'>
              <img className='landing-download-btn' src='/images/heroDownload.svg' alt='download' />
            </a>
            </div>
        </div>
        <div className='hero-right'>
        <Lottie animationData={flickBanner} />
        </div>
        
      </div>
    </div>
  )
}

export default LandingHero
