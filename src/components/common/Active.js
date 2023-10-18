import React from 'react'

function Active({title}) {
  return (
    <div className='customer-active'>
        <img className='customer-active-img' src={process.env.PUBLIC_URL+"/images/avataOnlineIndicator.svg"} alt="customerActive" />
        <p className='td-text'>{title}</p>
    </div>
  )
}

export default Active
