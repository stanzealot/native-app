import React, { useEffect, useState } from 'react'
import NameControl from '../components/common/NameControl'
import '../components/payment/payment.scss'
import SettlementTable from '../components/payment/SettlementTable'
import PayoutOverviewModal from '../components/payment/PayoutOverviewModal'
import NewTransferModal from '../components/payment/NewTransferModal'
import { useSelector } from "react-redux";
import axios from 'axios';
import { toast } from 'react-toastify';

function PaymentSettlement() {
  useEffect(()=>{
    getCollection();
     
    // eslint-disable-next-line 
  },[]) 
  const [isPayout, setIsPayout] = useState(false)
  const [isNewTransaction, setNewTransaction] = useState(false)
  const {currentUser} = useSelector((state)=>state?.user)
  const [selectedRowData, setSelectedRowData] = useState(null);

  const [payoutData,setPayoutData] = useState([]);

  const toggleModal =()=>{
    setIsPayout(!isPayout)
  }
  const toggleTransfer = ()=>{
    setNewTransaction(!isNewTransaction);
  }
  
  const getCollection = async ()=>{
      try{
       
        const headers = {  
          "api_key": currentUser?.user?.merchantKey, 
          "sweetapi": currentUser?.user?.merchantCode  
        }

        const data = {
          category: "payout", //required  
          currency: "NGN", // required
          limit:5 // optional
        }
        
        const url = 'https://1esi7ghq4i.execute-api.us-east-2.amazonaws.com/production/transactions';
        let res = await axios.post(url,{...data},{
          headers:headers
        })
        
        const newValue = res?.data?.data
        setPayoutData(newValue);
     
        
        // toast.success(res.data.message);
      }catch(err){
        
        console.log(err);
        const errorMessage = err?.response?.data?.data?.message || "Server error"
        toast.error(errorMessage);

      }
  }
  return (
    
      <div className='main-inner'>
          <NameControl 
          btn
          name="Payout"
          desc="Manage all your settlements here"
          />
          <SettlementTable payoutData={payoutData} setIsPayout={setIsPayout} toggleTransfer={toggleTransfer} setSelectedRowData={setSelectedRowData}/>
          {isPayout && <PayoutOverviewModal toggleModal={toggleModal} data={selectedRowData} />}
          {isNewTransaction && <NewTransferModal setNewTransaction={setNewTransaction}  />}
      </div>
        
  )
}

export default PaymentSettlement
