import React from 'react'

function DailyLimit({setIsDailyLimit,setLimitInputValue,limitInputValue,setIsSuccess,setIsSpend}) {
   
  const handleChange = (e)=>{
    setLimitInputValue(e.target.value);
  }
  const handleConfirm =()=>{
    // confirmLimit()
    setIsSuccess(true)
  }
  const handleCancel = ()=>{
    setIsDailyLimit(false);
    setIsSpend(false);
  }
  return (
    <div onClick={(e) => {
        e.stopPropagation();
        setIsDailyLimit.bind(this,false);
      }} className="overlay" >
      <div className="modal-container">
        <div className="icon-title">
          <div className="icon-model-content">
            <img src={process.env.PUBLIC_URL + "/images/set-limit-icon.svg"} alt="icon" />
            <div className="modal-title">
              <p className="set-limit">Set Daily limit</p>
              <p className="limit-amount">Enter maximum amount Albert Tech can withdraw per day</p>
            </div>
          </div>
          <img onClick={setIsDailyLimit.bind(this,false)} src={process.env.PUBLIC_URL + "/images/modal-close-icon.svg"} alt="close" style={{cursor:"pointer"}} />
        </div>
  
        <div className="input-amount">
          <img src={process.env.PUBLIC_URL + "/images/amount.svg"} alt="amount" />
          <input
            type="number"
            name="amount"
            value={limitInputValue}
            placeholder="2,000.00"
            className="amount-input"
            onChange={handleChange}
          />
        </div>

        <div style={{display:"flex",gap:"8px"}}>
            <img src='/images/customers/info-circle.svg' alt="circle"/>
            <h5 className='daily_warning'>Note: Maximum available daily limit is N25m</h5>
        </div>
  
          <div className="modal-btn-container">
            <button onClick={handleCancel} className="btn" style={{width:"fit-content"}}>
              Cancel
            </button>
            <button onClick={handleConfirm} className="btn" style={{width:"fit-content"}}>
              Confirm
            </button>
          </div>
      </div>
    </div>
  )
}

export default DailyLimit
