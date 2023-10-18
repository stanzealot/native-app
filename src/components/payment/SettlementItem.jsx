import React from 'react'

function SettlementItem({icon,title,amount,bgColor,transNum}) {
  return (
    <div className='settlement-item' style={{backgroundColor:bgColor}}>
        <div className='settlement-total'>
            <img src={process.env.PUBLIC_URL+icon} alt="" />
            <h1 className='settlement-title'>{title}</h1>
        </div>
        <h3 className='settlemet-amount'><span>N</span> {amount}</h3>
        <p className='settlement-total'>{transNum} <span> Total transactions</span></p>
    </div>
  )
}

export default SettlementItem
