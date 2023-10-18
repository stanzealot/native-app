import React, { useState } from "react";
import { BeatLoader } from "react-spinners";
import "./connectAccount.scss";

function ConnectAccounts() {

  const [isLoading, setIsLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="connect-account-overlay">
      <div className="connect-account-main">
        <div className="connect-account-box">
          <div className="choose-bank">
            <img
              src={process.env.PUBLIC_URL + "/images/arrowBack.svg"}
              alt="back"
              style={{ width: "16px", height: "16px" }}
            />
            <p className="choose-your-bank">Choose your bank</p>
            <img
              src={process.env.PUBLIC_URL + "/images/close.svg"}
              alt="close"
              style={{ marginBottom: "27px" }}
            />
          </div>
          <div style={{ padding: "0px 21px 21px 21px" }}>
            <div className="connect-accounts-image">
              <div className="connect-accounts">
                <p className="connect-one">Connect one or more accounts</p>
                <p className="account-name">Account name: <span style={{ color: "#151F32" }}>AJIBADE AYOMIDE DAVID</span>
                </p>
              </div>
              <img
                src={process.env.PUBLIC_URL + "/images/gt-bank.svg"}
                alt="logo"
                style={{ width: "34px", height: "35.4px" }}
              />
            </div>
            <div className="account-type-container">
                <div className="account-type" onClick={() => setSelectedOption('savings')}>
                    <div className="account-type-text">
                        <p className="type-of-account">Savings Account</p>
                        <p className="account-number">0224048917</p>
                    </div>
                    <input
                        type="radio"
                        name="options"
                        value="savings"
                        checked={selectedOption === "savings"}
                        onChange={handleOptionChange}
                    />
                </div>

                <div className="account-type" onClick={() => setSelectedOption('current')}>
                    <div className="account-type-text">
                        <p className="type-of-account">Current Account</p>
                        <p className="account-number">0224048917</p>
                    </div>
                    <input
                        type="radio"
                        name="options"
                        value="current"
                        checked={selectedOption === "current"}
                        onChange={handleOptionChange}
                    />
                </div>
                
                <div className="account-type" onClick={() => setSelectedOption('debitCard')}>
                    <div className="account-type-text">
                        <p className="type-of-account">Current Account</p>
                        <p className="account-number">0224048917</p>
                    </div>
                    <input
                        type="radio"
                        name="options"
                        value="debitCard"
                        checked={selectedOption === "debitCard"}
                        onChange={handleOptionChange}
                    />
                </div>
            </div>
            
            <button className="btn" style={{ background: "#2EBDB6" }}>
              {isLoading ? (
                <BeatLoader color="#FFF" cssOverride={{}} />
              ) : (
                <>
                  Continue
                  <img
                    src={process.env.PUBLIC_URL + "/images/arrow-forward.svg"}
                    alt="arrow btn"
                    style={{ display: "inline", marginLeft: "5px" }}
                  />
                </>
              )}
            </button>
            <div className="secured-flick">
              <img
                src={process.env.PUBLIC_URL + "/images/secured-by-flick.svg"}
                alt="flick"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConnectAccounts;
