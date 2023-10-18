import React, { useState } from 'react'
import TableHeaderSearch from '../common/TableHeaderSearch'
import Status from '../common/Status'
import '../common/tables.scss'

function OverviewDataTable() {
    const [isChecked, setIsChecked] = useState(false)
    // Handle checkbox change
    const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
    };
  return (
    <div className='balance-overview'>
      <table className='tbl'>
        <tr className='tr_api'>
          <td colSpan={5}  className='td_api'>
              <div className='api_logs_head'>
                  <div className='tbl_Api_logs'>
                    <p className='apiLogs_name'>API Logs</p>
                    <p className='apiLogs_record'><span>67</span> records</p>
                  </div>

                  <div className='tbl_months'>  
                      <img className='image-from' src={process.env.PUBLIC_URL+"/images/tblTime.svg"} alt="search"/>
                      <div className='tbl-data-time'>
                          <p className='date-from'>From:</p>
                          <h1 className='date-to'>10 August</h1>
                          
                      </div>

                      <div className='date-delimiter'></div>

                      <div className='tbl-data-time'>
                          <p className='date-from'>From:</p>
                          <h1 className='date-to'>10 August</h1>
                          
                      </div>
                      <div className='error-export-btn'>
                          <img src="/images/exportError.svg" alt='error' />
                          <p className='error-export-text'>Export</p>
                      </div>
                  </div>
                                
              </div>

          </td>
          
        </tr>
        <tr>
            <td colSpan="7" className='tbl-heading'>
                <TableHeaderSearch 
                title="All statements"
                placeholder="Search by name, acc num or reff..."
                users="records"
                
                />
            </td>
        </tr>
        <tr>
            <th className='th-text'>customers</th>
            <th className='th-text'>cost</th>
            <th className='th-text'>Products</th>
            <th className='th-text'>Type</th>
            <th className='th-text'>Date</th>
            
        </tr>
        <tr>
            <td className='td-text'>
                <div className='checked-input'>
                    <input 
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    />
                    <div className='customer-td'>
                      <p className='checked-th'>Brooklyn Simmons</p>
                      <p className='td-text'>567346vcwsj64v635262v43</p>
                    </div>
                </div>
            </td>
            <td className='td-text'>
                0.00
            </td>
            <td>
                <div className='payment-status'>
                    <Status 
                    bg="#EEF4FF"
                    border="#C7D7FE"
                    color="#3538CD"
                    mgs="Successful "
                    />
                    
                </div>
            </td>
            <td className='td-text' >Api  Logs</td>
            <td className='td-text'>Jul 17, 2023 </td>
           
            
            

        </tr>
        {/* duplicate */}
        
        
        
      </table>
    </div>
  )
}

export default OverviewDataTable
