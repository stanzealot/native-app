import React from 'react'
import TableHeaderSearch from '../common/TableHeaderSearch'

function Statements() {

  return (
    <div className='balance-overview'>
      <table className='tbl'>
        <tr>
            <td colSpan="7" className='tbl-heading'>
                <TableHeaderSearch 
                title="All statements"
                placeholder="Search..."
                />
            </td>
            
        </tr>
        <tr>
            <th className='th-text'>Customer</th>
            <th className='th-text'>Bank</th>
            <th className='th-text'>Period</th>
            <th className='th-text'>From</th>
            <th className='th-text'>To</th>
            <th className='th-text'>Collected Via</th>
            <th className='th-text'>Date Collected</th>
        </tr>
        <tr>
            <td className='td-text'>Brooklyn Simmons</td>
            <td className='td-text'>
                <div className='tbl-account'>
                    <img className='account-bank-logo' src={process.env.PUBLIC_URL+"/images/paymentBank.svg"} alt="" />
                    <div className='payment-account-text'>
                        <h1 className='td-text'>GTBank</h1>
                        <span className='td-text'>-0130086553</span>
                    </div>
                </div>
            </td>
            <td className='td-text'>12 months</td>
            <td className='td-text'>Jul 17, 2023</td>
            <td className='td-text'>Jul 17, 2023</td>
            <td className='td-text'>
              <img src={process.env.PUBLIC_URL+"/images/btnLink.svg"} alt='active' />
            </td>
            <td className='td-text'>2 hours ago</td>
        </tr>
        <tr>
            <td className='td-text'>Brooklyn Simmons</td>
            <td className='td-text'>
                <div className='tbl-account'>
                    <img className='account-bank-logo' src={process.env.PUBLIC_URL+"/images/paymentBank.svg"} alt="" />
                    <div className='payment-account-text'>
                        <h1 className='td-text'>GTBank</h1>
                        <span className='td-text'>-0130086553</span>
                    </div>
                </div>
            </td>
            <td className='td-text'>12 months</td>
            <td className='td-text'>Jul 17, 2023</td>
            <td className='td-text'>Jul 17, 2023</td>
            <td className='td-text'>
   
                    <img src={process.env.PUBLIC_URL+"/images/btnApi.svg"} alt='active' />
            </td>
            <td className='td-text'>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <p>2 hours ago</p>
                    <img src={process.env.PUBLIC_URL+"/images/exportIcon.svg"} alt='active' />

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

export default Statements
