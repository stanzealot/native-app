import React from 'react'
import '../components/common/Pages.scss'
import '../components/getStarted/GetStarted.scss'
import NameControl from '../components/common/NameControl'
import IntroduceYourBusiness from '../components/getStarted/IntroduceYourBusiness'
function FintechGetStarted() {
  return (
    
    <div className='main-inner'>
        <NameControl 
        btn
        image
        name="You’re Getting Started"
        desc="Take a few minutes to explore Flick!"
        />

        <IntroduceYourBusiness />
    </div>
            

  )
}

export default FintechGetStarted
