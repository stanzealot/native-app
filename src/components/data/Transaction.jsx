import React from 'react'
import TableHeaderSearch from '../common/TableHeaderSearch'
import Status from '../common/Status'

function Transaction() {
  return (
    <div className='balance-overview'>
      <table className='tbl'>
        <tr>
            <td colSpan="7" className='tbl-heading'>
                <TableHeaderSearch 
                title="All transactions"
                placeholder="Search by name or date..."
                />     
            </td>
        </tr>
        <tr>
          <th className='th-text'>Timestamp</th>
          <th className='th-text'>Amount</th>
          <th className='th-text'>Channel</th>
          <th className='th-text'>Transaction Details</th>
          <th className='th-text'>Status</th>
        </tr>

        <tr>
            <td className='td-text'>2 hours ago</td> 
            <td className='td-text'>NGN 848,67.06</td>
            <td className='td-text'>Flick</td>
           
            <td className='td-text'>FEE|NDAKO GAGAMU SHOLA|ref:3562526356783....3433 to JOHN SEUN</td>
            <td>
              <div className='customer-active'>
                <Status 
                icon="/images/success.svg"
                mgs="Successful"
                />
              </div>
            </td>
        
        </tr>
      </table>
    </div>
  )
}

export default Transaction
