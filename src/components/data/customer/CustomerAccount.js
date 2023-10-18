import React from 'react'
import Details from '../../common/Details'
import '../../common/Pages.scss'
import TableHeaderSearch from '../../common/TableHeaderSearch'
import CustomerOverView from '../../common/CustomerOverView'
import CustomerDetails from '../../common/CustomerDetails'
function CustomerAccount() {
  return (
    <div className='data_customer'>
        <CustomerOverView data customer />
        <CustomerDetails 
        email="mide@flick.app"
        phone="08136902667"
        linked="11"
        date="Sep 5, 2023"
        synced="Sep 5, 2023"
        />
        
       <div className='balance-overview'>
          <table className='tbl'>
          <tr>
              <td colSpan="7" className='tbl-heading'>
                  <TableHeaderSearch
                  title="Accounts"
                  placeholder="Search by bank..."
                  numUsers={3}
                  users={"connected"}
                  btnFirst
                  sync
                  />     
              </td>
          </tr>
          <tr>
           
              <th className='th-text'>Account</th>
              <th className='th-text'>Balance</th>
              <th className='th-text'>Total Income</th>
              <th className='th-text'>Currency</th>
              <th className='th-text'>Transactions</th>
              <th className='th-text'>Payments</th>
          </tr>

          <tr>
            <td>
                <div className='customer-name'>
                    <img className='customer-name-img' src={process.env.PUBLIC_URL+"/images/gt-bank.svg"} alt="customer" />
                    <h2 className=' td-text'>GTBank | 0130086553</h2>
                </div>
            </td> 
            <td className='customer-name-text'>NGN 848,67.06</td>
            <td className='td-text'>NGN 848,67.06</td>
            <td>
                <div className='flag'>
                  <img src={process.env.PUBLIC_URL+"/images/NG.svg"} alt="flag" />
                  <h1 className='ng'>NGN</h1>
                </div>
            </td>
            <td className='td-text'>0</td>
            <td className='td-text'>NGN 848,67.06</td>
            
            
        </tr>
          </table>
        </div>
    </div>
  )
}

export default CustomerAccount
