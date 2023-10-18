import React from 'react'

function PortfolioCompanyAmount({setIsTransferPortfolioAmount,setIsTransferPortfolio,setIsTransferOption,setIsBalanceOpen,setIsPortfolioInput,isPortfolioInput,setIsConfirmPortfolio,setIsBeneficiary,setIsNigerBankTransfer}) {
    const handleCancel = ()=> {
        setIsTransferPortfolioAmount(false);
        setIsBeneficiary(false)
        setIsNigerBankTransfer(false)
        setIsTransferPortfolio(false);
        setIsTransferOption(false);
        setIsBalanceOpen(false)

    }

    const  handleInputChange = (event)=>{
        const { name, value } = event.target;
        setIsPortfolioInput((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        setIsConfirmPortfolio(true)
    }
  return (
    <div className="overlay">
        <div className="enter-amount-modal">
        <div className="modal-wrapper">

            <div>
            <img style={{cursor:"pointer"}} onClick={setIsTransferPortfolioAmount.bind(this,false)} src={process.env.PUBLIC_URL + "/images/backArrowBalanceModal.svg"} alt="icon" />
            </div>
            
            <div className="modal-title">
            <p className="enter-amount">Transfer to Portfolio Company</p>
            
            <p className="enter-an-amount">Here is an overview of your transaction</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="api_wallet_input">
                    <input className='portfolio_amount_input' onChange={handleInputChange} name="amount2" type='text'  placeholder='amount'/>
                    <div className='api_current_rate' style={{marginBottom:"16px"}}>
                        <div className='api_current_rate_left'>
                            <img src="/images/currentRate.svg" alt='rate' />
                            <p className='current_rate_text'>CURRENT RATE</p>
                        </div>
                        <div className='api_current_rate_right'>
                            <span>$1</span>
                            <span> = </span>
                            <span>N998.51</span>
                        </div>
                    </div>
                    
                    <div className='api_select_container'>
                        <div className='api_wallet_select_input'>
                            <img src="/images/NGN.svg" alt="ng"/>    
                            <select 
                            className='api_select_val' 
                            name='currency'
                            value={isPortfolioInput.currency} 
                            onChange={handleInputChange}>
                                <option value="USD">USD</option>
                                <option value="NGN">NGN</option>
                                <option value="KES">KES</option>
                            </select>
                        </div>
                        <input  name='amount' className='api_input_amountss'  placeholder="5.00" onChange={handleInputChange}/>
                    </div>        
                    <input className='portfolio_amount_input' placeholder='Description (optional)' name='desc' onChange={handleInputChange} style={{marginTop:"16px"}}/>
                </div>
                <div className="modal-btn">
                    <button onClick={handleCancel} className="btn">
                        Cancel
                    </button>
                    <button  className="btn">
                        Confirm
                    </button>

                 </div>
            </form>
            </div>
        </div>
    </div>
  )
}

export default PortfolioCompanyAmount
