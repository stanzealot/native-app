import React from 'react'

function AccountConnected() {
  return (
    <div className="connect-account-overlay">
        <div className="connect-account-main">
            <div className="connect-account-box">
                <div className='success-flick'>
                    <img src={process.env.PUBLIC_URL + "/images/success-icon.svg"} alt="logo"/>
                    <img src={process.env.PUBLIC_URL + "/images/flick-white-border.svg"} alt="logo" style={{position:"absolute", bottom:"0", right:"100px"}}/>
                </div>

                <div className='connected'>
                    <p className='account-connected'>Account Connected!</p>
                    <p className='your-account'>Your account has been successfully linked, you can now close this page.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AccountConnected