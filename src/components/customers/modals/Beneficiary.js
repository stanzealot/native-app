import React from 'react'

function Beneficiary({setIsSelectBeneficiary}) {
  return (
    <div className="overlay">
        <div className="enter-amount-modal">
        <div className="modal-wrapper">

            <div>
            <img style={{cursor:"pointer"}} onClick={setIsSelectBeneficiary.bind(this,false)} src={process.env.PUBLIC_URL + "/images/backArrowBalanceModal.svg"} alt="icon" />
            </div>
            
            <div className="modal-title">
                <p className="enter-amount">Select Beneficiaries </p>
                
                <p className="enter-an-amount">Here is an overview of the accounts you’ve already added as beneficiary</p>
            </div>

          
                <div className="api_wallet_input">
                    {/*  */}
                        <div className='bank_template'>
                            <img src='/images/customers/blankIcon.svg' alt='icon' />
                            <p className='ben_title'>No Beneficiaries  Yet</p>
                            <p className='ben_desc'> it is necessary to perform transactions on your Flick account beforehand.</p>
                        </div>
                </div>
                
            
            </div>
        </div>
    </div>
  )
}

export default Beneficiary
