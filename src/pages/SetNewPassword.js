import React from 'react'
import AsideOverView from '../components/login/AsideOverView'
import '../components/login/Login.scss'
import { Link } from 'react-router-dom';
import Footer from '../components/footer/Footer';
function SetNewPassword() {

  return (
    <div className="login">
        {/* left side */}
      <div className='login-main'>
        <div className='login-main-content'>
        <div className="forgot-password" style={{marginTop: 147}}>
            <img
              src={process.env.PUBLIC_URL + "/images/lock-icon.svg"}
              alt="lock"
            />
            <h1 className="forgot-password-title">Set new password</h1>
            <p className="forgot-password-desc">
            Your new password must be different to previously used passwords.
            </p>
          </div>
            <form className='login-form'>
                <div className='form-groups'>
                    <label className='lbl'>Password</label>
                    <input type='text' name="name" placeholder='••••••••' className='form-control' />
                </div>
                <div className='form-groups'>
                    <label className='lbl'>Confirm Password</label>
                    <input type='text' name="name" placeholder='••••••••' className='form-control' />
                </div>
                <div className='hint'>
                <p className='hint-text'>
                <img
                style={{ display: "inline", marginRight: 8 }}
                src={process.env.PUBLIC_URL + "/images/check-icon.svg"}
                alt="check"
              /> Must be at least 8 characters
                </p>

                <p className='hint-text'>
                <img
                style={{ display: "inline", marginRight: 8 }}
                src={process.env.PUBLIC_URL + "/images/check-icon.svg"}
                alt="check"
              /> Must contain one special character
                </p>
                </div>
                <button className='btn'>
                   Reset Password
                </button>
                <Link className="back-to-login">
              <img
                style={{ display: "inline", marginRight: 8 }}
                src={process.env.PUBLIC_URL + "/images/arrow-left.svg"}
                alt="arrow"
              />
              Back to log in
            </Link>
            </form>
        </div>
        <div className='login-footer'>
            <Footer />
        </div>
      </div>
        {/* right */}
      <div className='login-aside'>
        <AsideOverView />
      </div>
    </div>
  )
}

export default SetNewPassword
