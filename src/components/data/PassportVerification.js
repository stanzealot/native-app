import React from 'react'
import './data.scss'
import Status from '../common/Status'

function PassportVerification({setVerificationResult}) {
    
  return (
    <div className='overlay' onClick={setVerificationResult.bind(this,null)}>
        <div className='verify-box'>
            <div className='verify-box-wrapper'>
                <img onClick={setVerificationResult.bind(this,null)} className='verify-modal-close' src='/images/x-close.svg' alt='f'/>
            <div className='verify-title'>
                <img src='/images/verify-check-circle.svg' alt='f'/>
                <h3>International Passport Verification </h3>
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
                            <p className='verify-title-th'>Full name</p>
                            <p className='verify-title-th'>Passport number</p>
                        </div>
                        <div className='verify-content-title'> 
                            <p className='verify-title-td'>AJIBADE AYOMIDE DAVID</p>
                            <p className='verify-title-td'>R30251997</p>
                        </div>
                    </div>

                    <div className='verify-content'>
                        <div className='verify-content-title'>
                            <p className='verify-title-th'>Date of issue</p>
                            <p className='verify-title-th'>Expiry date</p>
                        </div>
                        <div className='verify-content-title'> 
                            <p className='verify-title-td'>04-Feb-2023</p>
                            <p className='verify-title-td'>09-Feb-2023</p>
                        </div>
                    </div>
                    <div className='verify-content'>
                        <div className='verify-content-title'>
                            <p className='verify-title-th'>Document type</p>
                            <p className='verify-title-th'>Issue place</p>
                        </div>
                        <div className='verify-content-title'> 
                            <p className='verify-title-td'>Standard passport</p>
                            <p className='verify-title-td'>Festac, Lagos</p>
                        </div>
                    </div>
                    <div className='verify-content'>
                        <div className='verify-content-title'>
                            <p className='verify-title-th'>Date of birth</p>
                        </div>
                        <div className='verify-content-title'> 
                            <p className='verify-title-td'>04-Feb-2023</p>
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

export default PassportVerification