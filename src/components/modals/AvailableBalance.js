import React from 'react'
import './data/dataverify.scss'

function AvailableBalance({setIsBalanceOpen,setIsPaymentMethod,setIsModalOpen,title,amount,icon,setIsTransferOption,balanceModal,setIsDollarAmount}) {


  return (
    <div className='overlay'>
        <div className='modal_containers'>
            <div className='modal_top'>
                <div className='modal_top_left'>
                    <img src={`/images/${icon}.svg`} alt="flag" />
                    <h3 className='naira_modal'>{title}</h3>
                </div>
                <img onClick={setIsBalanceOpen.bind(this,false)} src='/images/x-close.svg' alt="close" />  
            </div>
            <p className='modal_aval_bal'>Available balance <span> <span className='lin_through'>N</span>{amount}</span> </p>

            <div className='modal_aval_items'>
                {
                    balanceModal ==="USD" &&
                    <div className='modal_aval_balance' onClick={setIsDollarAmount.bind(this,true)} style={{cursor:"pointer"}}>
                        <img src='/images/fundBalance.svg' alt='balance' />
                        <div className='modal_fund_balance'>
                            <h1 className='modal_fund_title'>Fund Balance</h1>
                            <p className='modal_fund_desc'>Top-up balance via dedicated virtual account</p>
                        </div>
                    </div>
                }
                {
                    balanceModal ==="NGN" &&
                    <div className='modal_aval_balance' onClick={setIsPaymentMethod.bind(this,true)} style={{cursor:"pointer"}}>
                        <img src='/images/fundBalance.svg' alt='balance' />
                        <div className='modal_fund_balance'>
                            <h1 className='modal_fund_title'>Fund Balance</h1>
                            <p className='modal_fund_desc'>Top-up balance via Card or Bank</p>
                        </div>
                    </div>
                }
                <div className='bg_line'></div>
                <div className='modal_aval_balance' onClick={setIsTransferOption.bind(this,true)} style={{cursor:"pointer"}}>
                    <img src='/images/setLimit.svg' alt='balance' />
                    <div className='modal_fund_balance'>
                        <h1 className='modal_fund_title mod_flex'>
                           <p className='modal_fund_title mod_flex'>Transfer</p> 
                          
                        </h1>
                        <p className='modal_fund_desc'>Transfer to between currencies or to beneficiary  </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AvailableBalance
