import React, { useState} from 'react'
import { BeatLoader } from 'react-spinners'
import './connectAccount.scss'

function SuperWallet() {

    const [isLoading, setIsLoading] = useState(false);

  return (
    <div className='connect-account-overlay'>
        <div className='connect-account-main'>
            <div className='connect-account-box'> 
                <div  className='close-button'>
                    <img src={process.env.PUBLIC_URL + "/images/close.svg"} alt="close"/>
                </div>
                <div className='flick-logo'>
                    <img src={process.env.PUBLIC_URL + "/images/flick-black-logo.svg"} alt="close"/>
                </div>
                <p className='super-wallet'>Superwallet uses <span>Flick</span> to connect your account</p>
                <div className='connect-effortless'>
                   <div className='border-line'>
                        <div className='connect-title'>
                            <img src={process.env.PUBLIC_URL + "/images/connect.svg"} alt="logo"/>
                            <div className='connect-link'>
                                <p className='connect-your-account'>Connect effortlessly</p>
                                <p className='securely-connect' style={{marginBottom:"18px"}}>Flick lets you securely connect your financial accounts in seconds</p>
                            </div>
                        </div>
                    </div>
                    <div className='connect-title'>
                        <img src={process.env.PUBLIC_URL + "/images/your-data.svg"} alt="logo"/>
                        <div className='connect-link'>
                            <p className='connect-your-account'>Your data belongs to you</p>
                            <p className='securely-connect'>Flick doesn’t sell personal info, and will only use it with your permission.</p>
                        </div>
                    </div>
                <button className="btn" style={{background:"#2EBDB6"}}>
                {isLoading ? (
                    <BeatLoader
                        color="#FFF"
                        cssOverride={{}}
                    />              ) : (
                    <>
                    Continue
                    <img src={process.env.PUBLIC_URL + "/images/arrow-forward.svg"} alt="arrow btn" style={{ display: "inline", marginLeft: "5px" }}/>
                    </>
                )}
                </button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default SuperWallet