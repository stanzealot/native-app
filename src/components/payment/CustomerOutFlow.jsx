import React from 'react'
import '../common/tables.scss'
import TableHeaderSearch from '../common/TableHeaderSearch'
import Status from '../common/Status'
function CustomerOutFlow() {
  return (
    <div className='balance-overview'>
    <table className='tbl'>
      <tr>
          <td colSpan="7" className='tbl-heading'>
              <TableHeaderSearch 
              title="All transactions"
              placeholder="Search by name, acc num or reff..."
              />
          </td>
      </tr>
      <tr>
          <th className='th-text'>Timestamp</th>
          <th className='th-text'>Recipient Account</th>
          <th className='th-text'>Amount</th>
          <th className='th-text'>Transaction Details</th>
          <th className='th-text'>Status</th>
      </tr>
      <tr>
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
          <td className='td-text' style={{color:"#101828"}}>848,67.06</td>
          
          <td className='td-text'>FEE|NDAKO GAGAMU SHOLA</td>
          <td>
              <div className='payment-status'>
                  <Status 
                  icon="/images/success.svg"
                  mgs="Successful "
                  />
                  <img src={process.env.PUBLIC_URL+"/images/eye.svg"} alt='eye'/>
              </div>
          </td>

      </tr>
      {/* duplicate */}
      
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

export default CustomerOutFlow
