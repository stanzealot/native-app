import React from 'react'

function DollarVirtual({setIsDollarVirtual,setIsDollarAmount,setIsBalanceOpen,setIsDollarSuccess}) {
    const handleCancle =()=>{
        setIsDollarVirtual(false)
        setIsDollarAmount(false)
        setIsBalanceOpen(false)
    }
  return (
    <div className="overlay" onClick={setIsDollarVirtual.bind(this,false)}>
    <div className="enter-amount-modal" onClick={(e)=>e.stopPropagation()}>
      <div className="modal-wrapper">

        <div> 
        <img style={{cursor:"pointer"}} onClick={setIsDollarVirtual.bind(this,false)} src={process.env.PUBLIC_URL + "/images/backArrowBalanceModal.svg"} alt="icon" />
        </div>
        
        <div className="modal-title">
          <p className="enter-amount">Fund via Virtual Account</p>
          
          <p className="enter-an-amount">Domestic Transfer Details (US to US)</p>
        </div>

        <div className="account-details">
            <div className="number-name">
                <div className="number">
                    <p className="title">Account number</p>
                    <p className="sub-title">0224048917 <img src={process.env.PUBLIC_URL + "/images/modal-copy-icon.svg"} alt="icon" /></p>
                </div>

                <div className="name">
                    <p className="title">Routing Number</p>
                    <p className="sub-title">091311229 <img src={process.env.PUBLIC_URL + "/images/modal-copy-icon.svg"} alt="icon" /></p>
                </div>
            </div>

            <div className="number-name">
                <div className="number">
                    <p className="title">Bank name</p>
                    <p className="sub-title">Choice Financial Group  <img src={process.env.PUBLIC_URL + "/images/modal-copy-icon.svg"} alt="icon" /></p>
                </div>

                <div className="name">
                    <p className="title">Account type</p>
                    <p className="sub-title">Checking <img src={process.env.PUBLIC_URL + "/images/modal-copy-icon.svg"} alt="icon" /></p>
                </div>
            </div>


            {/*  */}
            <div className="number-name">
                <div className="number">
                    <p className="title">Bank address</p>
                    <p className="sub-title">4501 23rd Avenue S,<br/> Fargo, ND 58104</p>
                </div>

                <div className="name">
                    <p className="title">Beneficiary address</p>
                    <p className="sub-title">
                    2261 Market Street, #4664<br/> San Francisco, CA 94114
                    </p>
                </div>
            </div>



            <div className="number-name">
                <div className="number">
                    <p className="title">Narration</p>
                    <p className="sub-title">Flick - Tx</p>
                </div>

              
            </div>
            
                
            

        </div>

        <div className="modal-btn" style={{alignItems:"center"}}>
          <button onClick={handleCancle} className="first-btn" style={{width:"47%",padding:"14px"}}>
          Wire Details
          </button>
          <button onClick={setIsDollarSuccess.bind(this,true)} className="btn" style={{width:"48%",padding:"14px"}}>
            I've made payment
          </button> 
          
        </div>
        </div>
    </div>
    </div>
  )
}

export default DollarVirtual
