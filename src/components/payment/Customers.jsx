import React from 'react'
import '../common/tables.scss'
import TableHeaderSearch from '../common/TableHeaderSearch'
import { useNavigate } from 'react-router-dom'
function Customers() {
 const navigate = useNavigate();
 const handleCustomer = ()=>{
    navigate('/payment-customer')
 }
  return (
    <div className='balance-overview'>
        <table className='tbl'>
            <tr>
                <td colSpan="7" className='tbl-heading'>
                    <TableHeaderSearch 
                    title="Customers"
                    placeholder="Search by name or date..."
                    />
                    
                </td>
            </tr>
            <tr>
                <th className='th-text'>Name</th>
                <th className='th-text'>Status</th>
                <th className='th-text'>Phone number</th>
                <th className='th-text'>Date added</th>
                <th className='th-text'>Email address</th>
            </tr>

            <tr>
                <td>
                    <div className='customer-name'>
                        <img className='customer-name-img' src={process.env.PUBLIC_URL+"/images/tope.svg"} alt="customer" />
                        <h2 className='customer-name-text'>Brooklyn Simmons</h2>
                    </div>
                </td> 
                <td>
                    <div className='customer-active'>
                        <img className='customer-active-img' src={process.env.PUBLIC_URL+"/images/avataOnlineIndicator.svg"} alt="customerActive" />
                        <p className='td-text'>Active</p>
                        
                    </div>
                </td>
                <td className='td-text'>08136902667</td>
                <td className='td-text'>2 hours ago</td>
                <td>
                    <div className='customer-email'>
                        <p className='td-text'>jackson.graham@sample.com</p>
                        <img onClick={handleCustomer} src={process.env.PUBLIC_URL+"/images/eye.svg"} alt="eye" />
                    </div>
                </td>
            </tr>
        </table>
    </div>
  )
}

export default Customers
