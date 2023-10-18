import React from 'react'
import './Overview.scss'
import { useNavigate } from 'react-router-dom'
function TableWalletModal({setIsPaymentMethod,setIsSetLimit}) {
  const navigate = useNavigate();
  const handleNav = ()=>{
    navigate('/wallet-history')
  }
  return (
    <div className='fund_modal'>
        <p className='fund_item' onClick={handleNav}>Wallet History</p>
        <p className='fund_item'>Auto top-up</p>
        <p className='fund_item'>Subscriptions</p>
        {/* <p className='fund_item' onClick={setIsPaymentMethod.bind(this,true)}>Fund balance</p>
        <p className='fund_item' onClick={setIsSetLimit.bind(this,true)}>Set limit</p> */}
    </div>
  )
}

export default TableWalletModal
