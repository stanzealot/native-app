import React from 'react'
import TableHeaderSearch from '../common/TableHeaderSearch'
import Status from '../common/Status'

function OutFlowPayment({settlementData}) {
  return (
    <div className='balance-overview tbl_overflow' style={{marginBottom:"50px"}} >
      <table className='tbl'>
        <tr>
            <td colSpan="7" className='tbl-heading'>
                <TableHeaderSearch
                 title="transactions"
                 placeholder="Search by name, acc num or reff..."
                />

            </td>
        </tr>
        {
            Array.isArray(settlementData) && settlementData.length > 0 &&
          <tr>
              <th className='th-text'>Settlement Timestamp</th>
              <th className='th-text'>Amount</th>
              <th className='th-text'>Destination</th>
              <th className='th-text'>Status</th>
          </tr>
        }
        {
          Array.isArray(settlementData) && settlementData.length > 0 &&
          <tr>
          <td className='td-text'>2 hours ago</td>
          <td className='td-text' style={{color:"#6DC289"}}>NGN 848,67.06</td>
          <td className='td-text' >Available balance</td>
          <td>
              <div className='payment-status'>
                  <Status 
                  icon="/images/success.svg"
                  mgs="Successful "
                  />
                  
              </div>
          </td>
          </tr>
        }
        {
          Array.isArray(settlementData) && settlementData.length > 0 &&
          <tr>
              <td className='td-export' colspan="7">
                  <div className='tbl-export'>
                      <h6 className='tbl-export-text'>Export Data</h6>
                      <img src={process.env.PUBLIC_URL+"/images/export.svg"} alt='export' />               
                  </div>
              </td>
          </tr>
        }
        {
           settlementData.length <= 0 &&
          <tr>
              <td  colSpan={7} style={{width:"100%"}}>
                  <div className='empty_tbl'>
                      <img src='/images/emptyPage.svg' alt='emptuy' />
                      <h3 className='num_trans'>No Transactions Yet</h3>
                      <p className='num_desc'> it is necessary to perform transactions on your Flick account</p>
                  </div>
              </td>
          </tr>

        }

      </table>
    </div>
  )
}

export default OutFlowPayment
