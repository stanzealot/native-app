import React from 'react'
import '../balance/modal/balanceModal.scss'
import Status from '../common/Status'
function NewTransferModal({setNewTransaction}) {
  return (
    
    <div className='balance_modal'  onClick={setNewTransaction.bind(this, false)} >
       <div onClick={(e) => e.stopPropagation()} className='balance_modal_content'>
          <div className='balance_modal_wrapper' >
              <img 
              onClick={setNewTransaction.bind(this, false)}
              className='verify-close' src="/images/x-close.svg" alt='close' 
              />

              <div className='balance_identity_title'>
                  <h3 className='verify_identity_h'>Transfer to Bank Account</h3>
                  <p className='verify_identity_p'>Here is an overview of your transaction</p>
              </div>

              <div className='balance-between'>
              <input type='number' placeholder='Enter account number' className='country-amount' style={{marginTop:"16px"}}  />
                <div className='balance-select-transfer' style={{marginTop:"16px"}}>
                    <select className='select-input'>
                        <option value='' className='select-disabled' >
                        select bank
                        </option>
                        <option value='bank_account'>Transfer to Bank Account</option>    
                    </select>
                </div>
                
                <div style={{marginTop:"12px"}}>

                    <Status 
                    mgs="Ajibade Ayomide David"
                    />
                </div>
                <input type='text' placeholder='Description (optional)' className='country-amount' style={{marginTop:"16px"}}  />

                <div className='btn-balance-transfer'>
                    <button onClick={setNewTransaction.bind(this, false)} className='btn-balance-white'>Cancel</button>
                    <button className='btn-balance-primary'>Confirm transfer</button>
                </div>
              </div>
              
          </div>
        </div>
    </div>
  )
}

export default NewTransferModal
