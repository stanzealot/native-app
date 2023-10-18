import React from "react";
import './Modal.scss'
function SpendLimits({setIsSpend,setIsDailyLimit}) {
  return (
    <div onClick={(e) => {
        e.stopPropagation();
        setIsSpend.bind(this,false);
      }} className="overlay" >
      <div className="modal-container">
        <div className="spend_close">
          <p className="spend_title">Spend Limits</p>
          <img onClick={setIsSpend.bind(this,false)} src={process.env.PUBLIC_URL + "/images/modal-close-icon.svg"} alt="close" style={{cursor:"pointer"}} />
        </div>
        <div className='spend_limit_options'>
            <div className="spend_limit_item" onClick={setIsDailyLimit.bind(this,true)}>
                <p className="spend_text">Daily Limit</p>
                <div className="spend_icon">
                    <img src="/images/customers/pencileEdit.svg" alt="edit"/>
                    <p className="spend_amount">N8,000,000</p>
                </div>
            </div>
            <div className="spend_limit_item" onClick={setIsDailyLimit.bind(this,true)}>
                <p className="spend_text">Weekly Limit</p>
                <div className="spend_icon">
                    <img src="/images/customers/pencileEdit.svg" alt="edit"/>
                    <p className="spend_amount">N8,000,000</p>
                </div>
            </div>
            <div className="spend_limit_item" onClick={setIsDailyLimit.bind(this,true)}>
                <p className="spend_text">Monthly Limit</p>
                <div className="spend_icon">
                    <img src="/images/customers/pencileEdit.svg" alt="edit"/>
                    <p className="spend_amount">N8,000,000</p>
                </div>
            </div>
        </div>
      </div>
      </div>
  )
}

export default SpendLimits
