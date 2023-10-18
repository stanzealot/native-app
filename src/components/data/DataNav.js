import React from 'react'
import '../common/Pages.scss'
function DataNav() {
  return (
    <div className='top_bar'>
        <div style={{cursor:"pointer"}} className="customer-back" onClick={handleBack}>
            <img src={process.env.PUBLIC_URL+"/images/arrowBack.svg"} alt="arrow back"/>
            <h1 className='customer-arrowBack'>Go Back</h1>
        </div>
        <div className='data-nav-btn'>
            <span  className='dataItembtn active'>Account</span>
            <span className='dataItembtn '>Identity</span>
            <span className='dataItembtn '>Transactions</span>
            <span className='dataItembtn '>Statement</span>
        </div>
    </div>
  )
}

export default DataNav
