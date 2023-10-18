import React from 'react'
import { LinkContainer,LinkBox,Wrapper } from './LinkRegister'
import './link.scss'
import LinkFooter from './LinkFooter'
import { useNavigate } from 'react-router-dom'
function ChooseBank() {
  const navigate = useNavigate();
  const handleChooseBank = ()=>[
    navigate('/login-method')
  ]
  const handleBack = ()=>{
    navigate('/link-account')
  }
  return (
    <LinkContainer>
        <LinkBox style={{height:"620px"}}>
            <Wrapper>
                <div className='flex-row top_m'>
                    <img onClick={handleBack} className='arrowclose' src='/images/arrowBackTine.svg' alt='close'/>
                    <p className='text_h5'>Choose your bank</p>
                    <img   className='x_close' src='/images/x-close.svg' alt='close'/>

                </div>
               
               <div className='search_bar'>
                <input className='searchInput' type='search' placeholder='Search for your bank'/>
                <img src='/images/searchLink.svg' alt='search' />
               </div>
              
               <div className='menu_profile'>
                    <div className='menu_btn'>
                      <p className='menu_btn_item active'>My details</p>
                      <p className='menu_btn_item'>Profile</p>
                    </div>
                    <div className='menu_items_content'>
                        <div className='menu_items' onClick={handleChooseBank}>
                            <img className='img_menu' src='/images/ubaSquare.svg' alt="uba"/>
                            <p className='text_p'>GTBank </p>
                        </div>
                        <div className='menu_items' onClick={handleChooseBank}>
                            <img className='img_menu' src='/images/ubaSquare.svg' alt="uba"/>
                            <p className='text_p'>GTBank </p>
                        </div>
                        <div className='menu_items' onClick={handleChooseBank}>
                            <img className='img_menu' src='/images/ubaSquare.svg' alt="uba"/>
                            <p className='text_p'>GTBank </p>
                        </div>
                        <div className='menu_items' onClick={handleChooseBank}>
                            <img className='img_menu' src='/images/ubaSquare.svg' alt="uba"/>
                            <p className='text_p'>GTBank </p>
                        </div>
                        <div className='menu_items' onClick={handleChooseBank}>
                            <img className='img_menu' src='/images/ubaSquare.svg' alt="uba"/>
                            <p className='text_p'>GTBank </p>
                        </div>
                        <div className='menu_items' onClick={handleChooseBank}>
                            <img className='img_menu' src='/images/ubaSquare.svg' alt="uba"/>
                            <p className='text_p'>GTBank </p>
                        </div>
                        <div className='menu_items' onClick={handleChooseBank}>
                            <img className='img_menu' src='/images/ubaSquare.svg' alt="uba"/>
                            <p className='text_p'>GTBank </p>
                        </div>
                        
                        
                        
                    </div>
               </div>

              
            </Wrapper>
        </LinkBox>
        <LinkFooter />
    </LinkContainer>
  )
}

export default ChooseBank
