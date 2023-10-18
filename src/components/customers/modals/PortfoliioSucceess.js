import React from 'react'

function PortfoliioSucceess({setIsPortfolioSuccess,setIsConfirmPortfolio,setIsTransferPortfolioAmount,setIsTransferPortfolio,setIsTransferOption,setIsBalanceOpen}) {
    const handleCancel = ()=>{
        setIsPortfolioSuccess(false)
        setIsConfirmPortfolio(false)
        setIsTransferPortfolioAmount(false)
        setIsTransferPortfolio(false)
        setIsTransferOption(false);
        setIsBalanceOpen(false)
    }
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
                    <p className="sub-title">Flow HR</p>
                </div>

                <div className="transact-name">
                    <p className="title">Reference</p>
                    <div className='copy_input_container'>
                        <input className='input_copy' type='text' value="hrtg3s8...fge3"/>
                        <img src={process.env.PUBLIC_URL + "/images/modal-copy-icon.svg"} alt="icon" />
                    </div>
                </div>
            </div>

            <div className="number-name">
                <div className="number">
                    <p className="title">Charges</p>
                    <p className="sub-title">0.00</p>
                </div>

                <div className="transact-name">
                    <p className="title">Naira value</p>
                    <p className="sub-title">NGN 9,980,000.00 </p>
                </div>
            </div>

        </div>

        <div className="modal-btn">
          <button onClick={handleCancel} className="first-btn">
            Cancel
          </button>
          <button className="btn" >
            Download Receipt
          </button>
        </div>
        </div>
    </div>
    </div>
  )
}

export default PortfoliioSucceess
