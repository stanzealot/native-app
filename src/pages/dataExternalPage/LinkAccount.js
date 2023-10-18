import React from 'react'
import { LinkContainer,LinkBox,Wrapper } from './LinkRegister'
import './link.scss'
import LinkFooter from './LinkFooter'
import { useNavigate } from 'react-router-dom'
function LinkAccount() {
  const navigate = useNavigate();
  const handleSubmit = ()=>{
    navigate("/choose-account")
  }
  return (
    <LinkContainer>
        <LinkBox>
            <Wrapper>
               <img style={{marginLeft:"auto",marginTop:"28px"}}  className='x_close' src='/images/x-close.svg' alt='close'/>
               <img style={{margin:"0 auto",marginTop:"10px"}} src="/images/flickLink.svg" alt="flick" />
               <h1 className='text_h1' style={{marginTop:"10px"}}>Link your account with Flick</h1>

              <div className='link_flex_gap'>
                    <div className='link_item'>
                        <img src="/images/lock.svg" alt="eye"/>
                        <div className='link_item_text'>
                            <h5 className='text_h5'>Email address</h5>
                            <p className='text_p'>Your information is encrypted using bank grade security</p>
                        </div>
                    </div>
                    <div className='link_item'>
                        <img src="/images/eyePrivate.svg" alt="eye"/>
                        <div className='link_item_text'>
                            <h5 className='text_h5'>Private</h5>
                            <p className='text_p'>Your credentials will never be made accessible to Flick.</p>
                        </div>
                    </div>
                    <div className='link_item'>
                        <img src="/images/lock.svg" alt="eye"/>
                        <div className='link_item_text'>
                            <h5 className='text_h5'>Protected</h5>
                            <p className='text_p'>YFlick or Mono doesn’t have access to move your funds.</p>
                        </div>
                    </div>

                    <div style={{marginBottom:"93px"}}>
                        <p className='text_p' style={{marginBottom:"8px"}}>By clicking the button below you agree to <span style={{color:"#2EBDB6"}}>Flick T&C.</span></p>
                        <button onClick={handleSubmit} className='btn'>Continue</button>
                    </div>
              </div>
            </Wrapper>
        </LinkBox>
        <LinkFooter />
    </LinkContainer>
  )
}

export default LinkAccount
