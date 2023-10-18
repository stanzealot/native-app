import React from 'react'
import './data.scss'
import Status from '../common/Status'

function PhoneNumber({setVerificationResult}) {
    
  return (
    <div className='overlay' onClick={setVerificationResult.bind(this,null)}>
        <div className='verify-box'>
            <div className='verify-box-wrapper'>
                <img onClick={setVerificationResult.bind(this,null)} className='verify-modal-close' src='/images/x-close.svg' alt='f'/>
            <div className='verify-title'>
                <img src='/images/verify-check-circle.svg' alt='f'/>
                <h3>Phone Number</h3>
                <p>Verification Status: <span><Status
                        icon="/images/success.svg"
                        mgs="Successful"
                        /></span>
                </p>
            </div>
                <div  className='verify-line'></div>

                <div className='verify-overview'>
                    <div className='verify-content'>
                        <div className='verify-content-title'>
                            <p className='verify-title-th'>Full name</p>
                            <p className='verify-title-th'>Gender</p>
                        </div>
                        <div className='verify-content-title'> 
                            <p className='verify-title-td'>MIDE AJIBADE DAVID</p>
                            <p className='verify-title-td'>Male</p>
                        </div>
                    </div>

                    <div className='verify-content'>
                        <div className='verify-content-title'>
                            <p className='verify-title-th'>Date of birth</p>
                            <p className='verify-title-th'>Phone number</p>
                        </div>
                        <div className='verify-content-title'> 
                            <p className='verify-title-td'>04-Feb-2023</p>
                            <p className='verify-title-td'>08136902667</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PhoneNumber