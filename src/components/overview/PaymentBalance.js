import React from 'react'
import { useNavigate } from 'react-router-dom'
function PaymentBalance({country,flag,symbole,amount,bgColor, balanceNav,balance,setBalanceModal }) {
  const navigate = useNavigate();
  const handleBalance = ()=>{
    setBalanceModal(balance)
    balanceNav();
  }
  return (
    <div className='payment-balance' style={{backgroundColor:bgColor}} onClick={handleBalance}>
       
        <div className='balance-country'>
            <img src={process.env.PUBLIC_URL+flag} alt='flag'/>
            <h6>{country}</h6>
        </div>
        <div className='balance-available'>
            <h1 className='balance-available-title'>AVAILABLE BALANCE</h1>
            <div className='balance-amount'>
                <h4>{symbole}{amount}</h4>
                <img src={process.env.PUBLIC_URL+"/images/balanceArrow.svg"} alt="balance"/>
            </div>
        </div>
    </div>
  )
}

export default PaymentBalance
