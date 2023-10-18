import React, { useState } from 'react'
import '../common/tables.scss'
import ApiWalletBalance from '../overview/ApiWalletBalance'
import TableWalletModal from '../overview/TableWalletModal'

function BalanceTable({ openSetLimitModal,setIsAmount,setIsModalOpen,setIsPaymentMethod}) {
  const [isOpen, setIsOpen] = useState(false)
 const toggleModal = ()=>{
  setIsOpen(!isOpen)
 }
  return (
    <div className='balance-overview'>
      {/* <div className='wallet_tb'>
        <table className='tbl'>
          <tr>
              <th className='wallet_col wallet_text' colSpan={6}>API Wallet</th>
              <th className='wallet_text'>Actions</th>
          </tr>
          <tr>
              
              <td wallet_col colSpan={6} className='balance_amounts wallet_col'>NGN 20,000.12 </td> 
              <td className='col_actions'>
                  <div className='balance-gap'>
                      <img style={{cursor:"pointer"}}   onClick={setIsAmount.bind(this,true)} src='/images/fundBalances.svg' alt='stan'/>
                      <img style={{cursor:"pointer",marginLeft:"21px"}} onClick={openSetLimitModal} src='/images/setLimits.svg' alt='stan'/>
                      <img style={{cursor:"pointer",marginLeft:"37px"}} onClick={toggleModal} src='/images/linearDot.svg' alt='dot' />
                  </div>
                  {isOpen && <TableWalletModal setIsSetLimit={setIsModalOpen} setIsPaymentMethod={setIsPaymentMethod} />}
              </td>
          </tr>
          
          
        </table>
      </div> */}

      <table className='tbl'>
        
        <tr>
            <th className='wallet_text'>Currency</th>
            <th className='wallet_text'>Ledger Bal.</th>
            <th className='wallet_text'>Available Bal.</th>
            <th className='wallet_text'>Actions</th>    
        </tr>
        
        
            <tr>
                <td>
                    <div className='flag'>
                        <img src={process.env.PUBLIC_URL+`/images/NGN.svg`} alt="flag" />
                        <h1 className='ng'>NGN</h1>
                    </div>
                </td>
                <td className='balance-amount'>USD 5,000.00</td>
                <td className='balance-amount'>USD 5,000.00</td>
                <td className='col_width'>
                    <div className='balance-gap'>
                       <img style={{cursor:"pointer"}} onClick={setIsAmount.bind(this,true)} src='/images/fundBalances.svg' alt='stan'/>
                       <img style={{cursor:"pointer",marginLeft:"21px"}} onClick={openSetLimitModal} src='/images/transfers.svg' alt='stan'/>
                        
                    </div>
                </td>
            </tr>  
              {/*duplicate  */}
            <tr>
                <td>
                    <div className='flag'>
                        <img src={process.env.PUBLIC_URL+`/images/NGN.svg`} alt="flag" />
                        <h1 className='ng'>NGN</h1>
                    </div>
                </td>
                <td className='balance-amount'>USD 5,000.00</td>
                <td className='balance-amount'>USD 5,000.00</td>
                <td className='col_width'>
                    <div className='balance-gap'>
                       <img style={{cursor:"pointer"}} onClick={setIsAmount.bind(this,true)} src='/images/fundBalances.svg' alt='stan'/>
                       <img style={{cursor:"pointer",marginLeft:"21px"}} onClick={openSetLimitModal} src='/images/transfers.svg' alt='stan'/>
                        
                    </div>
                </td>
            </tr>    
      </table>

      {/* <ApiWalletBalance align="center" mt="32px"  amount="N20,000.12" setIsSetLimit={setIsModalOpen} setIsPaymentMethod={setIsPaymentMethod}  /> */}
      
    </div>
  )
}

export default BalanceTable
