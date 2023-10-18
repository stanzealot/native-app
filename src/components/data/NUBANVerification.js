import React from 'react'
import './data.scss'
import Status from '../common/Status'

function NUBANVerification({setVerificationResult}) {
    
  return (
    <div className='overlay' onClick={setVerificationResult.bind(this,null)}>
        <div className='verify-box'>
            <div className='verify-box-wrapper'>
                <img onClick={setVerificationResult.bind(this,null)} className='verify-modal-close' src='/images/x-close.svg' alt='f'/>
            <div className='verify-title'>
                <img src='/images/verify-check-circle.svg' alt='f'/>
                <h3>NUBAN Verification </h3>
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
                            <p className='verify-title-th'>Gender</p>
                        </div>
                        <div className='verify-content-title'> 
                            <p className='verify-title-td'>MIDE AJIBADE</p>
                            <p className='verify-title-td'>Male</p>
                        </div>
                    </div>

                    <div className='verify-content'>
                        <div className='verify-content-title'>
                            <p className='verify-title-th'>LGA of birth</p>
                            <p className='verify-title-th'>State of birth</p>
                        </div>
                        <div className='verify-content-title'> 
                            <p className='verify-title-td'>Ikeja</p>
                            <p className='verify-title-td'>Lagos</p>
                        </div>
                    </div>

                    <div className='verify-content'>
                        <div className='verify-content-title'>
                            <p className='verify-title-th'>Date of birth</p>
                            <p className='verify-title-th'>Educational level</p>
                        </div>
                        <div className='verify-content-title'> 
                            <p className='verify-title-td'>04-Feb-2023</p>
                            <p className='verify-title-td'>Higher</p>
                        </div>
                    </div>

                    <div className='verify-content'>
                        <div className='verify-content-title'>
                            <p className='verify-title-th'>Employment status</p>
                            <p className='verify-title-th'>Height</p>
                        </div>
                        <div className='verify-content-title'> 
                            <p className='verify-title-td'>Employed</p>
                            <p className='verify-title-td'>5’9</p>
                        </div>
                    </div>

                    <div className='verify-content'>
                        <div className='verify-content-title'>
                            <p className='verify-title-th'>Phone number</p>
                            <p className='verify-title-th'>LGA</p>
                        </div>
                        <div className='verify-content-title'> 
                            <p className='verify-title-td'>08136232327</p>
                            <p className='verify-title-td'>Ibadan South-West CA</p>
                        </div>
                    </div>

                    <div className='verify-content'>
                        <div className='verify-content-title'>
                            <p className='verify-title-th'>Marital status </p>
                            <p className='verify-title-th'>MSISDN</p>
                        </div>
                        <div className='verify-content-title'> 
                            <p className='verify-title-td'>Married</p>
                            <p className='verify-title-td'>0904637462</p>
                        </div>
                    </div>

                    <div className='verify-content'>
                        <div className='verify-content-title'>
                            <p className='verify-title-th'>VNIN</p>
                            <p className='verify-title-th'>Native / Origin Language</p>
                        </div>
                        <div className='verify-content-title'> 
                            <p className='verify-title-td'>MX34DHJHXG57SB</p>
                            <p className='verify-title-td'>English / Yoruba respt.</p>
                        </div>
                    </div>
                    <div className='verify-content'>
                        <div className='verify-content-title'>
                            <p className='verify-title-th'>Profession</p>
                            <p className='verify-title-th'>Religion</p>
                        </div>
                        <div className='verify-content-title'> 
                            <p className='verify-title-td'>Tailor</p>
                            <p className='verify-title-td'>Christian</p>
                        </div>
                    </div>
                    <div className='verify-content'>
                        <div className='verify-content-title'>
                            <p className='verify-title-th'>Residence state</p>
                            <p className='verify-title-th'>Residence LGA</p>
                        </div>
                        <div className='verify-content-title'> 
                            <p className='verify-title-td'>Lagos</p>
                            <p className='verify-title-td'>Ikeja</p>
                        </div>
                    </div>
                    <div className='verify-content'>
                        <div className='verify-content-title'>
                            <p className='verify-title-th'>Residence status</p>
                            <p className='verify-title-th'>Residence town</p>
                        </div>
                        <div className='verify-content-title'> 
                            <p className='verify-title-td'>Occupant</p>
                            <p className='verify-title-td'>Oshogbo</p>
                        </div>
                    </div>
                    <div className='verify-content'>
                        <div className='verify-content-title'>
                            <p className='verify-title-th'>Residence address</p>
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

export default NUBANVerification