import React from 'react'

function PortFolioConfirm({setIsConfirmPortfolio,setIsTransferPortfolioAmount,setIsTransferPortfolio,setIsTransferOption,setIsBalanceOpen,setIsPortfolioSuccess}) {
 const handleCancel = ()=>{
    setIsConfirmPortfolio(false);
    setIsTransferPortfolioAmount(false);
    setIsTransferPortfolio(false)
    setIsTransferOption(false);
    setIsBalanceOpen(false);
 }
 const  handleInputChange = (event)=>{
    
 }
 const handleBox =(e)=>{
   e.stopPropagation();
   setIsConfirmPortfolio(false)
 }
  return (
    <div className="overlay">
        <div className="enter-amount-modal" onClick={handleBox}>
        <div className="modal-wrapper">

            <div>
            <img style={{cursor:"pointer"}} onClick={setIsConfirmPortfolio.bind(this,false)} src={process.env.PUBLIC_URL + "/images/backArrowBalanceModal.svg"} alt="icon" />
            </div>
            
            <div className="modal-title">
            <p className="enter-amount">Confirm Transfer</p>
            
            <p className="enter-an-amount">You are about to transfer  <span style={{color:"#151F32",fontWeight:"700"}}>USD 10,000.00</span> to<span style={{color:"#151F32",fontWeight:"700"}}>
                FLOW HR
                </span>
            </p>
            </div>

            <div className="api_wallet_input">
                <p className="portfolio_enter_amount" >Enter the confirmation code sent to <span style={{color:"#151F32",fontWeight:"500"}}>ayomide@getflick.app</span> within 2 days </p>
                <input  name='amount' className='api_input_amounts'  placeholder="Enter code" onChange={handleInputChange}/>
                <p className="enter-an-amount" style={{textAlign:"center",marginTop:"16px"}}>Didn’t get a code? <span className='api_resend'>Resend</span> <img src="/images/resend.svg" alt='resend' style={{display:"inline"}}/></p>
                <div className="modal-btn">
                <button onClick={handleCancel} className="btn">
                    Cancel
                </button>
                <button onClick={setIsPortfolioSuccess.bind(this,true)} className="btn">
                    Confirm
                </button>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default PortFolioConfirm
