import React from 'react'
import CustomerOverView from '../../common/CustomerOverView'
import TableHeaderSearch from '../../common/TableHeaderSearch'

function CustomerTransaction() {
  return (
    <div className='data_customer'>
      <CustomerOverView data customer/>
      <div className='balance-overview'>
          <table className='tbl'>
          <tr>
              <td colSpan="7" className='tbl-heading'>
                  <TableHeaderSearch
                  title="All transactions"
                  placeholder="Search by bank..."
                  numUsers={3}
                  users={"connected"}
                  btnFirst
                  sync
                  stats
                  />     
              </td>
          </tr>
          <tr>
           
              <th className='th-text'>Account</th>
              <th className='th-text'>Customer</th>
              <th className='th-text'>Count</th>
              <th className='th-text'>Date Added</th>
              <th className='th-text'>Last Synced</th>
              <th className='th-text'>Payments</th>
          </tr>

          <tr>
            <td>
                <div className='customer-name'>
                    <img className='customer-name-img' src={process.env.PUBLIC_URL+"/images/gt-bank.svg"} alt="customer" />
                    <h2 className='customer-name-text'>GTBank | 0130086553</h2>
                </div>
            </td> 
            <td className='td-text'>Qraba Limited</td>
            <td className='td-text'>0</td>
            <td className='td-text'>Jul 17, 2023</td>
            
            <td className='td-text'>Jul 17, 2023</td>
            <td className='td-text'>
                <div style={{display:"flex",justifyContent:"space-between",alignContent:"center"}}>
                  <p className='td-text'>jackson.graham@sample.com</p>
                  <img  style={{cursor:"pointer"}}  src={process.env.PUBLIC_URL+"/images/SyncBadge.svg"} alt="verified" />  
                </div>
            </td>
            
            
        </tr>
          </table>
        </div>
    </div>
  )
}

export default CustomerTransaction
