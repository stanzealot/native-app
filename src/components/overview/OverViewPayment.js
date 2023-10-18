import React, { useState } from 'react'
import './Overview.scss'
import PaymentBalance from './PaymentBalance'
import Chart from './Chart'
import OverviewPaymentTable from './OverviewPaymentTable'
import { useNavigate } from 'react-router-dom'
function OverViewPayment({data,balanceNav,balanceData,setGraphCurrency,setBalanceModal,collectionData}) { 
  const [selectedValue, setSelectedValue] = useState(); 
  
  const navigate = useNavigate()
  const handleNavBalance = ()=>{
    navigate('/balance')
  }

  const handleSelectChange = (e) => {
    const selectedOption = e.target.value;
    setGraphCurrency(selectedOption);
    setSelectedValue(selectedOption)
  };

   return (
    <div className='overview-payment'>
      
      <div className='payment-balance-container'>
        <div className='payment-bal-content'>
          <h1 className='balance-title'>Your balances</h1>
          <span onClick={handleNavBalance}>See all balance <img style={{display:"inline"}} src='/images/arrowUpward.svg' alt='balance'/></span>
        </div>
        <div className='payment-balance-wrapper'>
            {
              balanceData.length>0 && balanceData.map((balance,index)=>(

                <PaymentBalance 
                key={index}
                flag={`/images/${balance.currency==="NGN"?"NigeriaFlag":balance.currency==="USD"?"UsFlag":balance.currency==="KES"?"kenyaFlag":""}.svg`}
                country={balance.currency==="NGN"? "Nigerian Naira":balance.currency==="USD"?"United States Dollar":balance.currency==="KES"? "Kenyan Shilling":balance.currency}
                symbole="&#8358;"
                amount={balance.payout_balance}
                bgColor={balance.currency==="NGN"? "#FEF4F1":balance.currency==="USD"?"#F4FBFB":balance.currency==="KES"? "#FEF0F5":"#FEF4F1"}
                balanceNav={balanceNav}
                setBalanceModal={setBalanceModal}
                balance ={balance}
                />
              ))
            }
            {
              balanceData.length <= 0 &&

              <>
              <PaymentBalance 
              flag="/images/NigeriaFlag.svg"
              country="Nigerian Naira"
              symbole="&#36; "
              amount="0.00"
              bgColor="#FEF4F1"
              setBalanceModal={setBalanceModal}
              balanceNav={balanceNav}
              balance="NGN"
              />
              <PaymentBalance 
              flag="/images/UsFlag.svg"
              country="United States Dollar"
              symbole="&#36; "
              amount="0.00"
              bgColor="#F4FBFB"
              setBalanceModal={setBalanceModal}
              balanceNav={balanceNav}
              balance="USD"
              />
              {/* <PaymentBalance 
              flag="/images/kenyaFlag.svg"
              country="Kenyan Shilling"
              symbole="K"
              amount="0.00"
              bgColor="#FEF0F5"
              balanceNav={balanceNav}
              />  */}
              </>
            }
        </div>
      </div>
      <OverviewPaymentTable collectionData={collectionData} />
      <div className='overview-chart'>
        
          <div className='chart-heading'>
            <h1 className='chart-title'>Transactions over time</h1>
            <img src="/images/ellipsVertical.svg" alt='ellips' />
          </div>
          <div className='chart-select-currency'>
            <img src={`/images/${selectedValue==="USD"?"USD":selectedValue==="NGN"?"NGN":"USD"}.svg`} alt='currency'/>

            <select value={selectedValue} className='sel_drop' onChange={handleSelectChange}>
                <option value="USD">USD</option>
                <option value="NGN">NGN</option>
           </select>
            
           
          
          </div>
          <div className='chart'>

              <Chart 
              main 
              data={data}
              />
          </div>
       
      </div>
      
    </div>
  )
}

export default OverViewPayment
