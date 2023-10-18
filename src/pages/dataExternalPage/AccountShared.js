import React from 'react'
import { LinkContainer,LinkBox,Wrapper } from './LinkRegister'
import './link.scss'
import LinkFooter from './LinkFooter'
function AccountShared() {
  return (
    <LinkContainer>
        <LinkBox style={{height:" 620px"}}>
            <Wrapper>
           
               <img style={{margin:"0 auto",marginTop:"157px"}} src="/images/flickLink.svg" alt="flick" />
               <h1 className='text_h1' style={{margin:"0 auto",marginTop:"10px"}}>Your bank account statement was shared successfully </h1>
               <p className='text_p' style={{margin:"0 auto",marginTop:"18px"}}>You can now close this page </p>
               <p className='text_p' style={{margin:"0 auto",marginTop:"187px"}}>We have sent a confirmation to </p>

               <h1 className='text_h1' style={{margin:"0 auto",marginTop:"7px"}}>ayomide@getflick.app</h1>
                
                
            </Wrapper>
        </LinkBox>
        <LinkFooter/>
    </LinkContainer>
  )
}

export default AccountShared
