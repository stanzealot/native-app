import React from "react";
import './Modal.scss'

function SetLimit({ open, onClose,title,desc,setLimitInputValue,limitInputValue,confirmLimit,setIsModalOpen,setIsSuccessful }) {
  if (!open) return null;
  const handleChange = (e)=>{
    setLimitInputValue(e.target.value);
  }
  const handleConfirm =()=>{
    setIsSuccessful(true)
    // confirmLimit()
  }
  return (
    <div onClick={(e) => {
      e.stopPropagation();
      setIsModalOpen.bind(this,false);
    }} className="overlay" >
    <div className="modal-container">
      <div className="icon-title">
        <div className="icon-model-content">
          <img src={process.env.PUBLIC_URL + "/images/set-limit-icon.svg"} alt="icon" />
          <div className="modal-title">
            <p className="set-limit">{title}</p>
            <p className="limit-amount">{desc}</p>
          </div>
        </div>
        <img onClick={setIsModalOpen.bind(this,false)} src={process.env.PUBLIC_URL + "/images/modal-close-icon.svg"} alt="close" style={{cursor:"pointer"}} />
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

        <div className="modal-btn-container">
          <button onClick={setIsModalOpen.bind(this,false)} className="btn-light" style={{width:"fit-content"}}>
            Cancel
          </button>
          <button onClick={handleConfirm} className="btn" style={{width:"fit-content"}}>
            Confirm
          </button>
        </div>
    </div>
    </div>
  );
}

export default SetLimit;
