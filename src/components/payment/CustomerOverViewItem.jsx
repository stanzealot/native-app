import React from 'react'

function CustomerOverViewItem({icon,desc,amount}) {
  return (
    <div className='customer-profile'>
        <img className='customer-profile-avater' src={process.env.PUBLIC_URL+icon} alt='customer'/>
        <div className='customer-profile-content'>
            <h3 className='customer-profile-flow'>{desc}</h3>
            <p className='customer-profile-amount'>{amount}</p>
        </div>
    </div>
  )
}

export default CustomerOverViewItem
