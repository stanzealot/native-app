import React, { useEffect, useState } from "react";
import "../Settings.scss";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";


function EnableServices() {
  const {currentUser} = useSelector((state)=>state?.user)
  const [dataService,setDataService] = useState({
    identity:false,
    accounts_balance:false,
    transactions:false,
    income:false,
    statement:false
  });
  const [paymentService,setPaymentService] = useState({
    pay_with_flick:false,
    bank_transfer:false,
    ussd:false,
    banks:false
  });
  const [isLoading, setIsLoading] = useState(false);


  useEffect(()=>{
    // getSettings();  
     // eslint-disable-next-line 
  },[])
  
  const [checkboxValues, setCheckboxValues] = useState({});

  const getSettings = async ()=>{
    let transfer;
    try{
      
      const headers = {  
        "api_key": currentUser.user.merchantKey, 
        "sweetapi": currentUser.user.merchantCode  
      }
      const url = 'https://1esi7ghq4i.execute-api.us-east-2.amazonaws.com/production/profile-settings';
      let res = await axios.get(url,{
        headers:headers
      })

       const {data_services,payment_services} = res?.data?.data
       if(data_services){
         setDataService(data_services);
       }
       if(payment_services){
         setPaymentService(payment_services);
       }
    }catch(err){
      const errorMessage = err?.message || "unable to fetch data"
      toast.error(errorMessage || "unable to fetch data")
    }
  }
  const handleData = (event) => {
    const checkboxName = event.target.name;
    const newValue = event.target.checked;

    setDataService((prevValues) => ({
      ...prevValues,
      [checkboxName]: newValue,
    }));
  }

  const handlePayment = (event) => {
    const checkboxName = event.target.name;
    const newValue = event.target.checked;
    setPaymentService((prevValues) => ({
      ...prevValues,
      [checkboxName]: newValue,
    }));
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
        data_services: {
          ...dataService
        },
        payment_services: {
          ...paymentService
        },
      };
      

      
      const url = 'https://1esi7ghq4i.execute-api.us-east-2.amazonaws.com/production/enable-services';
      let res = await axios.post(url,{...requestData},{
        headers:headers
     })
     console.log(res.data);
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
    <div className="enable-services">
      <div className="services-wrapper-gap">
        <div className="services-wrapper">
          <div className="service-type-border">
            <div className="service-toogle">
              <p className="service-text">Data</p>
              <img src={process.env.PUBLIC_URL + "/images/service-toogle.svg"} alt='ic' />
            </div>
            <h3 className="choose-service">
              Choose your services when the toggle is on.
            </h3>
          </div>
          <div className="check-service">
            <div className="fee-payment-checkbox">
              <input 
              type="checkbox" 
              className="checkbox" 
              name="identity"
              checked={dataService?.identity} 
              onChange={handleData}
              />
              <h2 className="fee-checkbox-text">Identity </h2>
            </div>
            <div className="fee-payment-checkbox">
              <input 
              type="checkbox" 
              className="checkbox" 
              name="accounts_balance"
              checked={dataService?.accounts_balance} 
              onChange={handleData}
              />
              <h2 className="fee-checkbox-text">Accounts/Balance </h2>
            </div>
            <div className="fee-payment-checkbox">
              <input 
              type="checkbox" 
              className="checkbox" 
              name="transactions"
              checked={dataService?.transactions} 
              onChange={handleData}
              />
              <h2 className="fee-checkbox-text">Transactions </h2>
            </div>
            <div className="fee-payment-checkbox">
              <input 
              type="checkbox" 
              className="checkbox"
              name="income"
              checked={dataService?.income} 
              onChange={handleData} 
              />
              <h2 className="fee-checkbox-text">Income </h2>
            </div>
            <div className="fee-payment-checkbox">
              <input 
              type="checkbox" 
              className="checkbox" 
              name="statement"
              checked={dataService?.statement} 
              onChange={handleData} 
              />
              <h2 className="fee-checkbox-text">Statement </h2>
            </div>
          </div>
        </div>

        <div className="services-wrapper">
          <div className="service-type-border">
            <div className="service-toogle">
              <p className="service-text">Payment</p>
              <img src={process.env.PUBLIC_URL + "/images/service-toogle.svg"} alt='ic' />
            </div>
            <h3 className="choose-service">
              Choose your services when the toggle is on.
            </h3>
          </div>
          <div className="check-service">
            <div className="fee-payment-checkbox">
              <input 
              type="checkbox" 
              className="checkbox" 
              name="pay_with_flick"
              checked={paymentService?.pay_with_flick} 
              onChange={handlePayment} 
              />
              <h2 className="fee-checkbox-text">Pay with Flick </h2>
            </div>
            <div className="fee-payment-checkbox">
              <input 
              type="checkbox" 
              className="checkbox" 
              name="bank_transfer"
              checked={paymentService?.bank_transfer} 
              onChange={handlePayment} 
              />
              <h2 className="fee-checkbox-text">Bank transfer </h2>
            </div>
            <div className="fee-payment-checkbox">
              <input 
              type="checkbox" 
              className="checkbox" 
              name="ussd"
              checked={paymentService?.ussd} 
              onChange={handlePayment}
              />
              <h2 className="fee-checkbox-text">USSD </h2>
            </div>
            <div className="fee-payment-checkbox">
              <input 
              type="checkbox" 
              className="checkbox"
              name="banks"
              checked={paymentService?.banks} 
              onChange={handlePayment} 
              />
              <h2 className="fee-checkbox-text">Banks </h2>
            </div>
          </div>
        </div>
      </div>
      <button onClick={handleSave} className="btn" style={{width:"fit-content"}}>
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

export default EnableServices;
