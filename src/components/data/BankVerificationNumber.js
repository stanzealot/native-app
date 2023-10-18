import React from 'react'
import './data.scss'
import Status from '../common/Status'

function BankVerificationNumber({setVerificationResult}) {
    
  return (
    <div className='overlay' onClick={setVerificationResult.bind(this,null)}>
        <div className='verify-box'>
            <div className='verify-box-wrapper'>
                <img onClick={setVerificationResult.bind(this,null)} className='verify-modal-close' src='/images/x-close.svg' alt='f'/>
            <div className='verify-title'>
                <img src='/images/verify-check-circle.svg' alt='f'/>
                <h3>Bank Verification Number</h3>
                <p>Verification Status: <span><Status
                        icon="/images/success.svg"
                        mgs="Successful"
                        /></span>
                </p>
            </div>
                <div  className='verify-line'></div>
                <div className='verify-image'>
                    <img className='verify-img' src='/images/tope.svg' alt='f'/>
                </div>

                <div className='verify-overview'>
                    <div className='verify-content'>
                        <div className='verify-content-title'>
                            <p className='verify-title-th'>BVN</p>
                            <p className='verify-title-th'>NIN</p>
                        </div>
                        <div className='verify-content-title'> 
                            <p className='verify-title-td'>453356435634</p>
                            <p className='verify-title-td'>Not Available</p>
                        </div>
                    </div>

                    <div className='verify-content'>
                        <div className='verify-content-title'>
                            <p className='verify-title-th'>Full name</p>
                            <p className='verify-title-th'>Gender</p>
                        </div>
                        <div className='verify-content-title'> 
                            <p className='verify-title-td'>MIDE AJIBADE</p>
                            <p className='verify-title-td'>Male</p>
                        </div>
                    </div>

                    <div className='verify-content'>
                        <div className='verify-content-title'>
                            <p className='verify-title-th'>Date of birth</p>
                            <p className='verify-title-th'>Email</p>
                        </div>
                        <div className='verify-content-title'> 
                            <p className='verify-title-td'>04-Feb-2023</p>
                            <p className='verify-title-td'>Sample@mail.com</p>
                        </div>
                    </div>

                    <div className='verify-content'>
                        <div className='verify-content-title'>
                            <p className='verify-title-th'>Residential address</p>
                            <p className='verify-title-th'>Marital status</p>
                        </div>
                        <div className='verify-content-title'> 
                            <p className='verify-title-td'>Isale Eko, Lagos</p>
                            <p className='verify-title-td'>Single</p>
                        </div>
                    </div>

                    <div className='verify-content'>
                        <div className='verify-content-title'>
                            <p className='verify-title-th'>Phone number</p>
                            <p className='verify-title-th'>Origin location</p>
                        </div>
                        <div className='verify-content-title'> 
                            <p className='verify-title-td'>08136232327</p>
                            <p className='verify-title-td'>Ibadan South-West CA</p>
                        </div>
                    </div>

                    <div className='verify-content'>
                        <div className='verify-content-title'>
                            <p className='verify-title-th'>Registered on</p>
                            <p className='verify-title-th'>Name on card</p>
                        </div>
                        <div className='verify-content-title'> 
                            <p className='verify-title-td'>13-Sep-2017</p>
                            <p className='verify-title-td'>MIDE AJIBADE</p>
                        </div>
                    </div>

                    <div className='verify-content'>
                        <div className='verify-content-title'>
                            <p className='verify-title-th'>Nationality</p>
                            <p className='verify-title-th'>Watchlisted</p>
                        </div>
                        <div className='verify-content-title'> 
                            <p className='verify-title-td'>Nigeria</p>
                            <p className='verify-title-td'>NO</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BankVerificationNumber