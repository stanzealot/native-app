import React from "react";
import './Modal.scss'

function VirtualAccount({setIsVertual,setIsSuccess,setIsAmount,setIsPaymentMethod}) {
//   if (!open) return null;
  const handleCancle =()=>{
    setIsVertual(false)
    setIsPaymentMethod(false)
    setIsAmount(false);
  }
  return (
    <div className="overlay" onClick={setIsVertual.bind(this,false)}>
    <div className="enter-amount-modal" onClick={(e)=>e.stopPropagation()}>
      <div className="modal-wrapper">

        <div> 
        <img style={{cursor:"pointer"}} onClick={setIsVertual.bind(this,false)} src={process.env.PUBLIC_URL + "/images/backArrowBalanceModal.svg"} alt="icon" />
        </div>
        
        <div className="modal-title">
          <p className="enter-amount">Fund via Virtual Account</p>
          
          <p className="enter-an-amount">Bank transfer using the provided information below.</p>
        </div>

        <div className="account-details">
            <div className="number-name">
                <div className="number">
                    <p className="title">Account number</p>
                    <p className="sub-title">0224048917 <img src={process.env.PUBLIC_URL + "/images/modal-copy-icon.svg"} alt="icon" /></p>
                </div>

                <div className="name">
                    <p className="title">Account name</p>
                    <p className="sub-title">Flick <img src={process.env.PUBLIC_URL + "/images/modal-copy-icon.svg"} alt="icon" /></p>
                </div>
            </div>

            <div className="number-name">
                <div className="number">
                    <p className="title">Bank name</p>
                    <p className="sub-title">Wema Bank <img src={process.env.PUBLIC_URL + "/images/modal-copy-icon.svg"} alt="icon" /></p>
                </div>

                <div className="name">
                    <p className="title">Account type</p>
                    <p className="sub-title">Current <img src={process.env.PUBLIC_URL + "/images/modal-copy-icon.svg"} alt="icon" /></p>
                </div>
            </div>

        </div>

        <div className="modal-btn">
          <button onClick={handleCancle} className="first-btn">
           Cancel
          </button>
          <button onClick={setIsSuccess.bind(this,true)} className="btn">
            I've made payment
          </button> 
          
        </div>
        </div>
    </div>
    </div>
  );
}

export default VirtualAccount;
