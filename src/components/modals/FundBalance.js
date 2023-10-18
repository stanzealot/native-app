import React, { useState } from "react";
import './Modal.scss'

function FundBalance({setIsAmount,setIsPaymentMethod,setIsVertual,setIsCardMethod,setIsPayout}) {
//   if (!open) return null;
  const [selectedOption, setSelectedOption] = useState('');
  
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleCancel =()=>{
    setIsPaymentMethod(false)
    setIsAmount(false)
  }
  
  return (
    <div className="overlay">
    <div className="enter-amount-modal">
      <div className="modal-wrapper">

        <div>
        <img onClick={setIsPaymentMethod.bind(this,false)} style={{cursor:"pointer"}} src={process.env.PUBLIC_URL + "/images/backArrowBalanceModal.svg"} alt="icon" />
        </div>
        
        <div className="modal-title">
          <p className="enter-amount">Fund API Wallet</p>
          
          <p className="enter-an-amount">Select your payment method</p>
        </div>
        <div className="fund-options">
          <div className={`card-option ${selectedOption === 'payout' ? 'selected' : ''}`} onClick={() => setSelectedOption('payout')}>
              <div className="icon-bank">
              <img src={process.env.PUBLIC_URL + "/images/balanceTransfer.svg"} alt="icon" />
              <div className="transfer-text">
                  <p className="card-payment">Payout Balance</p>
                  <p className="card-top-up">Fund your wallet from your payout balance of N34,560</p>
              </div>
              </div>
              <input 
              type="radio" 
              name="options"
              value="payout"
              checked={selectedOption === 'payout'}
              onChange={handleOptionChange}
              />
          </div>
          <div className={`card-option ${selectedOption === 'card' ? 'selected' : ''}`} onClick={() => setSelectedOption('card')}>
              <div className="icon-bank">
              <img src={process.env.PUBLIC_URL + "/images/balanceTransfer.svg"} alt="icon" />
              <div className="transfer-text">
                  <p className="card-payment">Card Payment</p>
                  <p className="card-top-up">Top up your balance via your card.</p>
              </div>
              </div>
              <input 
              type="radio" 
              name="options"
              value="card"
              checked={selectedOption === 'card'}
              onChange={handleOptionChange}
              />
          </div>
          <div className={`card-option ${selectedOption === 'bank' ? 'selected' : ''}`} onClick={() => setSelectedOption('bank')}>
              <div className="icon-bank">
              <img src={process.env.PUBLIC_URL + "/images/balanceTransfer.svg"} alt="icon" />
              <div className="transfer-text">
                  <p className="card-payment">Bank Transfer</p>
                  <p className="card-top-up">Top up your balance via generated virtual account.</p>
              </div>
              </div>
              

                  <input 
                  type="radio" 
                  name="options"
                  value="bank"
                  checked={selectedOption === 'bank'}
                  onChange={handleOptionChange}
                  />
          </div>

        
        
        </div>


        <div className="modal-btn">
          <button onClick={handleCancel} className="first-btn">
            Cancel
          </button>
          <button onClick={selectedOption === 'bank' ? setIsVertual.bind(this,true):selectedOption === 'card'? setIsCardMethod.bind(this,true):selectedOption === 'payout'?setIsPayout.bind(this,true):"" } className="btn">
            Confirm
          </button>
          
        </div>
        </div>
    </div>
    </div>
  );
}

export default FundBalance;
