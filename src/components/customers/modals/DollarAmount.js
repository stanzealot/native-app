import React from 'react'

function DollarAmount({setIsDollarAmount,setIsBalanceOpen,setIsDollarVirtual}) {
    const handleClose = ()=>{
        setIsDollarAmount(false);
        setIsBalanceOpen(false);
    }
  return (
    <div className="overlay">
    <div className="enter-amount-modal">
      <div className="modal-wrapper">

        <div>
        <img style={{cursor:"pointer"}} onClick={handleClose} src={process.env.PUBLIC_URL + "/images/backArrowBalanceModal.svg"} alt="icon" />
        </div>
        
        <div className="modal-title">
          <p className="enter-amount">Enter amount</p>
          
          <p className="enter-an-amount">Enter an amount to be funded into your account</p>
        </div>

      <div className="input-amount">
        <img src={process.env.PUBLIC_URL + "/images/customers/amount.svg"} alt="amount" />
        <input
          type="text"
          name="amount"
          placeholder="2,000.00"
          className="amount-input"
        />
      </div>

        <div className="modal-btn">
          <button onClick={setIsDollarAmount.bind(this,false)} className="btn">
            Cancel
          </button>
          <button onClick={setIsDollarVirtual.bind(this,true)} className="btn">
            Confirm
          </button>
        </div>
        </div>
    </div>
    </div>
  )
}

export default DollarAmount
