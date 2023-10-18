import React from 'react'
import './SignUp.scss'
function SignUpAccessItem({title,image1,image2}) {
  return (
    <div className='signUp-access-item'>
      <div className='signUP-access-inner'>
        <img src={process.env.PUBLIC_URL + "/images/signUpAccessIcon.svg"} alt='access-icon' />
        <p>
            {title}
        </p>
        <img src={process.env.PUBLIC_URL + "/images/signUpAccessTick.svg"} alt="access-icon" />
      </div>
    </div>
  )
}

export default SignUpAccessItem
