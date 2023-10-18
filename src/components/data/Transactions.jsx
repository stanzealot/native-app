import React from 'react'
import TableHeaderSearch from '../common/TableHeaderSearch'
import Status from '../common/Status'
import { useNavigate } from 'react-router-dom'

function Transactions() {
  const navigate = useNavigate();
  const handleTransaction = ()=>{
     navigate("/data-transaction")
  }
  return (
    <div className='balance-overview'>
      <table className='tbl'>
        <tr >
            <td  colSpan="7" className='tbl-heading'>
                <TableHeaderSearch 
                title="All transactions"
                placeholder="Search by name or date..."
                />     
            </td>
        </tr>
        <tr>
          <th className='th-text'>Customer</th>
          <th className='th-text'>Account</th>
          <th className='th-text'>Count</th>
          <th className='th-text'>Date Synced</th>
          <th className='th-text'>Status</th>
        </tr>

        <tr >
            <td className='td-text'>Brooklyn Simmons</td> 
            <td className='td-text'>
                <div className='tbl-account'>
                    <img className='account-bank-logo' src={process.env.PUBLIC_URL+"/images/paymentBank.svg"} alt="" />
                    <div className='payment-account-text'>
                        <h1 className='td-text'>GTBank</h1>
                        <span className='td-text'>|0130086553</span>
                    </div>
                </div>
            </td>
            <td className='td-text'>213</td>
            <td className='td-text'>2 hours ago</td>
            
            <td>
              <div style={{display:"flex",justifyContent:"space-between",alignContent:"center"}}>
                <Status 
                icon="/images/success.svg"
                mgs="Credit"
                />
                <img onClick={handleTransaction} src='/images/eye.svg' style={{cursor:"pointer"}} alt='display' />
                <img  style={{cursor:"pointer"}}  src={process.env.PUBLIC_URL+"/images/SyncBadge.svg"} alt="verified" />
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
      </table>
    </div>
  )
}

export default Transactions
