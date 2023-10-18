import React, { useState } from 'react'
import { LinkContainer,LinkBox,Wrapper } from './LinkRegister'
import './link.scss'
import LinkFooter from './LinkFooter'
import { useNavigate } from 'react-router-dom'
function LoginChooseAccount() {
    const [activeIndex, setActiveIndex] = useState(null);
    const navigate = useNavigate() 
    const handleClick = (active)=>{
        setActiveIndex(active);
        navigate('/login-successful')
    }
    const divs = ["first", "second", "third"];
  return (
    <LinkContainer >
        <LinkBox style={{height:"600px"}}>
            <Wrapper>
                <div className='flex-row top_m'>
                    <img className='arrowclose' src='/images/arrowBackTine.svg' alt='close'/>
                    
                    <img   className='x_close' src='/images/x-close.svg' alt='close'/>

                </div>
                <img className='bank_logo' style={{margin:"0 auto",marginTop:"10px"}} src="/images/ubaSquare.svg" alt="flick" />
                <h1 className='text_h5' style={{marginTop:"15px",marginLeft:"auto",marginRight:"auto"}}>Log in with your personal details</h1>
                <p className='text_p' style={{marginTop:"7px",marginLeft:"auto",marginRight:"auto"}}>Log in with your personal details</p>
            </Wrapper>

            <div className='personal_login' style={{marginTop:"32px"}}>
                <div className='login_method' style={{gap:"11px"}}>
                {divs.map((text, index) => (
                    
                    <div 
                    key={index}
                    onClick={() => handleClick(index)}
   
                    className={`login_method_item bgItem  ${activeIndex === index ? "bank_active" : ""}`}
                    >
                        <img src="/images/logoMethod.svg" alt='logo'/>
                        <div className='login_method_col'>
                            <h5 className={`text_h5 text_color  ${activeIndex === index ? "active" : ""}`}>AJIBADE AYOMIDE DAVID <br/> <span>0224943454</span></h5>
                            <p className={`text_p text_color  ${activeIndex === index ? "p_active" : ""}`}>NGN 80,000,000.89</p>
                        </div>
                    </div>
                ))}
                   
                    
                </div>
            </div>              
        </LinkBox>
        <LinkFooter />
    </LinkContainer>
  )
}

export default LoginChooseAccount
