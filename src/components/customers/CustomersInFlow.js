import React from 'react'
import CustomerOverView from '../common/CustomerOverView'
import TableHeaderSearch from '../common/TableHeaderSearch'
import '../common/Pages.scss'
import Status from '../common/Status'
function CustomersInFlow() {
    return (
        <div className='data_customer'>
            <CustomerOverView customer />
            
           <div className='balance-overview'>
              <table className='tbl'>
              <tr>
                <td colSpan="7" className='tbl-heading'>
                    <TableHeaderSearch
                    title="Transactions"
                    placeholder="Search by bank..."
                    
                    />     
                </td>
                </tr>
              <tr>
               
                  <th className='th-text'>Amount</th>
                  <th className='th-text'>Sender</th>
                  <th className='th-text'>Date Initiated</th>
                  <th className='th-text'>Date Received</th>
                  <th className='th-text'>Status</th>
                  
              </tr>
    
              <tr>
                
                <td className='td-text'>NGN 840,000.00c</td>
                <td className='td-text'>Brooklyn Simmons</td>
                <td className='td-text'>2 hours ago</td>
                <td className='td-text'>2 hours ago</td>
                <td className='td-text'>
                    <Status 
                    mgs="Successful"
                    />
                </td>
                
                
            </tr>
              </table>
           </div>
        </div>
      )
}

export default CustomersInFlow
