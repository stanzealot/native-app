import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'

function Partners() {
  return (
    <AnimationOnScroll animateIn="fadeInUp" duration={2} delay={300} animateOnce={true}>                     
      <div className='partners'>
          <div className='partner-wrapper'>
            <div className='partner-inner'>
                <p className='partner-title'>Some Partners In Flick</p>
                <div className='partner-slider'>
                    <img src='/images/slide.svg' alt='slide' />
                    <img src='/images/slide.svg' alt='slide' />
                    <img src='/images/slide.svg' alt='slide' />
                    <img src='/images/slide.svg' alt='slide' />
                </div>
                <div className='partner-ruler'></div>

                <div className='partner-license'>
                    <img  src='/images/cbn.svg' alt='cbn' />
                    <img  src='/images/ndic.svg' alt='cbn' />
                </div>
            </div>
          </div>
      </div>
    </AnimationOnScroll>
  )
}

export default Partners
