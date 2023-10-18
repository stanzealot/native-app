import React from "react";
import './Modal.scss'

function TransactionSuccessful({setIsTransactionSuccess}) {
//   if (!open) return null;

  return (
    <div className="overlay" >
    <div className="enter-amount-modal">
      <div className="modal-wrapper">

        <div>
        <img src={process.env.PUBLIC_URL + "/images/iconSuccess.svg"} alt="icon" />
        </div>
        
        <div className="modal-title">
          <p className="enter-amount">Transaction Successful</p>
          
          <p className="enter-an-amount">Your transaction has been initiated, check your balance</p>
        </div>

        <div className="transact-amount">
          <p className="t-amount">Transaction amount</p>
          <p className="amount">N4,000.00</p>
        </div>

        <div className="account-details">
            <div className="number-name">
                <div className="number">
                    <p className="title">Recipient</p>
                    <p className="sub-title">Mide Ajibade</p>
                </div>

                <div className="transact-name">
                    <p className="title">Recipient bank</p>
                    <p className="sub-title">GTBank - 0224048917</p>
                </div>
            </div>

            <div className="number-name">
                <div className="number">
                    <p className="title">Charges</p>
                    <p className="sub-title">0.00</p>
                </div>

                <div className="transact-name">
                    <p className="title">Reference</p>
                    <p className="sub-title">hrtg3s8...fge3 <img src={process.env.PUBLIC_URL + "/images/modal-copy-icon.svg"} alt="icon" /></p>
                </div>
            </div>

        </div>

        <div className="modal-btn">
          <button onClick={setIsTransactionSuccess.bind(this,false)} className="first-btn">
            Cancel
          </button>
          <button className="btn" onClick={setIsTransactionSuccess.bind(this,true)}>
            Download Receipt
          </button>
        </div>
        </div>
    </div>
    </div>
  );
}

export default TransactionSuccessful;
