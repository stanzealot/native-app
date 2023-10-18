import React, { useState } from 'react'

function CurrencyModal({setIsOpenPopup,newCurrency,setNewCurrency,AddCurrency}) {
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setNewCurrency({
        ...newCurrency,
        [name]: value,
      });
    };
    const handleSelectChange = (e) => {
      const { name, value } = e.target;
      setNewCurrency({
        ...newCurrency,
        [name]: value,
      });
    };

    const currencies = [
      { code: 'NGN', name: 'Nigerian Naira' },
      { code: 'USD', name: 'United States Dollar' },
      { code: 'KES', name: 'Kenyan Shilling' },
      { code: 'GHS', name: 'Ghana Shilling' },
      { code: 'CAD', name: 'Canadian Dollar' },
      { code: 'GBP', name: 'Great Britain Pounds' },
      { code: 'EUR', name: 'Euro' },
    ];
    

    const handleAddCurrency =()=>{
      AddCurrency();
    }
    
  return (
    <div className='balance_modal'  onClick={setIsOpenPopup.bind(this, false)} >
       <div onClick={(e) => e.stopPropagation()} className='balance_modal_content'>
          <div className='balance_modal_wrapper' >
              <img 
              onClick={setIsOpenPopup.bind(this, false)}
              className='verify-close' src="/images/x-close.svg" alt='close' 
              />
              <div className='balance_identity_title'>
                  <h3 className='verify_identity_h'>Add New Currency</h3>
                  <p className='verify_identity_p'>Here is an overview of your transaction</p>
              </div>

              <div className='balance-between'>
                <div className='balance-select-transfer'>
                    <select 
                    name="currencyName" // Use the corresponding name in formData
                    value={newCurrency.currencyName}
                    className='select-input'
                    onChange={handleSelectChange}
                    >   
                        <option value=''>Select currency</option>    
                        {currencies.map((currency) => (
                          <option key={currency.code} value={currency.code}>
                            {`${currency.code} (${currency.name})`}
                          </option>
                        ))}
                        {/* <option value='USD'>USD</option>    
                        <option value='NG'>NG</option>    
                        <option value='KEN'>KEN</option>     */}
                    </select>
                </div>
                
                <input
                 type='text' 
                 placeholder='Set low limit' 
                 className='country-amount' 
                 style={{marginTop:"16px"}}  
                 name="limitAmount" // Use the corresponding name in formData
                 value={newCurrency.limitAmount}
                 onChange={handleInputChange}
                 />
                <div className='btn-balance-transfer'>
                    <button  onClick={setIsOpenPopup.bind(this, false)} className='btn-balance-white'>Cancel</button>
                    <button onClick={handleAddCurrency} className='btn-balance-primary'>Add currency</button>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default CurrencyModal
