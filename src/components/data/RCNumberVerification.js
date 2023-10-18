import React from 'react'
import './data.scss'
import Status from '../common/Status'

function RCNumberVerification({toggleModal}) {
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
                <h3>RC Number Verification</h3>
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
                            <p className='verify-title-th'>Company name</p>
                            <p className='verify-title-th'>RC number</p>
                        </div>
                        <div className='verify-content-title'> 
                            <p className='verify-title-td'>MUSRAH ENTERPRISES</p>
                            <p className='verify-title-td'>2001810</p>
                        </div>
                    </div>

                    <div className='verify-content'>
                        <div className='verify-content-title'>
                            <p className='verify-title-th'>City</p>
                            <p className='verify-title-th'>Branch address</p>
                        </div>
                        <div className='verify-content-title'> 
                            <p className='verify-title-td'>Not available</p>
                            <p className='verify-title-td'>Not available</p>
                        </div>
                    </div>
                    <div className='verify-content'>
                        <div className='verify-content-title'>
                            <p className='verify-title-th'>LGA</p>
                            <p className='verify-title-th'>Date of registration</p>
                        </div>
                        <div className='verify-content-title'> 
                            <p className='verify-title-td'>Not available</p>
                            <p className='verify-title-td'>2005-04-12</p>
                        </div>
                    </div>

                    <div className='verify-content'>
                        <div className='verify-content-title'>
                            <p className='verify-title-th'>State</p>
                            <p className='verify-title-th'>Company status</p>
                        </div>
                        <div className='verify-content-title'> 
                            <p className='verify-title-td'>Not available</p>
                            <Status 
                                mgs="Active"
                            />
                        </div>
                    </div>
                    <div className='verify-content'>
                        <div className='verify-content-title'>
                            <p className='verify-title-th'>Address</p>
                        </div>
                        <div className='verify-content-title'> 
                            <p className='verify-title-td'>NO. 1, RAYMOND STREET, SABO, YABA, LAGOS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RCNumberVerification