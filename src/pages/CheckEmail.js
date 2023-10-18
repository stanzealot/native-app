import React from "react";
import AsideOverView from "../components/login/AsideOverView";
import "../components/login/Login.scss";
import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";
function CheckEmail() {

  return (
    <div className="login">
      {/* left side */}
      <div className="login-main">
        <div className="login-main-content">
          <div className="forgot-password">
            <img
              src={process.env.PUBLIC_URL + "/images/email-icon.svg"}
              alt="key"
            />
            <h1 className="forgot-password-title">Check your email</h1>
            <p className="forgot-password-desc">
            We sent a password reset link to <b style={{ color: "#151F32" }}>ayomide@getflick.com</b>
            </p>
          </div>
          <form className="login-form">

            <button className="btn">Open email app</button>
            <p className='login-noAccount' style={{ color: "#7F91B4" }} >
            Didn't receive the email?  
                 <Link className='login-noAccount-link'> Click to resend </Link>
                </p>

            <Link className="back-to-login">
              {" "}
              <img
                style={{ display: "inline", marginRight: 8 }}
                src={process.env.PUBLIC_URL + "/images/arrow-left.svg"}
                alt="arrow"
              />{" "}
              Back to log in{" "}
            </Link>
          </form>
        </div>
        <div className="login-footer">
          <Footer />
        </div>
      </div>
      {/* right */}
      <div className="login-aside">
        <AsideOverView />
      </div>
    </div>
  );
}

export default CheckEmail;
