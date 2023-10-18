import React from 'react'
import '../components/common/tables.scss'
import TableHeaderSearch from '../components/common/TableHeaderSearch'
import { useNavigate } from 'react-router-dom'
import { format } from 'timeago.js';

function ApiWalletHistory() {
    const navigate = useNavigate();
  const handleNavigate = ()=>{
    navigate('/overview')
  }
  return (
    <div className='main-inner'>
     
      <div onClick={handleNavigate} className='btnData' style={{marginBottom:"32px"}} >
        <img src={process.env.PUBLIC_URL+"/images/arrowBack.svg"} alt='arrow' />
        <p>Go Back</p>
      </div>
      <div className='api_wallet_top'>
        <h1 className='bar_wallet_texts'>API Wallet history</h1>
      </div>
      <div className='balance-overview'>
      <table className='tbl'>
        <tr>
            <td colSpan="7" className='tbl-heading'>
                <TableHeaderSearch
                title="Transactions" 
                placeholder="Search by name or date..."
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
              <td className='td-text'>7 hours ago</td> 
              <td className='td-text amount_text'>NGN 50,000.00</td>
              <td className='td-text'>NGN  9,820.00</td>
              <td className='td-text'>NGN 59,820.00</td>
              <td className='td-text'>Wallet Funding - Card ending 6782</td>
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
    </div>
  )
}

export default ApiWalletHistory
