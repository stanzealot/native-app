import React, { useState } from 'react'
import NameControl from '../components/common/NameControl'
import AccountBalance from '../components/data/AccountBalance'

function DataAccountBalance() {
  const [isAction,setIsAction] = useState(false);
  const ToggleAction = ()=>{
    setIsAction(!isAction);
  }
  return (
    
    <div className='main-inner'>
        
        <NameControl 
        btn
        name="Accounts"
        desc="All linked Accounts and Balances"
        />
        
        <AccountBalance ToggleAction={ToggleAction} isAction={isAction}   />
    </div>
       
  )
}

export default DataAccountBalance
