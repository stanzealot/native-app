import React, { useState } from "react";
import "./Modal.scss";


function SelectPayment({setIsCardMethod,setIsPaymentMethod,setIsAmount,setIsOtp, setIsCardDetails}) {
  const [selectedOption, setSelectedOption] = useState('');
  
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleCancel = ()=>{
    setIsCardMethod(false)
    setIsPaymentMethod(false)
    setIsAmount(false)
  }

  return (
    <div className="overlay">
      <div className="enter-amount-modal">
        <div className="modal-wrapper">
          <div>
          <img
              src={process.env.PUBLIC_URL + "/images/backArrowBalanceModal.svg"}
              alt="icon"
              style={{cursor:"pointer"}}
              onClick={setIsCardMethod.bind(this,false)}
            />
          </div>

          <div className="modal-title">
            <p className="enter-amount">Select Payment Method</p>

            <p className="enter-an-amount">
              Please choose the desired payment card for your transaction.
            </p>
          </div>

          <div className={`master-option ${selectedOption === 'visa' ? 'selected' : ''}`} onClick={() => setSelectedOption('visa')}>
            <div className="icon-option">
              <img
                src={process.env.PUBLIC_URL + "/images/visa-card.svg"}
                alt="icon"
              />
              <div className="master-text">
                <p className="master-payment">Visa ending in 1234</p>
                <p className="master-expiry">Expiry 06/2024</p>
                <p className="set-default-two">
                  Set as default{" "}
                  <span  className="edit">
                    Edit
                  </span>
                </p>
              </div>
            </div>
            <input 
                type="radio" 
                name="options"
                value="visa"
                checked={selectedOption === 'visa'}
                onChange={handleOptionChange}
                />
          </div>

          <div className={`master-option ${selectedOption === 'master' ? 'selected' : ''}`} onClick={() => setSelectedOption('master')}>
            <div className="icon-option">
              <img
                src={process.env.PUBLIC_URL + "/images/masterCard.svg"}
                alt="icon"
              />
              <div className="master-text">
                <p className="master-payment">Mastercard ending in 1234</p>
                <p className="master-expiry">Expiry 06/2024</p>
                <p className="set-default-two">
                  Set as default{" "}
                  <span  className="edit">
                    Edit
                  </span>
                </p>
              </div>
            </div>
            <input 
            type="radio" 
            name="options"
            value="master"
            checked={selectedOption === 'master'}
            onChange={handleOptionChange}
            />
          </div>

          <div className="add-payment" style={{cursor:"pointer"}}>
            <img
              src={process.env.PUBLIC_URL + "/images/modal-plus.svg"}
              alt="icon"
            />
            <p className="add-text" onClick={setIsCardDetails.bind(this,true)}>Add new payment card</p>
          </div>

          <div className="modal-btn">
            <button  onClick={handleCancel} className="first-btn">
              Cancel
            </button>
            <button  onClick={selectedOption === 'visa' ? setIsOtp.bind(this,true):selectedOption === 'master'? setIsOtp.bind(this,true):"" } className="btn">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectPayment;
