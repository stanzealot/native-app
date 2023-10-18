import React from 'react'
import styled from 'styled-components'


const FooterLinks = styled.div`
display:flex;
position: absolute;
bottom:13px;
left: 50%;
transform: translateX(-50%);
align-items:center;
gap:21px;
.footer-items{
    color: var(--flick-secondary-5, #151F32);
    font-family: Circular Std;
    font-size: 13px;
    font-style: normal;
    font-weight: 450;
    line-height: 19.5px; /* 150% */
    cursor:pointer;
    &:hover{
        color: #259792
    }
}
`
function LinkFooter() {
  return (
    <FooterLinks>
      <p className='footer-items'>© Flick</p>
      <p className='footer-items'>Contact Us <img style={{display:"inline"}} src='/images/arrowUpward.svg' alt='arrow'/></p>
      <p className='footer-items'>API Docs <img style={{display:"inline"}} src='/images/arrowUpward.svg' alt='arrow'/></p>
    </FooterLinks>
  )
}

export default LinkFooter
