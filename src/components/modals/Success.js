import React from "react";
import './Modal.scss'

function Success({
  setIsSuccess,
  setIsAmount,
  setIsPaymentMethod,
  setIsPayout,
  setIsApiWalletConfirm,
  setIsCardMethod,
  setIsCardDetails,
  setIsOtp,
  setIsVertual
}) {
//   if (!open) return null;
  const handleConfirm = ()=>{
  setIsSuccess(false)
  setIsAmount(false)
  setIsPaymentMethod(false)
  setIsPayout(false)
  setIsApiWalletConfirm(false)
  setIsCardMethod(false)
  setIsCardDetails(false)
  setIsOtp(false)
  setIsVertual(false)
  }
  return (
    <div className="overlay" onClick={setIsSuccess.bind(this,false)} >
    <div className="success-modal">
      <div className="success-wrapper">

        <div>
        <img src={process.env.PUBLIC_URL + "/images/iconSuccess.svg"} alt="icon" />
        </div>

      <div className="success-ful">
        <p className="success">Successful</p>
        <p className="check-balance">Check your balance to confirm the transaction made </p>
      </div>

          <button onClick={handleConfirm} className="btn">
            Confirm
          </button>
        </div>
    </div>
    </div>
  );
}

export default Success;
