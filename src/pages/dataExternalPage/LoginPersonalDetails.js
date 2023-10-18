import React, { useState } from 'react'
import { LinkContainer,LinkBox,Wrapper } from './LinkRegister'
import './link.scss'
import LinkFooter from './LinkFooter'
import { useNavigate } from 'react-router-dom'
function LoginPersonalDetails() {
    const navigate = useNavigate();
    const handleSubmit = ()=>{
        navigate("/login-choose-account")
    }
    const handleBack = ()=>{
        navigate("/login-personalInfo")
    }
    const [formData,setFormData] = useState({
        first_name:"",
        last_name:"",
        email:""
      })
      const handleChange = (event)=>{
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      }
      
  return (
    <LinkContainer>
        <LinkBox>
            <Wrapper>
                <div className='flex-row top_m'>
                    <img onClick={handleBack} className='arrowclose' src='/images/arrowBackTine.svg' alt='close'/>
                    
                    <img   className='x_close' src='/images/x-close.svg' alt='close'/>

                </div>
                <img className='bank_logo' style={{margin:"0 auto",marginTop:"10px"}} src="/images/ubaSquare.svg" alt="flick" />
                <h1 className='text_h5' style={{marginTop:"15px",marginLeft:"auto",marginRight:"auto"}}>Log in with your personal details</h1>
            </Wrapper>

            <div className='personal_login'>
                
                <form onSubmit={handleSubmit} className='form_input'>
                    <div className='input_group'>
                        <p className='input_text'>UserID</p>
                        <input placeholder='e.g. Account number' className='input_link' type='text' name="name"  onChange={handleChange} />
                    </div>
                    <div className='input_group'>
                        <p className='input_text'>Password</p>
                        <input placeholder='••••••' className='input_link' type='text' name="name"  onChange={handleChange} />
                    </div>
                    
                    <button className='btn btn_extra'>
                    Continue
                    </button>
                </form>
            </div>              
        </LinkBox>
        <LinkFooter />
    </LinkContainer>
  )
}

export default LoginPersonalDetails
