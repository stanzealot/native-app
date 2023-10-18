import React, { useState, useRef } from "react";
import "./Modal.scss";

function TransactionOtp({ setIsOtp, setIsTransactionSuccess,setIsSuccess,setIsCardMethod,setIsPaymentMethod,setIsAmount }) {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const handleClose = ()=>{
    setIsOtp(false);
    setIsCardMethod(false);
    setIsPaymentMethod(false);
    setIsAmount(false)
  }
  const handleInputChange = (index, value) => {
    if (value.match(/^[0-9]$/)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < 3) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleBackspace = (index, event) => {
    if (event.key === "Backspace" && index >= 0) {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
  
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };


  return (
    <div className="overlay">
      <div className="enter-amount-modal">
        <div className="modal-wrapper">
          <div className="otp-icon">
            <img
              src={process.env.PUBLIC_URL + "/images/backArrowBalanceModal.svg"}
              alt="icon"
              onClick={() => setIsOtp(false)}
            />
            <img
              onClick={() => setIsOtp(false)}
              src={process.env.PUBLIC_URL + "/images/x-close.svg"}
              alt="icon"
            />
          </div>

          <div className="modal-title">
            <p className="enter-amount">Enter Transaction OTP</p>

            <p className="enter-an-amount">
              A code has been sent to a number ending with{" "}
              <span style={{ color: "#2EBDB6" }}>6767</span>
            </p>
          </div>

          <div className="input-otp">
            <div className="input-field">
              {otp.map((value, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  className="otp"
                  value={value}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  onKeyDown={(e) => handleBackspace(index, e)}
                  ref={(ref) => (inputRefs.current[index] = ref)}
                />
              ))}
            </div>
            <p className="code">
              Didn't get a code?{" "}
              <span className="click">
                Click to resend.
              </span>
            </p>
          </div>

          <div className="modal-btn">
            <button
              onClick={handleClose}
              className="first-btn"
            >
              Back
            </button>
            <button
              onClick={setIsSuccess.bind(this,true)}
              className="btn"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransactionOtp;
