import React from 'react'
import TableHeaderSearch from '../common/TableHeaderSearch'

function TransactionProfile() {
  return (
    <div className='balance-overview'>
      <table className='tbl'>
        <tr>
            <td colSpan="7" className='tbl-heading'>
                <TableHeaderSearch
                title="Accounts"
                placeholder="Search by bank..."
                btnFirst
                numUsers="100"
                users="connected"
                />     
            </td>
        </tr>
        <tr>

          <th className='th-text'>Amount</th>
          <th className='th-text'>Total Balance</th>
          <th className='th-text'>Total Income</th>
          <th className='th-text'>Currency</th>
          <th className='th-text'>Transactions</th>
          <th className='th-text'>Payments</th>
        </tr>

        <tr>
            <td className='td-text'>2 hours ago</td> 
            <td className='td-text'>NGN 848,67.06</td>
            <td className='td-text'>Flick</td>
            <td className='td-text'>Flick</td>
            <td className='td-text'>Flick</td>
            <td className='td-text'>Flick</td>
        </tr>
      </table>
    </div>
  )
}

export default TransactionProfile
