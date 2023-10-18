import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import AsideView from "../components/login/AsideView";
import "../components/signup/SignUp.scss";

function SetNewPasswordPage() {
 
  const [isLoading, setIsLoading] = useState(false);
  
  return (
    <div className="dashboard-container">
      <div className="aside-container">
        <AsideView />
      </div>
      <div className="dashboard-main">
        <div className="sign-up-wrapper">
          <p className="sign-up-title">Set new password</p>
          <form className="sign-up-form">
            <div className="sign-up-inner">
              
              <input
                className="input-field"
                type="text"
                placeholder="Password"
                name="name"
              />
              <div className="input_container" style={{width:"100%"}}>
                <div className="input-group" style={{justifyContent:"space-between"}}>
                  <input type="text" placeholder="Enter Password (min. of 8 character)" name="card_number" className="input-name"/>
                  <img src="/images/eye.svg" alt="card" style={{width:"16px", height:"16px"}}/>
                </div>
                <p className="input-label">Password</p>
              </div>
            </div>
            <button className="btn" style={{background:"#2EBDB6"}}>
              {isLoading ? (
                <FadeLoader color="#F7F8FA" height={10} width={10} />
              ) : (
                <>
                  Join Flick
                  <img src={process.env.PUBLIC_URL + "/images/arrow-forward.svg"} alt="arrow btn" style={{ display: "inline", marginLeft: "5px" }}/>
                </>
              )}
            </button>
            <p className="dont-have-account">
            Don’t have an account? 
              <Link to={"/signUp"} className="signIn-link">Sign Up
                <img style={{ display: "inline" }} src={process.env.PUBLIC_URL + "/images/coloredArrowForward.svg"} alt="colored"/>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SetNewPasswordPage;
