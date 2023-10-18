import React from 'react'
import Active from '../common/Active'
import '../common/tables.scss'
import TableHeaderSearch from '../common/TableHeaderSearch'
import { useNavigate } from 'react-router-dom'
function Identities({users,btnFirst,numUsers}) {
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate('/data-identity-detial')
  }
  return (
    <div className='balance-overview'>
      <table className='tbl'>
        <tr>
            <td colSpan="7" className='tbl-heading'>
                <TableHeaderSearch 
                title="Customers"
                placeholder="Search by name or date..."
                users={users}
                btnFirst={btnFirst}
                numUsers={numUsers}
                />
                
            </td>
        </tr>
        <tr>
          <th className='th-text'>Name</th>
          <th className='th-text'>ID Type</th>
          <th className='th-text'>ID Number</th>
          <th className='th-text'>Date Checked</th>
          <th className='th-text'>Channel</th>
          <th className='th-text'>Status</th>
        </tr>

        <tr>
            <td>
                <div className='customer-name'>
                    <img className='customer-name-img' src={process.env.PUBLIC_URL+"/images/tope.svg"} alt="customer" />
                    <h2 className='customer-name-text'>Brooklyn Simmons</h2>
                </div>
            </td> 
            <td className='td-text'>BVN</td>
            
            <td className='td-text'>08136902667</td>
            <td className='td-text'>2 hours ago</td>
            <td className='td-text'>API</td>

            <td>
              <div style={{display:"flex",justifyContent:"space-between",alignContent:"center"}}>
                <Active title="Verified"/>
                <img onClick={handleClick} src={process.env.PUBLIC_URL+"/images/eye.svg"} alt="verified" />
              </div>
            </td>
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
  )
}

export default Identities
