import React from 'react'
import { LinkContainer,LinkBox,Wrapper } from './LinkRegister'
import './link.scss'
import LinkFooter from './LinkFooter'
import { useNavigate } from 'react-router-dom'
function LoginSuccessful() {
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate('/link-success')
    }
  return (
    <LinkContainer >
        <LinkBox style={{height:"461px",background:"#D25026"}}>
            <Wrapper>
               <img className='img_success' src='/images/successIcon.svg' alt="success" />
               <h1 className='log_h'>Logged in successfully</h1>
               <p className='log_p'>Click on the continue button below to proceed with Flick.</p>
               <button  onClick={handleClick} className='cont_btn btn'>Continue</button>

            </Wrapper>

                        
        </LinkBox>
        <LinkFooter />
        
    </LinkContainer>
  )
}

export default LoginSuccessful
