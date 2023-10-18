import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import AsideView from "../components/login/AsideView";
import "../components/signup/SignUp.scss";

function ResetPassword() {
  const [isLoading, setIsLoading] = useState(false);
 

  return (
    <div className="dashboard-container">
      <div className="aside-container">
        <AsideView />
      </div>
      <div className="dashboard-main">
        <div className="sign-up-wrapper">
          <p className="sign-up-title">Reset password</p>
          <form className="sign-up-form">
            <div className="sign-up-inner">
              <input
                className="input-field"
                type="text"
                placeholder="Email Address"
                name="name"
              />
             
            </div>
            <button className="btn" style={{background:"#2EBDB6"}}>
              {isLoading ? (
                <FadeLoader color="#F7F8FA" height={10} width={10} />
              ) : (
                <>
                  Reset Password
                  <img src={process.env.PUBLIC_URL + "/images/arrow-forward.svg"} alt="arrow btn" style={{ display: "inline", marginLeft: "5px" }}/>
                </>
              )}
            </button>
            <p className="dont-have-account">
            Already have an account?  
              <Link to={"login"} className="signIn-link">Sign In
                <img style={{ display: "inline" }} src={process.env.PUBLIC_URL + "/images/coloredArrowForward.svg"} alt="colored"/>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
