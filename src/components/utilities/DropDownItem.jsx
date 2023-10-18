import React from 'react'
import './dropDownStyle.scss'
import paymentOptionData from './paymentOptionData.json'
function DropDownItem({ handleBankSelection, selectedBank }) {
  const allPaymentOptions = paymentOptionData;
    return (
      <div className="bank-list">
        <div className="modal-container">
          <div className="scrollable-list">
            {allPaymentOptions.map((bank) => (
              <div
                key={bank.id}
                className={`icon-bank ${bank.name === selectedBank ? "selected" : ""}`}
                onClick={() => handleBankSelection(bank.name)}
              >
                <div className="bank-name-icon">
                  <div style={{display:"flex",gap:"10px"}}>
                      <h2 className="bank-name">{bank.name}</h2>
                  </div>
                  {bank.name === selectedBank && (
                    <img
                      src={process.env.PUBLIC_URL + "./images/bank-check.svg"}
                      alt="check"
                    />
                  )}
                </div>
               
              </div>
            ))}
          </div>
        </div>
        {/* ... */}
      </div>
    )
}

export default DropDownItem
