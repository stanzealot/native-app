import React from 'react'
import Status from '../../common/Status'
import { copyToClipboard } from '../../utilities/clipboardUtils'

function BankAccountOverview({account_number,bankName,account_type,name,accRef}) {

  return (
    <div className='bankAccount-overview'>
        <div className='row-account-number'>
        <div className='row-th-content'>
            <p className='account-th'>Account number</p>
            <p className='account-th'>Bank</p>
        </div>
        <div className='row-th-content'>
            <div className='row-th-left'>
            <input 
            ref={accRef}
            type='number' value={account_number} 
            className='account-td copyInput'
            name='account_number'
            />
            <img 
            src='/images/copyBalance.svg' 
            alt="copy"
            onClick={copyToClipboard.bind(null,accRef)}
            />
            </div>
            <h4 className='account-td'>{bankName}</h4>
        </div>

        </div>

        <div className='row-account-type'>
        <div className='row-th-content'>
            <p className='account-th'>Account type</p>
            <p className='account-th'>Account name</p>
        </div>
        <div className='row-th-content'>
            <Status 
            mgs={account_type}
            />
            <h4 className='account-td'>{name}</h4>
        </div>
        </div>
        
   </div>
  )
}

export default BankAccountOverview
