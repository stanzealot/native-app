import React from 'react'
import TableHeaderSearch from '../common/TableHeaderSearch'
import Status from '../common/Status'
import AccountActions from './AccountActions'

function AccountBalance({isAction,ToggleAction}) {
  
  const handleAccountAction = ()=>{
    ToggleAction();
  }
  return (
    <div className='balance-overview' style={{position:"relative"}}>
      <table className='tbl'>
      <tr>
            <td colSpan="7" className='tbl-heading'>
                <TableHeaderSearch 
                title="Transactions"
                placeholder="Search by name or date..."
                />     
            </td>
        </tr>
        <tr>
          <th className='th-text'>Name</th>
          <th className='th-text'>Timestamp</th>
          <th className='th-text'>Account</th>
          <th className='th-text'>Balance</th>
          <th className='th-text'>Status</th>
        </tr>

        <tr>
            <td>
                <div className='customer-name'>
                    <img className='customer-name-img' src={process.env.PUBLIC_URL+"/images/tope.svg"} alt="customer" />
                    <h2 className='customer-name-text'>Brooklyn Simmons</h2>
                </div>
            </td> 
            <td className='td-text'>2 hours ago</td>
            <td className='td-text'>
                <div className='tbl-account'>
                    <img className='account-bank-logo' src={process.env.PUBLIC_URL+"/images/paymentBank.svg"} alt="" />
                    <div className='payment-account-text'>
                        <h1 className='td-text'>GTBank</h1>
                        <span className='td-text'>|0130086553</span>
                    </div>
                </div>
            </td>
            
            <td className='td-text' style={{color:"#101828"}}>N 848,67.06</td>
            

            <td >

              <div style={{display:"flex",justifyContent:"space-between",alignContent:"center"}}>
                <Status 
                icon="/images/success.svg"
                mgs="Successful"
                />
                <img onClick={handleAccountAction}  src={process.env.PUBLIC_URL+"/images/threeDot.svg"} alt="verified" />
              </div>
             
            </td>
        </tr>

        <tr>
            <td className='td-export' colspan="7">
                <div className='tbl-export'>
                    <h6 className='tbl-export-text'>Export Data</h6>
                    <img src={process.env.PUBLIC_URL+"/images/export.svg"} alt='export' />               
                </div>
            </td>
        </tr>
        {isAction && <AccountActions />}
      </table>
    </div>
  )
}

export default AccountBalance
