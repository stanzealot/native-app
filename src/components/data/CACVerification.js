import React from 'react'
import './data.scss'
import Status from '../common/Status'

function CACVerification({setVerificationResult}) {
    
  return (
    <div className='overlay' onClick={setVerificationResult.bind(this,null)}>
        <div className='verify-box'>
            <div className='verify-box-wrapper'>
                <img onClick={setVerificationResult.bind(this,null)} className='verify-modal-close' src='/images/x-close.svg' alt='f'/>
            <div className='verify-title'>
                <img src='/images/verify-check-circle.svg' alt='f'/>
                <h3>CAC Verification</h3>
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
                            <p className='verify-title-td'>PAPIEES MEATRO LIMITED</p>
                            <p className='verify-title-td'>3001810</p>
                        </div>
                    </div>

                    <div className='verify-content'>
                        <div className='verify-content-title'>
                            <p className='verify-title-th'>Date of registration</p>
                            <p className='verify-title-th'>Type of company</p>
                        </div>
                        <div className='verify-content-title'> 
                            <p className='verify-title-td'>04-Feb-2023</p>
                            <p className='verify-title-td'>Company</p>
                        </div>
                    </div>

                    <div className='verify-content'>
                        <div className='verify-content-title'>
                            <p className='verify-title-th'>Business</p>
                            <p className='verify-title-th'>Status</p>
                        </div>
                        <div className='verify-content-title'> 
                            <p className='verify-title-td'>4a306901-afdb-45b6-9b41</p>
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
                            <p className='verify-title-td'>9, Okesuna Street, Shomolu, Bariga, Lagos State.</p>
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

export default CACVerification