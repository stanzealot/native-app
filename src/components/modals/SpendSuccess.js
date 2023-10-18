import React from 'react'

function SpendSuccess({setIsSuccess,setIsDailyLimit,setIsSpend}) {
    const handleConfirm = ()=>{
        setIsSuccess(false);
        setIsDailyLimit(false);
        setIsSpend(false);
    }
  return (
    <div onClick={(e) => {
        e.stopPropagation();
        setIsSuccess.bind(this,false);
      }} className="overlay" >
   
        <div className='modal-container spend_success' >
        <img src='/images/customers/successIcon.svg' alt='success' width={"48px"} height={"48px"} style={{marginTop:"30px"}}/>
        <h4 className='success_h'>Successful</h4>
        <p className='spend_desc'>Albert Tech’s daily spend limit amount has been set to N15,000,000</p>
        <button className='btn' onClick={handleConfirm}  style={{width:"73%"}}>
        Confirm
        </button>
        </div>
   
</div>
  )
}

export default SpendSuccess
