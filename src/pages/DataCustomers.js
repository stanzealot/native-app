import React, { useState } from 'react'
import NameControl from '../components/common/NameControl'
import TableHeaderSearch from '../components/common/TableHeaderSearch'
import { useNavigate } from 'react-router-dom'
import SpendLimits from '../components/modals/SpendLimits'
import DailyLimit from '../components/modals/DailyLimit'
import SpendSuccess from '../components/modals/SpendSuccess'

function DataCustomers() {
  const [isSpend,setIsSpend] = useState(false)
  const [isDailyLimit, setIsDailyLimit]  = useState(false)
  const [isSuccess,setIsSuccess] = useState(false)
  const navigate = useNavigate();
  const handleClick = (e)=>{
    e.stopPropagation();
    navigate('/customer-payment')
  }
  const handleDelete = (e)=>{
    e.stopPropagation();
    
  }
  const handleData = (e)=>{
    e.stopPropagation();
    navigate('/data-customer')
  }
  const toggleSpend = (e)=>{
    e.stopPropagation();
    setIsSpend(!isSpend)
  }
  return (
   
    <div className='main-inner'>
        <NameControl 
        name="Vula customers"
        desc="Manage all your customers here"
        btn
        />
        <div className='balance-overview'>
          <table className='tbl'>
          <tr>
              <td colSpan="7" className='tbl-heading'>
                  <TableHeaderSearch 
                  title="Customers"
                  placeholder="Search by name or date..."
                  numUsers={12}
                  users={"users"}
                  btnFirst
                  />     
              </td>
          </tr>
          <tr>
              <th className='th-text'>Name</th>
              <th className='th-text'>Date Registered</th>
              <th className='th-text'>Email Address</th>
              <th className='th-text'>Budget Limit</th>
              <th className='th-text'>Actions</th>
             
          </tr>

            <tr>
              <td>
                  <div className='customer-name'>
                      <img className='customer-name-img' src={process.env.PUBLIC_URL+"/images/tope.svg"} alt="customer" />
                      <h2 className='customer-name-text'>Brooklyn Simmons</h2>
                  </div>
              </td> 
              <td className='td-text'>2 hours</td>
             
              <td className='td-text'>jackson.graham@sample.com</td>
              <td className='td-text'>
                <div  style={{display:"flex",gap:"12px",alignItems:"center"}}>
                    <img onClick={toggleSpend} src='/images/customers/info-circle.svg' alt='pencile' style={{cursor:"pointer"}} />
                    <span style={{color:"#101828",fontWeight:"font-weight:500"}}>N10,000,000</span>
                </div>
              </td>
              <td className='td-text'>
                <div  style={{display:"flex",gap:"12px",alignItems:"center"}}>
                    <img onClick={handleClick} src='/images/customers/payments.svg' alt='pencile' />
                    <img onClick={handleData} src='/images/customers/datas.svg' alt='pencile' />
                </div>
              </td>
            </tr>
          </table>
        </div>

        {isSpend && <SpendLimits setIsSpend={setIsSpend} setIsDailyLimit={setIsDailyLimit}/>}
        {isDailyLimit && <DailyLimit setIsSpend={setIsSpend} setIsDailyLimit={setIsDailyLimit} setIsSuccess={setIsSuccess}/>}
        {isSuccess && <SpendSuccess setIsSpend={setIsSpend} setIsDailyLimit={setIsDailyLimit} setIsSuccess={setIsSuccess} />}
    </div>
      
  )
}

export default DataCustomers
