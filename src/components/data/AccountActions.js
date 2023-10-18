import React from 'react'
import styled from'styled-components'

const AccountActionsContainer =  styled.div`
width:270px;
backgroud:#FFF;
position:absolute;
right:0;

box-shadow: -6px -5px 50px -13px rgba(46,189,182,0.68);
-webkit-box-shadow: -6px -5px 50px -13px rgba(46,189,182,0.68);
-moz-box-shadow: -6px -5px 50px -13px rgba(46,189,182,0.68);
z-index:5;


.account-action-wrapper{
    display:flex;
    flex-direction:column;
    margin:30px 25px;
    gap: 20px;
    .account-action-item{
        display:flex;
        justify-content:space-between;
        align-items:center;
        width:100%
        backgroud:#FFF;
        cursor:pointer;
        .account-action-text{
            color: var(--gray-700, #344054);
            text-align: center;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px; 
        }
    }

}
`

function AccountActions() {
  return (
    <AccountActionsContainer>
        <div className='account-action-wrapper'>
            <div className='account-action-item'>
                <h5 className='account-action-text'>Connect Account</h5>
                <img src="/images/connectAccount.svg" alt='connet' />
            </div>
            <div className='account-action-item'>
                <h5 className='account-action-text' style={{color:"#ED1C24"}}>Connect Account</h5>
                <img src="/images/disConnectAccount.svg" alt='connet' />
            </div>
        </div>
    </AccountActionsContainer>
  )
}

export default AccountActions
