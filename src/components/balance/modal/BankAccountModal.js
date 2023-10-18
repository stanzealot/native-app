import React, { useRef } from 'react'
import './balanceModal.scss'
import Status from '../../common/Status'
import BankAccountOverview from './BankAccountOverview'
function BankAccountModal({setIsOpenPopup}) {
  const accRef1 = useRef(null);
  const accRef2 = useRef(null);
  const accRef3 = useRef(null);

  return (
    <div className='balance_modal'  onClick={setIsOpenPopup.bind(this, false)} >
       <div onClick={(e) => e.stopPropagation()} className='balance_modal_content'>
          <div className='balance_modal_wrapper' >
              <img 
              onClick={setIsOpenPopup.bind(this, false)}
              className='verify-close' src="/images/x-close.svg" alt='close' 
              />

              <div className='balance_identity_title'>
                  <h3 className='verify_identity_h'>Transfer to Bank Account </h3>
                  <p className='verify_identity_p'>Here is an overview of your transaction</p>
              </div>

             
             <div className='transfer-overview-balance'>
                <BankAccountOverview
                accRef={accRef1}
                account_number = "0224048917" 
                bankName="GTBank"
                account_type="Current"
                name="Ajibade Ayomide David"
                />
                <BankAccountOverview
                accRef={accRef2}
                account_number = "0224048917" 
                bankName="GTBank"
                account_type="Current"
                name="Ajibade Ayomide David"
                />
                <BankAccountOverview
                accRef={accRef3}
                account_number = "0224048917" 
                bankName="GTBank"
                account_type="Current"
                name="Ajibade Ayomide David"
                />
             </div>
            
            <div className='btn_container'>
                <button className='btn-balance-white'>Close</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default BankAccountModal
