import React, { useState } from 'react'
import NameControl from '../components/common/NameControl'
import CustomerOverView from '../components/common/CustomerOverView'
import TransactionProfile from '../components/data/TransactionProfile'
import Details from '../components/common/Details'
import CustomerAccount from '../components/data/customer/CustomerAccount'
import CustomerIdentity from '../components/data/customer/CustomerIdentity'
import CustomerTransaction from '../components/data/customer/CustomerTransaction'
import CustomerStatement from '../components/data/customer/CustomerStatement'
import { useNavigate } from 'react-router-dom'


function DataCustomerProfile() {
  const [activeTab, setActiveTab] = useState('account');
  const navigate = useNavigate()

  const handleBack =()=>{
    navigate('/data-customers')
  }
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  
  const renderContent = ()=>{
     switch(activeTab){
        case 'account':
            return  <CustomerAccount  />;
        case 'identity':
            return <CustomerIdentity />;
        case 'transaction':
            return <CustomerTransaction />;
        case 'statement':
            return <CustomerStatement />;
        default:
            return <CustomerAccount  />;
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
              <span onClick={() => handleTabClick('account')} className={`dataItembtn ${activeTab === 'account' ? 'active' : ''}`} >Account</span>
              <span onClick={() => handleTabClick('identity')} className={`dataItembtn ${activeTab === 'identity' ? 'active' : ''}`}>Identity</span>
              <span onClick={() => handleTabClick('transaction')} className={`dataItembtn ${activeTab === 'transaction' ? 'active' : ''}`}>Transactions</span>
              <span onClick={() => handleTabClick('statement')} className={`dataItembtn ${activeTab === 'statement' ? 'active' : ''}`} >Statement</span>
            </div>
        </div>
        
        {/* <CustomerOverView />

        <Details 
        email="mide@flick.ap"
        phone="08136902667"
        linked="11"
        date="Sep 5, 2023"
        synced="Sep 5, 2023"
        />
        <TransactionProfile /> */}
        {renderContent()}
    </div>
  )
}

export default DataCustomerProfile
