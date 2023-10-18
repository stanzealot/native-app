import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";

function Notifications() {
  useEffect(()=>{
    // getSettings();  
    // eslint-disable-next-line
  },[])
  const {currentUser} = useSelector((state)=>state?.user)

  const [transaction,setTransaction] = useState({
    emails:false,
    receipt:false
  });
  const [transfer,setTransfer] = useState({
    credit:false,
    debit:false
  });
  const [transNotPref,setTransNotPref] = useState({
    business_email:false,
    dasboard_users:false,
    specific_users:false
  });
  const [cardNotPref,setCardNotPref] = useState({
    newcard_C_T:false,
    all_card_transaction:false
  });
  const [isLoading, setIsLoading] = useState(false);



  const handleTransaction = (event) => {
    const checkboxName = event.target.name;
    const newValue = event.target.checked;
    
    setTransaction((prevValues) => ({
      ...prevValues,
      [checkboxName]: newValue,
    }));
  }
  const handleTransfer = (event) => {
    const checkboxName = event.target.name;
    const newValue = event.target.checked;

    setTransfer((prevValues) => ({
      ...prevValues,
      [checkboxName]: newValue,
    }));
  }
  const handleTransNotPref = (event) => {
    const checkboxName = event.target.name;
    const newValue = event.target.checked;
    setTransNotPref((prevValues) => ({
      ...prevValues,
      [checkboxName]: newValue,
    }));
  }
  
  const handleCardNotPref = (event) => {
    const checkboxName = event.target.name;
    const newValue = event.target.checked;

    setCardNotPref((prevValues) => ({
      ...prevValues,
      [checkboxName]: newValue,
    }));
  }

  const getSettings = async ()=>{
  
    try{
      
      const headers = {  
        "api_key": currentUser.user.merchantKey, 
        "sweetapi": currentUser.user.merchantCode  
      }
      const url = 'https://1esi7ghq4i.execute-api.us-east-2.amazonaws.com/production/profile-settings';
      let res = await axios.get(url,{
        headers:headers
      })

       const {card_notif_pref,transaction_notif_pref,transaction,transfer} = res?.data?.data
       if(card_notif_pref){
         setCardNotPref(card_notif_pref);
       }
       if(transaction_notif_pref){
         setTransNotPref(transaction_notif_pref)
      }
      if(transaction){
         setTransaction(transaction);
       }
       if(transfer){
         setTransfer(transfer)
       }
    }catch(err){
      const errorMessage = err?.message || "unable to fetch data"
    }
  }

  const handleSave = async (e)=>{
    e.preventDefault()
    try{

      const headers = {  
        "api_key": currentUser.user.merchantKey, 
        "sweetapi": currentUser.user.merchantCode  
      }
      setIsLoading(true);

      
      const requestData = {
        transaction: {
          ...transaction
        },
        transfer: {
          ...transfer
        }
      };
      
      console.log(requestData);
      
      const url = 'https://1esi7ghq4i.execute-api.us-east-2.amazonaws.com/production/notification-settings';
      let res = await axios.post(url,{...requestData},{
        headers:headers
     })
     
     
     setIsLoading(false);

     toast.success(res.data.message);
     
    }catch(err){
      console.log(err)
      setIsLoading(false);
      const errorMessage = err?.response?.data?.message || "unable to update"
      toast.error(errorMessage);
    }
  }

  return (
    <div className="notifications">
      <div className="notification-border">
        <div className="settings-info-footer">
          <div className="middle-border">
            <div className="first-info-footer" style={{marginRight:"104px"}}>
              <p className="info-footer-text">Transaction notifications</p>
              <div className="spacing">
                <div className="fee-payment-checkbox">
                  <input 
                  type="checkbox" 
                  className="checkbox" 
                  name="emails"
                  checked={transaction?.emails} 
                  onChange={handleTransaction}
                  />
                  <h2 className="fee-checkbox-text">Transaction emails </h2>
                </div>
                <div className="fee-payment-checkbox">
                  <input 
                  type="checkbox" 
                  className="checkbox" 
                  name="receipt"
                  checked={transaction?.receipt} 
                  onChange={handleTransaction}
                  />
                  <h2 className="fee-checkbox-text">Customer receipt </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="info-footer">
            <p className="info-footer-text">Transfer notifications</p>
            <div className="spacing">
              <div className="fee-payment-checkbox">
                <input 
                type="checkbox" 
                className="checkbox" 
                name="debit"
                checked={transfer?.debit} 
                onChange={handleTransfer}
                />
                <h2 className="fee-checkbox-text">Debit emails </h2>
              </div>
              <div className="fee-payment-checkbox">
                <input 
                type="checkbox" 
                className="checkbox" 
                name="credit"
                checked={transfer?.credit} 
                onChange={handleTransfer}
                />
                <h2 className="fee-checkbox-text">Credit emails </h2>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* <div className="settings-info-footer">
          <div className="middle-border">
            <div className="first-info-footer">
              <p className="info-footer-text">Transaction notifications preferences</p>
              <div className="spacing">
                <div className="fee-payment-checkbox">
                  <input 
                  type="checkbox" 
                  className="checkbox"
                  name="business_email"
                  checked={transNotPref?.business_email} 
                  onChange={handleTransNotPref}
                  />
                  <h2 className="fee-checkbox-text">Send to the business email address only</h2>
                </div>
                <div className="fee-payment-checkbox">
                  <input 
                  type="checkbox" 
                  className="checkbox" 
                  name="dasboard_users"
                  checked={transNotPref?.dasboard_users} 
                  onChange={handleTransNotPref}
                  />
                  <h2 className="fee-checkbox-text">Send to all dashboard users </h2>
                </div>
                <div className="fee-payment-checkbox">
                  <input 
                  type="checkbox" 
                  className="checkbox" 
                  name="specific_users"
                  checked={transNotPref?.specific_users} 
                  onChange={handleTransNotPref}
                  />
                  <h2 className="fee-checkbox-text">Send to specific users only </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="info-footer">
            <p className="info-footer-text">Card notifications</p>
            <div className="spacing">
              <div className="fee-payment-checkbox">
                <input 
                type="checkbox" 
                className="checkbox" 
                name="newcard_C_T"
                checked={cardNotPref?.newcard_C_T} 
                onChange={handleCardNotPref}
                />
                <h2 className="fee-checkbox-text">Notify me of new card creation or termination. </h2>
              </div>
              <div className="fee-payment-checkbox">
                <input 
                type="checkbox" 
                className="checkbox" 
                name="all_card_transaction"
                checked={cardNotPref?.all_card_transaction} 
                onChange={handleCardNotPref}
                />
                <h2 className="fee-checkbox-text">Notify me of all card transactions. </h2>
              </div>
            </div>
          </div>
        </div> */}
        <button onClick={handleSave} className="btn" style={{width:"fit-content", marginTop:"2rem"}}>
          {
            isLoading ? (
              <BeatLoader
              color="#FFF"
              cssOverride={{}}
            />
              
            ) : (
              <>
                Save changes
              </>
            )
          }
      </button>
    </div>
  );
}

export default Notifications;
