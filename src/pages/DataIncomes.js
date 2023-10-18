import React from 'react'
import NameControl from '../components/common/NameControl'
import Incomes from '../components/data/Incomes'

function DataIncomes() {
  return (
    
    <div className='main-inner'>
        <NameControl 
        btn
        name="Income"
        desc="Income details for accounts linked with ARM"
        />
        <Incomes />
    </div>
       
  )
}

export default DataIncomes
