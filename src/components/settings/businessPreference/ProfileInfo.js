import React, { useEffect, useRef, useState } from "react";
import "../Settings.scss";
import axios from "axios";
import { toast } from 'react-toastify';
import { useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";

function ProfileInfo() {
  useEffect(()=>{
    // getMerchantInfo(); 
    // eslint-disable-next-line 
  },[])
  const {currentUser} = useSelector((state)=>state?.user)
  const [country, setCountry] = useState("");
  const [files, setFiles] = useState(null);
  const inputRef = useRef();
  const [bio,setBio] = useState({});
  const [profilInfo,setProfileInfo] = useState({
    bizPhone:"",
    supportEmail:"",
    business_email:"",
    bizAddress:"",
    supportPhone:""
  })
  const [checkboxValues, setCheckboxValues] = useState({});
  const [fprValue, setFprValue] = useState();
  const [ypemValue, setYpemValue] = useState();
  const [preview, setPreview] = useState()
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!files) {
        setPreview(undefined)
        return
    }
    const objectUrl = URL.createObjectURL(files)
    setPreview(objectUrl)

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
}, [files])
  const handleInputChanges = (e) => {
    const { name, value } = e.target;
    // Update the specific property in the bio state
    setBio((prevBio) => ({
      ...prevBio,
      [name]: value,
    }));
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileInfo((prevProfileInfo) => ({
      ...prevProfileInfo,
      [name]: value,
    }));
  };
  const handleCheckboxChange = (event) => {
    const checkboxName = event.target.name;
    const newValue = event.target.checked;

    setCheckboxValues((prevValues) => ({
      ...prevValues,
      [checkboxName]: newValue,
    }));
  }
  
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    if (!event.dataTransfer.files || event.dataTransfer.files.length === 0) {
      setFiles(undefined)
      return
  }

  // I've kept this example simple by using the first image instead of multiple
  setFiles(event.dataTransfer.files[0])
  
  };
  const handleFileChange = (e)=>{
    if (!e.target.files || e.target.files.length === 0) {
      setFiles(undefined)
      return
  }

  // I've kept this example simple by using the first image instead of multiple
  setFiles(e.target.files[0])
   
}
  const handleFprRadioChange = (event) => {
    const newValue = event.target.value;
    setFprValue((prevValue) => {
    
      if (prevValue === newValue) {
        return ''; 
      } else {
        return newValue; 
      }
    });
  };
  const handleYpemRadioChange = (event) => {
    const newValue = event.target.value;
    setYpemValue((prevValue) => {
    
      if (prevValue === newValue) {
        return ''; 
      } else {
        return newValue; 
      }
    });

  };

  const getMerchantInfo = async()=>{
    let frpValues;
    let ypemValues;
    try{
     
      const headers = {  
        "api_key": currentUser?.user?.merchantKey, 
        "sweetapi": currentUser?.user?.merchantCode  
      }
       const url = 'https://1esi7ghq4i.execute-api.us-east-2.amazonaws.com/production/merchant-info';
       let res = await axios.get(url,{
        headers:headers
      })
      setBio(res?.data?.data);
      console.log(res.data.data)

      
      const { FPR, YPEM,phone,supportEmail,business_email,bizAddress,supportPhone} = res?.data?.data
      
      setProfileInfo({
        bizPhone: phone || "",
        supportEmail: supportEmail || "",
        business_email: business_email || "",
        bizAddress: bizAddress || "",
        supportPhone: supportPhone || ""
      });
      if(FPR){

        const settingsChecked = {
          customer: FPR.customer || "",
          merchant: FPR.merchant || "",
          bankAccount: YPEM.bankAccount || "",
          payoutBalance: YPEM.payoutBalance || "",
        };
        if(FPR?.customer){
          frpValues = "customer"
        }else if(FPR.merchant){
          frpValues="merchant"
        }
        setCheckboxValues(settingsChecked)
        setFprValue(frpValues);
      }

      if(YPEM){
        if(YPEM?.bankAccount){
          ypemValues = "bankAccount"
        }else if(YPEM.payoutBalance){
          ypemValues = "payoutBalance"
        }
        setYpemValue(ypemValues);
      }
         
    }catch(err){
      console.log(err);
      const errorMessage = err?.message || "unable to fetch data"
    }
  }

  

  const handleSubmit = async (e)=>{
    e.preventDefault();
    let FPR;
    let YPEM;
    try{
      const headers = {  
        "api_key": currentUser.user.merchantKey, 
        "sweetapi": currentUser.user.merchantCode  
      }
      setIsLoading(true);

     if(fprValue === "merchant"){
        FPR ={
          merchant:true,
          customer:false
        }
      }else if(fprValue === "customer"){
        FPR ={
          merchant:false,
          customer:true
        }
      }else {
        FPR ={
          merchant:false,
          customer:false
        }
      }
      
      if(ypemValue === "bankAccount"){
        YPEM ={
          bankAccount:true,
          payoutBalance:false
        }
      }else if(ypemValue === "payoutBalance"){
        YPEM ={
          bankAccount:false,
          payoutBalance:true
        }
      }else{
        YPEM ={
          bankAccount:false,
          payoutBalance:false
        }
      }
      const combinedData = {
        ...profilInfo,
        FPR:{...FPR},
        YPEM: {...YPEM},
      };
      
      const url = 'https://1esi7ghq4i.execute-api.us-east-2.amazonaws.com/production/update-profile';
      let res = await axios.post(url,{...combinedData},{
        headers:headers
      })
      setIsLoading(false);

      toast.success(res.data.message);
      
    }catch(err){
     
      setIsLoading(false);
      const errorMessage = err?.response?.data?.data?.message || "Server error"
      toast.error(errorMessage);

    }
  }

  const handleSelectBank = (e) => {
    setCountry(e.target.value);
  };
  return (
    <div className="profile-info">
      <div className="profile-form-border">
        <form onSubmit={handleSubmit} className="profile-form">
          <div className="profile-form-wrapper">
            <div className="profile-form-left">
              <div className="profile-form-groups">
                <label className="lbl">Business name</label>
                <input
                  type="text"
                  name="business_name"
                  placeholder="Flick"
                  className="fixed-form-control"
                  value={bio?.business_name}
                  readOnly
                />
              </div>
              <div className="profile-form-groups">
                <label className="lbl">Business phone number</label>
                <input
                  type="text"
                  name="bizPhone"
                  placeholder="+234 8136 90 2667"
                  value={profilInfo?.bizPhone}
                  className="form-control"
                  onChange={handleInputChange}
                />
              </div>
              <div className="profile-form-groups">
                <label className="lbl">Support email address</label>
                <input
                  type="text"
                  name="supportEmail"
                  placeholder="Oliva"
                  value={profilInfo?.supportEmail}
                  className="form-control"
                  onChange={handleInputChange}
                />
              </div>
              <div className="profile-form-groups">
                <label className="lbl">Country</label>
                <div className="form-select-group">
                  <select
                    className="input-select"
                    name="country"
                    value={bio?.country}
                    onChange={handleSelectBank}
                    disabled
                  >
                    {/* {allBankData.map((bank)=>(
                                      <option value={bank.name}>{bank.name}</option>
                                    ))} */}
                    <option value="Access">Nigeria</option>
                    <option value="Zenith">Uganda</option>
                    <option value="Uba">Kenya</option>
                  </select>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="profile-form-right">
              <div className="profile-form-groups">
                <label className="lbl">Business email address</label>
                <input
                  type="text"
                  name="business_email"
                  placeholder="finance@dthriz"
                  className="fixed-form-control"
                  value={profilInfo?.business_email}
                  readOnly
                />
              </div>
              <div className="profile-form-groups">
                <label className="lbl">Business address</label>
                <input
                  type="text"
                  name="bizAddress"
                  placeholder="Lagos, Nigeria"
                  className="form-control"
                  value={profilInfo?.bizAddress} 
                  onChange={handleInputChange}
                />
              </div>
              <div className="profile-form-groups">
                <label className="lbl">Support phone number</label>
                <input
                  type="text"
                  name="supportPhone"
                  placeholder="Oliva"
                  className="form-control"
                  value={profilInfo?.supportPhone}
                  onChange={handleInputChange}
                />
              </div>
              
            </div>
          </div>
            <button className="btn" style={{width:"fit-content"}}>
              {
                isLoading ? (
                  <BeatLoader
                  color="#FFF"
                  cssOverride={{}}
                />
                  
                ) : (

                  <>Save changes</>
                )
              }
            </button>
        </form>
        <div className="profile-info-footer">
          <div className="middle-border">
            <div className="first-info-footer">
              <p className="info-footer-text">Fee payment responsibility?</p>
              <div className="spacing">
                <div className="fee-payment-checkbox">
                  {/* <input onChange={handleCheckboxChange} name="customer" checked={checkboxValues?.customer} type="checkbox" className="checkbox" /> */}
                  <input
                    type="radio"
                    name="fpr"
                    value="customer"
                    checked={fprValue === 'customer'}
                    onChange={handleFprRadioChange}
                  />
                  <h2 className="fee-checkbox-text">
                    Make customers pay the transaction fees
                  </h2>
                </div>
                <div className="fee-payment-checkbox">
                  {/* <input onChange={handleCheckboxChange} name="merchant" checked={checkboxValues?.merchant} type="checkbox" className="checkbox" /> */}
                  <input
                    type="radio"
                    name="fpr"
                    value="merchant"
                    checked={fprValue === 'merchant'}
                    onChange={handleFprRadioChange}
                  />
                  <h2 className="fee-checkbox-text">
                    Charge me for the transaction fees
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="info-footer">
            <p className="info-footer-text">Your preferred earnings method?</p>
            <div className="spacing">
              <div className="fee-payment-checkbox">
                {/* <input onChange={handleCheckboxChange} name="bankAccount" checked={checkboxValues?.bankAccount} type="checkbox" className="checkbox" /> */}
                <input
                    type="radio"
                    name="ypem"
                    value="bankAccount"
                    checked={ypemValue === 'bankAccount'}
                    onChange={handleYpemRadioChange}
                  />
                <h2 className="fee-checkbox-text">Settle to my bank account</h2>
              </div>
              <div className="fee-payment-checkbox">
                {/* <input onChange={handleCheckboxChange} name="payoutBalance" checked={checkboxValues?.payoutBalance} type="checkbox" className="checkbox" /> */}
                 <input
                    type="radio"
                    name="ypem"
                    value="payoutBalance"
                    checked={ypemValue === 'payoutBalance'}
                    onChange={handleYpemRadioChange}
                  />
                <h2 className="fee-checkbox-text">
                  Settle to my payout balance
                </h2>
              </div>
            </div>
          </div> 
        </div>
      </div>
        <div className="settings-upload">
          <div className="profile-avatar">
              {
                files ?
                <img
                  src={preview}
                  alt="upload"
                />:
                <img
                
                  src="/images/avatarimage.jpeg"
                  alt="upload"
                />
              }
          </div>
          <div 
          className="click-upload"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          >
            <input 
            type="file"
            onChange={handleFileChange}
            hidden
            accept="image/png, image/jpeg, image/svg"
            ref={inputRef}
          />
          
            <img
              onClick={() => inputRef.current.click()}
              src={process.env.PUBLIC_URL + "/images/settings-upload.svg"}
              alt="upload"
              style={{cursor:"pointer"}}
            />
            {!files
              ?(
                <>
                <p className="click-text">
                  <span  onClick={() => inputRef.current.click()} style={{ color: "#1C716D",cursor:"pointer" }}>Click to upload</span> or drag
                  and drop
                </p>
                <p className="file">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                </>
              ):
              <p className="file"> click on the Save button on Left to save changes or select another photo</p>
            }
          </div>
        </div>

    </div>
  );
}

export default ProfileInfo;
