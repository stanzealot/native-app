import React from 'react'

function BeneficiaryValue({setIsBeneficiary,setIsTransferPortfolioAmount}) {
  const handleNav =()=>{
    setIsTransferPortfolioAmount(true)
}
  return (
    <div className="overlay">
      <div className="enter-amount-modal">
        <div className="modal-wrapper">
          <div>
          <img onClick={setIsBeneficiary.bind(this,false)} style={{cursor:"pointer"}} src={process.env.PUBLIC_URL + "/images/backArrowBalanceModal.svg"} alt="icon" />
          </div>
          
          <div className="modal-title">
            <p className="enter-amount">Select Beneficiaries </p>
            <p className="enter-an-amount">Here is an overview of the accounts you’ve already added as beneficiary</p>
          </div>
          <div className="portfolio_options">
              <div className='portfolio_wrapper'>
                  <input type='search' className='bank_input_search' placeholder='Filter by name or account number'/>
                  {/*  */}

                  <div className='portfolio_items' onClick={handleNav}>
                      <div className='portfolio_item'>
                          <div className='portfolio_avater'>
                              <span>AA</span>
                          </div>
                          <div className='portfolio_content'>
                              <h3 className='portfolio_title'>ALBERT TECH</h3>
                              <p className='portfolio_desc'>Gigabyte Real Estate Ltd (Nairobi, Kenya)</p>
                          </div>
                      </div>
                      <img src='/images/customers/arrow.svg' alt='arrow' />
                  </div>
                  {/*  */}
                  <div className='portfolio_items' onClick={handleNav}>
                      <div className='portfolio_item'>
                          <div className='portfolio_avater'>
                              <span>AA</span>
                          </div>
                          <div className='portfolio_content'>
                              <h3 className='portfolio_title'>FLOW HR</h3>
                              <p className='portfolio_desc'>Corporate HR Inc. (Delaware, USA)</p>
                          </div>
                      </div>
                      <img src='/images/customers/arrow.svg' alt='arrow' />
                  </div>
                  {/*  */}
                  <div className='portfolio_items' onClick={handleNav}>
                      <div className='portfolio_item'>
                          <div className='portfolio_avater'>
                              <span>AA</span>
                          </div>
                          <div className='portfolio_content'>
                              <h3 className='portfolio_title'>GIG HOME</h3>
                              <p className='portfolio_desc'>Gigabyte Real Estate Ltd (Nairobi, Kenya)</p>
                          </div>
                      </div>
                      <img src='/images/customers/arrow.svg' alt='arrow' />
                  </div>
                  {/*  */}
                  <div className='portfolio_items' onClick={handleNav}>
                      <div className='portfolio_item'>
                          <div className='portfolio_avater'>
                              <span>AA</span>
                          </div>
                          <div className='portfolio_content'>
                              <h3 className='portfolio_title'>MILE APP</h3>
                              <p className='portfolio_desc'>Mile Logistics Limited, (Lagos, Nigeria)</p>
                          </div>
                      </div>
                      <img src='/images/customers/arrow.svg' alt='arrow' />
                  </div>
              </div>
          </div>

          </div>
      </div>
    </div>
  )
}

export default BeneficiaryValue
