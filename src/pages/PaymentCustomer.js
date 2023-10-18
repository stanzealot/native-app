import React, { useState } from 'react'
import NameControl from '../components/common/NameControl'
import '../components/common/Pages.scss'
import CustomerOverView from '../components/common/CustomerOverView';
import CustomerFlow from '../components/payment/CustomerFlow';
import CustomerOutFlow from '../components/payment/CustomerOutFlow';
function PaymentCustomer() {
    const [btnActive,setBtnActive] = useState(false);
    let [selectedButton, setSelectedButton] = useState("Inflow Payments");
    
   
    const handleButtonClick = (button) => {
      setSelectedButton(button);
    };

    const renderContent = () => {
        if(selectedButton === 'Inflow Payments') return <CustomerFlow btnFirst users={"users"} numUsers={100} />;
        if(selectedButton ==='Outflow Payments') return <CustomerOutFlow/>;
    };
  return (
   
            <div className='main-inner'>

                <NameControl 
                customer
                btnFirst="Inflow Payments"
                btnSecond="Outflow Payments"
                btnActive={btnActive} 
                handleButtonClick ={handleButtonClick}
                backbtnPath="/payment-customers"
                />
               <CustomerOverView />
               {renderContent()}
            </div>
     
  )
}

export default PaymentCustomer
