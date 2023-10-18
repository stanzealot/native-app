import React from 'react'

function ApiWallet({setIsPayout,setIsPaymentMethod,setIsPayoutInput,isPayoutInput,setIsApiWalletConfirm,setIsAmount}) {
  const handleCancel = (e)=>{
    setIsPayout(false)
    setIsPaymentMethod(false)
    setIsAmount(false)

  }
  const  handleInputChange = (event)=>{
    const { name, value } = event.target;
    setIsPayoutInput((prevFormData) => ({
      ...isPayoutInput,
      [name]: value,
    }));
  }
  return (
    <div className="overlay">
        <div className="enter-amount-modal">
        <div className="modal-wrapper">

            <div>
            <img style={{cursor:"pointer"}} onClick={setIsPayout.bind(this,false)} src={process.env.PUBLIC_URL + "/images/backArrowBalanceModal.svg"} alt="icon" />
            </div>
            
            <div className="modal-title">
            <p className="enter-amount">Fund Wallet via Payout Balance</p>
            
            <p className="enter-an-amount">Here is an overview of your transaction</p>
            </div>

            <div className="api_wallet_input">
                <div className='api_select_container'>
                    <div className='api_wallet_select_input'>
                        <img src="/images/NGN.svg" alt="ng"/>    
                        <select 
                        className='api_select_val' 
                        name='currency'
                        value={isPayoutInput.currency} 
                        onChange={handleInputChange}>
                            <option value="USD">USD</option>
                            <option value="NGN">NGN</option>
                            <option value="KES">KES</option>
                        </select>
                    </div>
                    <input  name='amount' className='api_input_amountss'  placeholder="5.00" onChange={handleInputChange}/>
                </div>
                <div className='api_current_rate'>
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
            </div>

            <div className="modal-btn">
            <button onClick={handleCancel} className="btn">
                Cancel
            </button>
            <button onClick={setIsApiWalletConfirm.bind(this,true)} className="btn">
                Confirm
            </button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ApiWallet
