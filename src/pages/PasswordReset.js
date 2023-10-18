import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import AsideView from "../components/login/AsideView";
import "../components/signup/SignUp.scss";

function PasswordReset() {
  const [isLoading, setIsLoading] = useState(false);
 

  return (
    <div className="dashboard-container">
      <div className="aside-container">
        <AsideView />
      </div>
      <div className="dashboard-main">
        <div className="sign-up-wrapper" style={{padding:"58px"}}>
          <form className="password-reset">
            <div className="reset-pass">
              <img src={process.env.PUBLIC_URL + "/images/handshake.svg"} alt="hand"/>
              <p className="reset-title">Password Reset</p>
              <p className="reset-success">Your password has been successfully reset. Click below to log in magically.</p>
            </div>
            
            <button className="btn" style={{background:"#2EBDB6"}}>
              {isLoading ? (
                <FadeLoader color="#F7F8FA" height={10} width={10} />
              ) : (
                <>
                  Log In
                  <img src={process.env.PUBLIC_URL + "/images/arrow-forward.svg"} alt="arrow btn" style={{ display: "inline", marginLeft: "5px" }}/>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PasswordReset;
