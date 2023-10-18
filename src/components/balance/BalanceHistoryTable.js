import React from 'react'
import '../common/tables.scss'
import TableHeaderSearch from '../common/TableHeaderSearch'
import Status from '../common/Status'
function BalanceHistoryTable() {
  return (
    <div className='balance-overview'>
      <table className='tbl'>
        <tr>
            <td colspan="5" className='tbl-heading'>
                <TableHeaderSearch
                title="Transactions"
                placeholder="Search..."         
                />
            </td>  
        </tr>
        <tr>
            <th className='th-text'>Timestamp</th>
            <th className='th-text'>Amount</th>
            <th className='th-text'>Balance Before</th>
            <th className='th-text'>Balance After</th>
            <th className='th-text'>Transaction Details</th>
        </tr>
        <tr>
            <td className='td-text'>2 hours ago</td>
            <td className='td-text'>NGN 848,67.06</td>
            <td className='td-text' style={{color:"#101828"}}>NGN 848,67.06</td>
            <td className='td-text'>NGN 848,67.06</td>
            <td className='td-text'>FEE|NDAKO GAGAMU SHOLA|0224048917</td> 
        </tr>
        <tr>
            <td className='td-export' colspan="5">
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

export default BalanceHistoryTable
