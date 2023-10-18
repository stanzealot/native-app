import React from 'react'

function ApiWalletConfirm({setIsPayout,setIsPaymentMethod,setIsApiWalletConfirm,setIsAmount,setIsSuccess}) {
  const handleCancel = (e)=>{
    setIsApiWalletConfirm(false)
    setIsPayout(false)
    setIsPaymentMethod(false)
    setIsAmount(false)

  }
  const  handleInputChange = (event)=>{
    
  }
  const handleBox =(e)=>{
    e.stopPropagation();
    setIsApiWalletConfirm(false)
  }
  return (
    <div className="overlay">
        <div className="enter-amount-modal" onClick={handleBox}>
        <div className="modal-wrapper">

            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <img src='/images/warningSign.svg' alt='warningSig'/>
                 <img style={{cursor:"pointer"}} onClick={setIsApiWalletConfirm.bind(this,false)} src={process.env.PUBLIC_URL + "/images/x-close.svg"} alt="icon" />
            </div>
            
            <div className="modal-title">
            <p className="enter-amount">Confirm Funding</p>
            
            <p className="enter-an-amount">You are about to fund <span style={{color:"#151F32",fontWeight:"700"}}>N8,000 (USD 5.00)</span> to your <span style={{color:"#151F32",fontWeight:"700"}}>API Wallet</span></p>
            <p className="enter-an-amount" style={{marginTop:"20px"}}>Enter confirmation  code sent to <span style={{color:"#151F32",fontWeight:"500"}}>ayomide@getflick.app</span></p>
            </div>
            <input  name='amount' className='api_input_amounts'  placeholder="Enter code" onChange={handleInputChange}/>
            <p className="enter-an-amount" style={{textAlign:"center",marginTop:"16px"}}>Didn’t get a code? <span className='api_resend'>Resend</span> <img src="/images/resend.svg" alt='resend' style={{display:"inline"}}/></p>
            <div className="modal-btn">
            <button onClick={handleCancel} className="btn">
                Cancel
            </button>
            <button onClick={setIsSuccess.bind(this,true)} className="btn">
                Confirm
            </button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ApiWalletConfirm
