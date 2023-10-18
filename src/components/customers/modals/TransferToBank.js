import React, { useState } from 'react'

function TransferToBank({transferBankInput,setTransferBankInput,setIsNigerBankTransfer,setIsTransferOption,setIsSelectBeneficiary,setIsBeneficiary,setIsBalanceOpen}) {
    const [page,setPage] = useState("")

    const handleCancel = ()=>{
        setIsNigerBankTransfer(false);
        setIsTransferOption(false);
        setIsBalanceOpen(false)
    }
     const  handleInputChange = (event)=>{
        const { name, value } = event.target;
        setTransferBankInput((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
    }
    const handleConfirm =(e)=>{
        e.preventDefault()
        setIsBeneficiary(true)
    }
  return (
    <div className="overlay">
        <div className="enter-amount-modal">
        <div className="modal-wrapper">

            <div>
            <img style={{cursor:"pointer"}} onClick={setIsNigerBankTransfer.bind(this,false)} src={process.env.PUBLIC_URL + "/images/backArrowBalanceModal.svg"} alt="icon" />
            </div>
            
            <div className="modal-title">
                <p className="enter-amount">Transfer to Bank Account</p>
                
                <p className="enter-an-amount">Here is an overview of your transaction</p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="api_wallet_input">
                    {/*  */}

                    <div className='input_banks_container'>
                        <div 
                        // onClick={() => changeActive("card_num")}
                        className={`input_group ${page==="card_num" ? 'clicked' : ''}`} 
                        >
                        {/* <input 
                        placeholder='5061 2345 6789 1234' 
                        type='number' 
                        name="card_number" 
                        className='input_cardNumber' 
                        onChange={handleInputChange} 
                        
                        /> */}
                         <select 
                            className='balance_select' 
                            name='currency'
                            value={transferBankInput.currency} 
                            onChange={handleInputChange}>
                                <option value="USD">USD 20,9684.00</option>
                                <option value="NGN"> NGN 20,9684.00</option>
                                
                        </select>
                        </div>
                        <p className='card_label'>Choose balance to transfer from</p>
                    </div>

                    {/*  */}
                  
                    {/* <div className='api_current_rate' style={{marginBottom:"16px"}}>
                        <div className='api_current_rate_left'>
                            <img src="/images/currentRate.svg" alt='rate' />
                            <p className='current_rate_text'>CURRENT RATE</p>
                        </div>
                        <div className='api_current_rate_right'>
                            <span>$1</span>
                            <span> = </span>
                            <span>N998.51</span>
                        </div>
                    </div> */}
                    
                    <div className='api_select_container' style={{marginTop:"16px"}}>
                        <div className='api_wallet_select_input'>
                            <img src="/images/NGN.svg" alt="ng"/>    
                            <select 
                            className='api_select_val' 
                            name='currency'
                            value={transferBankInput.currency} 
                            onChange={handleInputChange}>
                                <option value="USD">USD</option>
                                <option value="NGN">NGN</option>
                                <option value="KES">KES</option>
                            </select>
                        </div>
                        <input  name='amount' className='api_input_amountss'  placeholder="5.00" onChange={handleInputChange}/>
                    </div> 
                    <p className='select_exist'>Or select existing beneficiary</p>       
                    <input className='portfolio_amount_input' placeholder='Account number' name='acc_num' onChange={handleInputChange} style={{marginTop:"16px"}}/>
                    <input className='portfolio_amount_input' placeholder='Description (optional)' name='desc' onChange={handleInputChange} style={{marginTop:"16px"}}/>
                </div>
                <div className="modal-btn">
                    <button onClick={handleCancel} className="btn">
                        Cancel
                    </button>
                    <button  className="btn" onClick={handleConfirm}>
                    Confirm transfer
                    </button>

                 </div>
            </form>
            </div>
        </div>
    </div>
  )
}

export default TransferToBank
