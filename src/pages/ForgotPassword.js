import React from "react";
import AsideOverView from "../components/login/AsideOverView";
import "../components/login/Login.scss";
import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";
function ForgotPassword() {

  return (
    <div className="login">
      {/* left side */}
      <div className="login-main">
        <div className="login-main-content">
          <div className="forgot-password">
            <img
              src={process.env.PUBLIC_URL + "/images/key-icon.svg"}
              alt="key"
            />
            <h1 className="forgot-password-title">Forgot Password?</h1>
            <p className="forgot-password-desc">
              No worries, we'll send you reset instructions.
            </p>
          </div>
          <form className="login-form">
            <div className="form-groups">
              <label className="lbl">Email</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your email"
                className="form-control"
              />
            </div>
            <button className="btn">Reset Password</button>
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

export default ForgotPassword;
