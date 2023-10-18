import React from 'react'
import TableHeaderSearch from '../common/TableHeaderSearch'
import Status from '../common/Status'

function Incomes() {
  return (
    <div className='balance-overview'>
      <table className='tbl'>
        <tr>
            <td colSpan="7" className='tbl-heading'>
                <TableHeaderSearch 
                title="All income"
                placeholder="Search by name or date..."
                />   
                 
            </td>
        </tr>
        <tr>
          <th className='th-text'>Customer</th>
          <th className='th-text'>Account</th>
          <th className='th-text'>Total Income</th>
          <th className='th-text'>Monthly Income</th>
          <th className='th-text'>Annual Income</th>
          <th className='th-text'>Timestamp</th>
          <th className='th-text'>Status</th>
        </tr>

        <tr>
            <td className='td-text'>Brooklyn Simmons</td> 
            <td>
                <div className='income-account'>
                    <img className='income-bank-icon' src={process.env.PUBLIC_URL+"/images/paymentBank.svg"} alt="" />
                    <img className='income-bank-icon' src={process.env.PUBLIC_URL+"/images/fcmb.svg"} alt="" />
                    <img className='income-bank-icon' src={process.env.PUBLIC_URL+"/images/paymentBank.svg"} alt="" />
                    <img className='income-bank-icon' src={process.env.PUBLIC_URL+"/images/uba.png"} alt="" />
                </div>
            </td>
            <td className='td-text'>NGN 848,67.06</td>
            <td className='td-text'>NGN 848,67.06</td>
            <td className='td-text'>NGN 848,67.06</td>
            <td className='td-text'>2 hours ago</td>
            
            <td>
              <div style={{display:"flex",justifyContent:"space-between",alignContent:"center"}}>
                <Status 
                icon="/images/avataOnlineIndicator.svg"
                mgs="connected"
                />
                <img src={process.env.PUBLIC_URL+"/images/eye.svg"} alt="verified" />
              </div>
            </td>
            

        </tr>
      </table>
    </div>
  )
}

export default Incomes
