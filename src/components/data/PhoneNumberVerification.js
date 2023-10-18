import React from 'react'
import './data.scss'
import Status from '../common/Status'

function PhoneNumberVerification({toggleModal}) {
    const handletoggle =()=>{
        toggleModal()
      }
  return (
    <div className='overlay'>
        <div className='verify-box'>
            <div className='verify-box-wrapper'>
                <img onClick={handletoggle} className='verify-modal-close' src='/images/x-close.svg' alt='f'/>
            <div className='verify-title'>
                <img src='/images/verify-check-circle.svg' alt='f'/>
                <h3>Phone Number Verification</h3>
                <p>Verification Status: <span><Status
                        icon="/images/success.svg"
                        mgs="Successful"
                        /></span>
                </p>
            </div>
                <div  className='verify-line'></div>
                <div className='verify-image'>
                    <img className='verify-img' src='/images/phone-verification.svg' alt='f'/>
                </div>

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
                            <p className='verify-title-th'>User ID</p>
                            <p className='verify-title-th'>Date of birth</p>
                        </div>
                        <div className='verify-content-title'> 
                            <p className='verify-title-td'>BFTXSE-4532</p>
                            <p className='verify-title-td'>04-Feb-2023</p>
                        </div>
                    </div>
                    <div className='verify-content'>
                        <div className='verify-content-title'>
                            <p className='verify-title-th'>Customer</p>
                        </div>
                        <div className='verify-content-title'> 
                            <p className='verify-title-td'>87b5bsfdven-edff-4a5e-87ww-d1chsgegcs</p>
                        </div>
                    </div>
                </div>
                <button className='btn' style={{width:"50%", display:"flex", alignContent:"center", justifyContent:"center", gap:"10px"}}>
                    <img src='/images/download-pdf.svg' alt='f'/> Download as PDF
                </button>
            </div>
        </div>
    </div>
  )
}

export default PhoneNumberVerification