import React from 'react'
import NameControl from '../components/common/NameControl'
import Customers from '../components/payment/Customers'

function PaymentCustomers() {
  return (
    
    <div className='main-inner'>
        <NameControl 
        btn
        name="ARM customers"
        desc="Manage all your settlements here"
        />
        <Customers />
    </div>
     
  )
}

export default PaymentCustomers
