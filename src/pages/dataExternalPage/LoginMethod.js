import React from 'react'
import { LinkContainer,LinkBox,Wrapper } from './LinkRegister'
import './link.scss'
import LinkFooter from './LinkFooter'
import { useNavigate } from 'react-router-dom'
function LoginMethod() {
    const navigate = useNavigate();
    const handleLogin = ()=>{
        navigate('/login-personalInfo')
    }

  return (
    <LinkContainer>
        <LinkBox>
            <Wrapper>
               <img style={{marginLeft:"auto",marginTop:"28px"}}  className='x_close' src='/images/x-close.svg' alt='close'/>
               <img className='bank_logo' style={{margin:"0 auto",marginTop:"10px"}} src="/images/ubaSquare.svg" alt="flick" />
               <h1 className='text_h5' style={{marginTop:"15px",marginLeft:"auto",marginRight:"auto"}}>Choose log in method</h1>

              <div className='login_method'>
                <div className='login_method_item' onClick={handleLogin}>
                    <img src="/images/loginMethod.svg" alt='logo'/>
                    <div className='login_method_col'>
                        <h5 className='text_h5'>Log in with Internet Banking</h5>
                        <p className='text_p'>Click here to use the credentials you use with your GTBank internet banking.</p>
                    </div>
                </div>
                <div className='login_method_item' style={{borderBottom:"none"}} onClick={handleLogin}>
                    <img src="/images/loginMethod.svg" alt='logo'/>
                    <div className='login_method_col'>
                        <h5 className='text_h5'>Log in with Internet Banking</h5>
                        <p className='text_p'>Click here to use the credentials you use with your GTBank internet banking.</p>
                    </div>
                </div>
              </div>
            </Wrapper>
        </LinkBox>
        <LinkFooter />
    </LinkContainer>
  )
}

export default LoginMethod
