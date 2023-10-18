import React, { useEffect, useState } from "react";
import "../Settings.scss";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";

function Security() {
  const {currentUser} = useSelector((state)=>state?.user)
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    // getSettings(); 
    // eslint-disable-next-line 
  },[])
  const [oldPasswordVisible, setOldPasswordVisible] = useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [security,setSecurity] = useState();
  const [transferPreferences,setTransferPreferences] = useState({});
  const [transfer, setTransfer] = useState();
  const [password,setPassword] = useState({
    oldPassword:"",
     newPassword:"",
  })

  const toggleOldPasswordVisibility = () => {
    setOldPasswordVisible(!oldPasswordVisible);
  };

  const toggleNewPasswordVisibility = () => {
    setNewPasswordVisible(!newPasswordVisible);
  };

  const handlePassword = (e) => {
    const { name, value } = e.target;
    // Update the specific property in the bio state
    setPassword((password) => ({
      ...password,
      [name]: value,
    }));
  };


  const handleSecurity = (event) => {
    const newValue = event.target.value;
    setSecurity((prevValue) => {
    
      if (prevValue === newValue) {
        return ''; 
      } else {
        return newValue; 
      }
    });
  }
  const handleTransfer = (event) => {
    const checkboxName = event.target.name;
    const newValue = event.target.checked;
    setTransferPreferences((prevValues) => ({
      ...prevValues,
      [checkboxName]: newValue,
    }));
  }
  const handleTransferPre = (event) => {
    const newValue = event.target.value;
    setTransfer((prevValue) => {
    
      if (prevValue === newValue) {
        return ''; 
      } else {
        return newValue; 
      }
    });
  };

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
      if(res?.data?.data){

        const {security,transferPreferences} = res?.data?.data
        if(transferPreferences){
          if(transferPreferences.apiOnly){
             transfer = "apiOnly"
          }else if(transferPreferences.dashboardOnly){
             transfer="dashboardOnly"
          }else if(transferPreferences.apiAndDashboard){
           transfer="apiAndDashboard"
          }else if(transferPreferences.disableAll){
           transfer="disableAll"
          }
          setTransferPreferences(transferPreferences)
          setTransfer(transfer)
        }
        if(security){
          const {twoFactor} = security
          setSecurity(twoFactor)
        }
      }

    }catch(err){
      console.log(err)
      const errorMessage = err?.message || "unable to fetch data"
      toast.error(errorMessage || "unable to fetch data")
    }
  }
  


  const handleSubmit = async (e)=>{
    e.preventDefault()
    let combinedData;
    let pref;
    if(transfer === "apiOnly"){
      pref ={
        "apiOnly": true, 
        "dashboardOnly": false, 
        "apiAndDashboard": false, 
        "disableAll":false
      }
    } else if(transfer==="dashboardOnly"){
      pref ={
        "apiOnly": false, 
        "dashboardOnly": true, 
        "apiAndDashboard": false, 
        "disableAll":false
      }
    }else if(transfer==="apiAndDashboard"){
      pref ={
        "apiOnly": false, 
        "dashboardOnly": false, 
        "apiAndDashboard": true, 
        "disableAll":false
      }
    }else if(transfer==="disableAll"){
      pref ={
        "apiOnly": false, 
        "dashboardOnly": false, 
        "apiAndDashboard": false, 
        "disableAll":true
      }
    }
    try{
      setIsLoading(true);
      const headers = {  
        "api_key": currentUser.user.merchantKey, 
        "sweetapi": currentUser.user.merchantCode  
      }
      if(password.oldPassword==="" || password.newPassword===""){
         
        combinedData = {  
          security:{twoFactor:security || ""},
          transferPreferences: {...pref},
        };

      }else{
        combinedData = {
          ...password,
          security:{twoFactor:security || ""},
          transferPreferences: {...pref},
        };
      }
      
      console.log(combinedData)
      const url = 'https://1esi7ghq4i.execute-api.us-east-2.amazonaws.com/production/security-settings';
      let res = await axios.post(url,{...combinedData},{
        headers:headers
     })
     setIsLoading(false);
     toast.success(res.data.message);
    }catch(err){
      setIsLoading(false);
      console.log(err)
      const errorMessage = err?.response?.data?.message || "unable to update"
      toast.error(errorMessage);
    }
  }
  return (
    <div className="security">
      {console.log(security)}
      <div className="security-password">
        <div className="security-form-groups">
          <label className="lbl">Old password</label>
          <div className="password-input">
            <input
              type={oldPasswordVisible ? "text" : "password"}
              name="oldPassword"
              placeholder="***********"
              className="fixed-form-control"
              value={password?.oldPassword}
              onChange={handlePassword}
            />
            <img
              src={process.env.PUBLIC_URL + "/images/password-eye.svg"}
              alt="ic"
              onClick={toggleOldPasswordVisibility}
              className="eye-icon"
            />
          </div>
        </div>

        <div className="security-form-groups">
          <label className="lbl">New password</label>
          <div className="password-input">
            <input
              type={newPasswordVisible ? "text" : "password"}
              name="newPassword"
              placeholder="***********"
              className="fixed-form-control"
              value={password?.newPassword}
              onChange={handlePassword}
            />
            <img
              src={process.env.PUBLIC_URL + "/images/password-eye.svg"}
              alt="ic"
              onClick={toggleNewPasswordVisibility}
              className="eye-icon"
            />
          </div>
        </div>
      </div>
      <div className="settings-info-footer">
        <div className="middle-border">
          <div className="first-info-footer">
            <p className="info-footer-text">Security</p>
            <div className="spacing">
              <div className="fee-payment-checkbox">
                <input
                  type="radio"
                  name="twoFactor"
                  value="sms"
                  checked={security === 'sms'}
                  onChange={handleSecurity}
                />
                
                <h2 className="fee-checkbox-text">
                  Two factor authentication by sms
                </h2>
              </div>
              
              <div className="fee-payment-checkbox">
                <input
                  type="radio"
                  name="twoFactor"
                  value="email"
                  checked={security === 'email'}
                  onChange={handleSecurity}
                />
                <h2 className="fee-checkbox-text">
                Two factor authentication by email
                </h2>
              </div>
              <div className="fee-payment-checkbox">
              <input
                  type="radio"
                  name="twoFactor"
                  value="app"
                  checked={security === 'app'}
                  onChange={handleSecurity}
                />
                <h2 className="fee-checkbox-text">
                Two factor authentication by app
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="info-footer">
          <p className="info-footer-text">Transfer preferences</p>
          <div className="spacing">
            <div className="fee-payment-checkbox">
              <input
                type="radio"
                name="transfer"
                value="apiOnly"
                checked={transfer === 'apiOnly'}
                onChange={handleTransferPre}
              />
              {/* <input 
              type="checkbox" 
              className="checkbox" 
              name="apiOnly"
              checked={transferPreferences?.apiOnly}
              onChange={handleTransfer}
              /> */}
              <h2 className="fee-checkbox-text">
                Enable Transfers via API only
              </h2>
            </div>
            <div className="fee-payment-checkbox">
              <input
                type="radio"
                name="transfer"
                value="dashboardOnly"
                checked={transfer === 'dashboardOnly'}
                onChange={handleTransferPre}
              />
              {/* <input 
              type="checkbox" 
              className="checkbox" 
              name="dashboardOnly"
              checked={transferPreferences?.dashboardOnly}
              onChange={handleTransfer}
              /> */}
              <h2 className="fee-checkbox-text">
                Enable Transfers via Dashboard only.
              </h2>
            </div>
            <div className="fee-payment-checkbox">
              <input
                type="radio"
                name="transfer"
                value="apiAndDashboard"
                checked={transfer === 'apiAndDashboard'}
                onChange={handleTransferPre}
              />
              {/* <input 
              type="checkbox" 
              className="checkbox" 
              name="apiAndDashboard"
              checked={transferPreferences?.apiAndDashboard}
              onChange={handleTransfer}
              /> */}
              <h2 className="fee-checkbox-text">
                Enable Transfers via API and Dashboard.{" "}
              </h2>
            </div>
            <div className="fee-payment-checkbox">
               <input
                type="radio"
                name="transfer"
                value="disableAll"
                checked={transfer === 'disableAll'}
                onChange={handleTransferPre}
              />
              {/* <input 
              type="checkbox" 
              className="checkbox" 
              name="disableAll"
              checked={transferPreferences?.disableAll}
              onChange={handleTransfer}
              /> */}
              <h2 className="fee-checkbox-text">Disable all transfers. </h2>
            </div>
          </div>
        </div>
      </div>
      <button onClick={handleSubmit} className="btn" style={{width:"fit-content"}}>
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

export default Security;
