import React from 'react'
import '../../modals/Modal.scss'
function TransferOptions({setIsTransferOption,setIsTransferPortfolio,setIsTransferBank,setIsTransferPortfolioAmount,balanceModal,setIsNigerBankTransfer}) {

    return (
        <div className='overlay'>
            <div className='modal_containers'>
                <div className='modal_top'>
                    <img style={{cursor:"pointer"}} onClick={setIsTransferOption.bind(this,false)} src={process.env.PUBLIC_URL + "/images/backArrowBalanceModal.svg"} alt="icon" />
                </div>
               
    
                <div className='modal_aval_items'>
                    <div className='modal_aval_balance' onClick={setIsTransferPortfolio.bind(this,true)} style={{cursor:"pointer"}}>
                        <img src='/images/customers/transfer.svg' alt='balance' />
                        <div className='modal_fund_balance'>
                            <h1 className='modal_fund_title'>Transfer to Portfolio Company</h1>
                            <p className='modal_fund_desc'>Send funds to pre-registered companies</p>
                        </div>
                    </div>
                    <div className='bg_line'></div>
                    {/* dollar */}
                    {
                     balanceModal==="USD" &&
                     
                    
                    <div className='modal_aval_balance' onClick={setIsTransferPortfolioAmount.bind(this,true)} style={{cursor:"pointer"}}>
                        <img src='/images/customers/transfer.svg' alt='balance' />
                        <div className='modal_fund_balance'>
                            <h1 className='modal_fund_title mod_flex'>
                               <p className='modal_fund_title mod_flex'>Transfer to other Currencies </p> 
                            </h1>
                            <p className='modal_fund_desc'>Transfer to between currencies or to beneficiary  </p>
                        </div>
                    </div>
                    }
                    {/* Naira */}
                    {
                        balanceModal==="NGN" &&
                        <div className='modal_aval_balance' onClick={setIsNigerBankTransfer.bind(this,true)} style={{cursor:"pointer"}}>
                            <img src='/images/customers/transfer.svg' alt='balance' />
                            <div className='modal_fund_balance'>
                                <h1 className='modal_fund_title mod_flex'>
                                <p className='modal_fund_title mod_flex'>Transfer to Bank Account</p> 
                                </h1>
                                <p className='modal_fund_desc'>Transfer to between currencies or to beneficiary</p>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default TransferOptions
