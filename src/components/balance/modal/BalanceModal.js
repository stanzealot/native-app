import React, { useState } from 'react'

function BalanceModal({setIsOpenPopup,Transferbetween,formData,setFormData}) {
   
    
      // Handle changes for the input fields in the Balance component
      
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSelectChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
      
    
      // Function to perform API call or other actions with formData
      const handleTransfer = () => {
        // Perform your API call or other actions with the formData
        console.log('Transfer Data:', formData);
        Transferbetween()
        setIsOpenPopup(false);
      };
  return (
    <div className='balance_modal'  onClick={setIsOpenPopup.bind(this, false)} >
       <div onClick={(e) => e.stopPropagation()} className='balance_modal_content'>
          <div className='balance_modal_wrapper' >
              <img 
              onClick={setIsOpenPopup.bind(this, false)}
              className='verify-close' src="/images/x-close.svg" alt='close' 
              />

              <div className='balance_identity_title'>
                  <h3 className='verify_identity_h'>Transfer Between Currency Balances</h3>
                  <p className='verify_identity_p'>Here is an overview of your transaction</p>
              </div>

              <div className='balance-between'>
                <div className='balance-select-transfer'>
                    <select
                    name="selectedBalance" // Use the corresponding name in formData
                    value={formData.selectedBalance} // Use the corresponding value from formData
                    className='select-input'
                    onChange={handleSelectChange}
                      
                     >
                        <option value='' className='select-disabled'  >
                         Choose balance to transfer from...
                        </option>
                        <option value='selectedValue'>Transfer to Bank Account</option>    
                    </select>
                </div>
                <div className='select-country'>
                    <div className='balance-select-transfer' style={{width:"100px"}}>
                        <select 
                         name="selectedCurrency" // Use the corresponding name in formData
                         value={formData.selectedCurrency} // Use the corresponding value from formData
                         className='select-input'
                         onChange={handleSelectChange}
                        >
                            <option value='USD'>USD</option>
                            <option value='NG'>NG</option> 
                        </select>
                    </div>
                    <input
                      type='number'
                      name="amount" // Use the corresponding name in formData
                      value={formData.amount} // Use the corresponding value from formData
                      placeholder='0.00'
                      className='country-amount'
                      onChange={handleInputChange}
                    /> 
                </div>

                
                <input onChange={handleInputChange} type='text' name='description' placeholder='Description (optional)' className='country-amount' style={{marginTop:"16px"}}  />

                <div className='btn-balance-transfer'>
                    <button onClick={setIsOpenPopup.bind(this, false)} className='btn-balance-white'>Cancel</button>
                    <button onClick={handleTransfer} className='btn-balance-primary'>Confirm transfer</button>
                </div>
              </div>
              
          </div>
        </div>
    </div>
  )
}

export default BalanceModal
