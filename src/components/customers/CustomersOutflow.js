import React from 'react'
import CustomerOverView from '../common/CustomerOverView'
import TableHeaderSearch from '../common/TableHeaderSearch'
import '../common/Pages.scss'
import Status from '../common/Status'
function CustomersOutflow() {
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
                  <th className='th-text'>Recipient Account</th>
                  <th className='th-text'>Transaction Reference</th>
                  <th className='th-text'>Timestamp</th>
                  <th className='th-text'>Status</th>
                  
              </tr>
    
              <tr>
                
                <td className='td-text'>NGN 148,670.00</td>
                <td className='td-text'>
                    <div style={{display:"flex",gap:"12px",alignItems:"center"}}>
                        <img src='/images/gtbank.svg' alt='stan'/>
                        Brooklyn Simmons
                    </div>
                </td>
                <td className='td-text'>FEE|NDAKO GAGAMU SHOLA</td>
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

export default CustomersOutflow
