import React, { useState } from 'react'
import styled from 'styled-components';
import LinkFooter from './LinkFooter';
import { useNavigate } from 'react-router-dom';



export const LinkContainer = styled.div`
background: #F7FCFC;
max-width: 1440px;
width:100%;
height:100vh;
overflow:hidden;
margin:0 auto;
display:flex;
position:relative;

justify-content:center;
`
export const LinkBox = styled.div`
margin: 118px auto;
width:100%;
max-width:380px;
display:flex;
flex-direction:column;
align-items:center;

border-radius: 16px;
background: #FFF;
box-shadow: 0px 20px 30px 0px rgba(0, 0, 0, 0.04);
height:fit-content;
`
export const Wrapper = styled.div`
width:79%;
max-width:300px;
display:flex;
flex-direction:column;

.form_input{
    display:flex;
    flex-direction:column;
    gap: 20px;
.input_group{
    width:100%;
    display:flex;
    flex-direction:column;
    gap:6px;

    .input_text{
        color: var(--gray-700, #344054);
        font-family: Circular Std;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px; 
    }
    .input_link{
        border-radius: 8px;
        border: 1px solid #D0D5DD;
        background: var(--base-white, #FFF);
        width:100%;
        padding: 8px 12px;
    }
}

}

.bottom-text{
    display:flex;
    gap:9px;
    margin-left: auto;
    margin-right:auto;
    margin-top:32px;
    margin-bottom:50px;
    align-items:center;
    
    .available_inst{
        color: var(--Flick-Subtext, #8C8F97);
        font-family: Circular Std;
        font-size: 12px;
        font-style: normal;
        font-weight: 450;
        line-height: 16px; /* 133.333% */
    }
}
`

const LinkLogo = styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
margin-top:28px;
margin-bottom:33px;

.link_name{
    color: var(--flick-secondary-4, #303C53);
    text-align: center;
    font-family: Circular Std;
    font-size: 21px;
    font-style: normal;
    font-weight: 500;
    line-height: 32.64px; /* 155.429% */
    margin-top:9px;

}
.link_channel{
    color: var(--Flick-Subtext, #8C8F97);
    text-align: center;
    font-family: DM Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 19.32px; 
    margin-top:5px;
}
`

function LinkRegister() {
    const navigate = useNavigate();
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

  const handleSubmite = ()=>{
    navigate('/link-account')
  }
  return (
    <LinkContainer>
        <LinkBox>
            <Wrapper>
                <LinkLogo>
                    <img src="/images/flickLink.svg" alt="flick" />
                    <h5 className='link_name'>Mide Ajibade</h5>
                    <p className='link_channel'>by Flick.</p>
                </LinkLogo>

                <form onSubmit={handleSubmite} className='form_input'>
                    <div className='input_group'>
                        <p className='input_text'>First name</p>
                        <input placeholder='e.g. Samuel' className='input_link' type='text' name="name"  onChange={handleChange} />
                    </div>
                    <div className='input_group'>
                        <p className='input_text'>Last name</p>
                        <input placeholder='e.g. Samuel' className='input_link' type='text' name="name"  onChange={handleChange} />
                    </div>
                    <div className='input_group'>
                        <p className='input_text'>Email address</p>
                        <input placeholder='e.g. Samuel@getflick.app' className='input_link' type='text' name="name"  onChange={handleChange} />
                    </div>
                    <button className='btn'>
                    Continue
                    </button>
                </form>
                <div className='bottom-text'>
                    <p className='available_inst'>20+ institutions available</p>
                    <img src="/images/banksIcon.svg" alt='bank'/>
                </div>
            </Wrapper>
        </LinkBox>
        <LinkFooter/>
    </LinkContainer>
  )
}

export default LinkRegister
