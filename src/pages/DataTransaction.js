import React from 'react'
import NameControl from '../components/common/NameControl'
import CustomerOverView from '../components/common/CustomerOverView'
import Transaction from '../components/data/Transaction'

function DataTransaction() {
  return (
    
    <div className='main-inner'>
        <NameControl 
        backbtnPath="/data-transactions"
        customer
        data
        btntext="View customer profile"
        trans
        />
        <CustomerOverView />
        <Transaction />
    </div>
       
  )
}

export default DataTransaction
