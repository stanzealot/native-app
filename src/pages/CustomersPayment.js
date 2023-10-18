import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CustomersInFlow from '../components/customers/CustomersInFlow';
import CustomersOutflow from '../components/customers/CustomersOutflow';

function CustomersPayment() {
    const [activeTab, setActiveTab] = useState('Inflow');
    const navigate = useNavigate()
  
    const handleBack =()=>{
      navigate('/data-customers')
    }
    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
    const renderContent = ()=>{
       switch(activeTab){
          case 'Inflow':
              return  <CustomersInFlow/>;
          case 'Outflow':
              return <CustomersOutflow />;
          default:
              return <CustomersInFlow/>;
       }
       
    }
    return (
      <div className='main-inner'>
          <div className='top_bar'>
              <div style={{cursor:"pointer"}} className="customer-back" onClick={handleBack} >
                  <img src={process.env.PUBLIC_URL+"/images/arrowBack.svg"} alt="arrow back"/>
                  <h1 className='customer-arrowBack'>Go Back</h1>
              </div>
              <div className='data-nav-btn'>
                <span onClick={() => handleTabClick('Inflow')} className={`dataItembtn ${activeTab === 'Inflow' ? 'active' : ''}`} >Inflow</span>
                <span onClick={() => handleTabClick('Outflow')} className={`dataItembtn ${activeTab === 'Outflow' ? 'active' : ''}`}>Outflow </span>
                {/* <span onClick={() => handleTabClick('transaction')} className={`dataItembtn ${activeTab === 'transaction' ? 'active' : ''}`}>Transactions</span>
                <span onClick={() => handleTabClick('statement')} className={`dataItembtn ${activeTab === 'statement' ? 'active' : ''}`} >Statement</span> */}
              </div>
          </div>
         
          {renderContent()}
          
      </div>
    )
}

export default CustomersPayment
