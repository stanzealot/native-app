import React, {useEffect, useState} from 'react'
import "../Settings.scss";
import { useSelector } from "react-redux";
import axios from 'axios';
import { toast } from 'react-toastify';

function Webhooks() {
    const {currentUser} = useSelector((state)=>state?.user)
    useEffect(()=>{
      // getwebhook();  
       // eslint-disable-next-line 
    },[])
    const [oldPasswordVisible, setOldPasswordVisible] = useState(false);
    const [hash,setHash] = useState({
      url:"",
      secretHash:"",
      customHookUrl:"",
    
    }) 
    const [preference,setPreference] = useState({
      recRespInJSON:false,
      enableRetries:false,
      enableFrFailedTrans:false,
      enableResendFrmDash:false
    })
  
    const toggleOldPasswordVisibility = () => {
      setOldPasswordVisible(!oldPasswordVisible);
    };

    const handleHash = (e)=>{
      const { name, value } = e.target;
      // Update the specific property in the bio state
      setHash((password) => ({
        ...password,
        [name]: value,
      }));
    }

    const handlePreference = (event)=>{
      const checkboxName = event.target.name;
      const newValue = event.target.checked;

      setPreference((prevValues) => ({
        ...prevValues,
        [checkboxName]: newValue,
      }));
    }
    const getwebhook = async ()=>{
 
      try{
        
        const headers = {  
          "api_key": currentUser.user.merchantKey, 
          "sweetapi": currentUser.user.merchantCode  
        }
        const urls = 'https://1esi7ghq4i.execute-api.us-east-2.amazonaws.com/production/get-webhook';
        let res = await axios.get(urls,{
          headers:headers
        })
  
         const {url,preferences,customHookUrl,secretHash} = res?.data?.data
         if(url || customHookUrl || secretHash){
          const dataServicse = {url,customHookUrl,secretHash}
           setHash(dataServicse);
         }
         if(preferences){
           setPreference(preferences);
         }
      }catch(err){
        console.log(err)
        const errorMessage = err?.message || "unable to fetch data"
        
      }
    }

    const handlSubmit = async (e)=>{
      e.preventDefault()
      // let combinedData;
      // try{
      //   const headers = {  
      //     "api_key": currentUser.user.merchantKey, 
      //     "sweetapi": currentUser.user.merchantCode  
      //   }
      //   combinedData = {
      //     ...hash,
      //     preferences:{...preference}
      //   }

      //   console.log(combinedData)

      //   const url = 'https://1esi7ghq4i.execute-api.us-east-2.amazonaws.com/production/create-webhook';
      //  let res = await axios.post(url,{...combinedData},{
      //   headers:headers
      //   })
      //   console.log("error from inside: ",res)
      //   toast.success(res.data.message);
      // }catch(err){
      //   console.log(err)
      //   const errorMessage = err?.message || "unable to fetch data"
      //   toast.error(errorMessage || "unable to fetch data")
      // }
    }
  return (
    <div className='api-keys'>
        <div className='live-api'>
            <h3 className='api-key-text'>Live webhooks (dthriz limited)</h3>
        <div className='api-key-forms'style={{borderRight:"1px solid var(--flick-stroke, #eaecf0)", paddingRight:"56px"}}>
          <form onSubmit={handlSubmit} className="api-key-form" style={{borderBottom:"1px solid var(--flick-stroke, #eaecf0)"}}>
              <div className="api-form-groups">
                  <label className="lbl">URL</label>
                  <input
                    type="text"
                    name="url"
                    value={hash.url}
                    placeholder=""
                    className="form-control"
                    onChange={handleHash}
                  />
              </div>
              
              <div className="api-form-groups">
              <label className="lbl">Secret hash</label>
              <div className="copy-key">
                <input
                  type={oldPasswordVisible ? "text" : "password"}
                  name="secretHash"
                  placeholder=""
                  value={hash.secretHash}
                  className="form-control"
                  onChange={handleHash}

                />
                <img
                  src={process.env.PUBLIC_URL + "/images/password-eye.svg"}
                  alt="ic"
                  onClick={toggleOldPasswordVisibility}
                  className="copy-key-icon"
                />
              </div>
              </div>
              <div className="first-info-footer" style={{marginTop:"16px", marginBottom:"16px"}}>
                  <p className="info-footer-text">Webhook preferences</p>
                  <div className="spacing">
                    <div className="fee-payment-checkbox">
                      <input 
                      type="checkbox" 
                      className="checkbox" 
                      name="recRespInJSON"
                      checked={preference?.recRespInJSON} 
                      onChange={handlePreference}
                      />
                      <h2 className="fee-checkbox-text">
                      Receive Webhook response in JSON format{" "}
                      </h2>
                    </div>
                    <div className="fee-payment-checkbox">
                      <input 
                      type="checkbox" 
                      className="checkbox" 
                      name="enableRetries"
                      checked={preference?.enableRetries} 
                      onChange={handlePreference}
                      />
                      <h2 className="fee-checkbox-text">
                      Enable Webhook retries{" "}
                      </h2>
                    </div>
                    <div className="fee-payment-checkbox">
                      <input 
                      type="checkbox" 
                      className="checkbox" 
                      name="enableFrFailedTrans"
                      checked={preference?.enableFrFailedTrans} 
                      onChange={handlePreference}
                      />
                      <h2 className="fee-checkbox-text">
                      Enable webhook for failed transactions{" "}
                      </h2>
                    </div>
                    
                    <div className="fee-payment-checkbox">
                      <input 
                      type="checkbox" 
                      className="checkbox"
                      name="enableResendFrmDash"
                      checked={preference?.enableResendFrmDash} 
                      onChange={handlePreference} 
                      />
                      <h2 className="fee-checkbox-text">
                      Enable Resend Webhook from the Dashboard{" "}
                      </h2>
                    </div>
                  </div>
              </div>
              <div className="api-form-groups" style={{borderTop:"1px solid var(--flick-stroke, #eaecf0)"}}>
                    <label className="lbl" style={{marginTop:"16px"}}>Enter a custom hook URL</label>
                    <input
                      type="text"
                      name="customHookUrl"
                      value={hash.customHookUrl}
                      placeholder="Enter here"
                      className="form-control"
                      onChange={handleHash}
                    />
              </div>
              <button className="btn" style={{width:"fit-content", padding:"10px 16px", marginBottom: "258px"}}>
                Save
              </button>
        </form>
        </div>
        </div>

        <div className='test-api'>
        <h3 className='api-key-text' style={{width:"100%"}}>Test API keys</h3>
        <div className='api-key-forms'>
            <form className="api-key-form">
              <div className="api-form-groups">
                  <label className="lbl">URL</label>
                  <input
                    type="text"
                    name="name"
                    placeholder=""
                    className="form-control"
                  />
              </div>
              
              <div className="api-form-groups">
              <label className="lbl">Secret hash</label>
              <div className="copy-key">
                <input
                  type={oldPasswordVisible ? "text" : "password"}
                  name="oldPassword"
                  placeholder=""
                  className="form-control"
                />
                <img
                  src={process.env.PUBLIC_URL + "/images/password-eye.svg"}
                  alt="ic"
                  onClick={toggleOldPasswordVisibility}
                  className="copy-key-icon"
                />
              </div>
            </div>
          </form>
        <button className="btn" style={{width:"fit-content", padding:"10px 16px", marginBottom: "258px"}}>
        <p className="btn-text">Save</p>
      </button>
        </div>
        </div>
    </div>
  )
}

export default Webhooks