import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { useSelector } from 'react-redux';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import AsideView from "../components/login/AsideView";
import "../components/signup/SignUp.scss";
import { apiPost } from "../components/utilities/api/axios";

function SignUpPage() {
  const initialState = {
    name: '',
    business_email: '',
    business_name: '',
    phone: '',
    password: '',
    confirmPassword: '',
    website: 'getflick.app',
    referral_code: '12345'
  };
  const navigate = useNavigate();
  const {currentUser} = useSelector((state)=>state?.user)
  const [country, setCountry] = useState("");
  const [business_type, setBusiness] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [formData,setFormData] = useState(initialState)
  const [showPassword, setShowPassword] = useState(false);
  const [showConPassword, setShowConPassword] = useState(false);
  const [isInputClicked, setIsInputClicked] = useState({
    name: false,
    businessName: false,
    password: false,
    confirmPassword: false,
  });


  useEffect(()=>{
    if(currentUser?.user) navigate("/getstarted");
  })
 
 

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleToggleConfirmPassword = () => {
    setShowConPassword(!showConPassword);
  };

  const handleSelectBusiness = (e) => {
    setBusiness(e.target.value);
  };
  const handleSelectCountry = (e) => {
    setCountry(e.target.value);
  };
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  const  handleInputChange = (event)=>{
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  const handleInputContainerClick = (inputName) => {
    setIsInputClicked((prevState) => ({
      ...prevState,
      [inputName]: true,
    }));
  };

  const handleInputBlur = (inputName) => {
    setIsInputClicked((prevState) => ({
      ...prevState,
      [inputName]: false,
    }));
  };
  
   

  const handleValidation = () => {
    const { password, confirmPassword, name, business_email,business_name,phone,website} = formData;
    if ( password !== confirmPassword) {
      toast.error(
        "Password and confirmPassword should be same.",
      );
      return false;
    } else if(password ===""){
      toast.error(
        "Password and confirmPassword should be same.",
      );
      return false;
    }else if (name.length <= 3) {
      toast.error(
        "name must be above 3 characters.",
      );
      return false;
    } else if (password.length < 8) {
      toast.error(
        "Password must be above 7 characters.",
      );
      return false;
    } else if (business_email.length < 11) {
      toast.error("business_email must be above 10 character");
      return false;
    }else if(business_name.length < 5){
      toast.error("business_name must be above 5 character");
      return false;
    }else if(phone.length < 10){
      toast.error("phone must be greater than 10.");
      return false;
    }
    return true;

  };
  const handleSubmit = async (e)=>{

    e.preventDefault();
    
    try{
      if(handleValidation()){
        setIsLoading(true);
        const result = {...formData,country,business_type,}
        const data = {...result}
        const url = 'https://zunpla6tnl.execute-api.us-east-2.amazonaws.com/production/signup'
        const res = await apiPost(url,data,{},true,{})
        setIsLoading(false);
        toast.success("Successfully signUp: Please check your email to verify your Account");
        setFormData(initialState);
        // navigate("/login");
      }
    }catch(err){
      setIsLoading(false);
      console.log(err);
      const errorMessage = err?.response?.data?.msg || "failed to register"
      toast.error(errorMessage || "Failed to register")
      console.log(err)
    }
  }
  return (
    <div className="dashboard-container">
      <div className="aside-container">
        <AsideView />
      </div>
      <div className="dashboard-main">
        <div className="sign-up-wrapper">
          <p className="sign-up-title">Create your Flick dashboard</p>
          <form onSubmit={handleSubmit} className="sign-up-form">
            <div className="sign-up-inner">
              <div className="double-input-container">
                <div className="input_container" onBlur={() => handleInputBlur('name')}>
                  <div className={`input-group ${isInputClicked.name ? 'clicked' : ''}`} onClick={() => handleInputContainerClick('name')} >
                    <input type="text" name="name" placeholder="Mide Ajibade" className="input-name"  onChange={handleInputChange} required/>
                  </div>
                  <p className={`input-label ${isInputClicked.name ? 'clicked' : ''}`}>Name</p>
                </div>
                <div className="input_container" onBlur={() => handleInputBlur('businessName')}>
                  <div className={`input-group ${isInputClicked.businessName ? 'clicked' : ''}`} onClick={() => handleInputContainerClick('businessName')} onBlur={() => handleInputBlur('businessName')}>
                    <input  onChange={handleInputChange} type="text" name="business_name" placeholder="Iyakoyo Canteen" className="input-name" required/>
                  </div>
                  <p className={`input-label ${isInputClicked.businessName ? 'clicked' : ''}`}>Business Name</p>
                </div>
              </div>
              <div className="double-input-container">
                <div className="select-group">
                  <select
                    className="input-select-field"
                    value={business_type}
                    onChange={handleSelectBusiness}
                    required
                  >
                    <option value="" disabled selected hidden> Business Type</option>
                    <option value="Merchant">Merchant</option>
                    <option value="Fintech">Fintech</option>
                    <option value="E-Commerce">E-Commerce</option>
                  </select>
                </div>
                <div className="select-group">
                  <select
                    className="input-select-field"
                    value={country}
                    onChange={handleSelectCountry}
                    required
                  >
                    <option value="" disabled selected hidden>Country</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Kenya">Kenya</option>
                  </select>
                </div>
              </div>
              <div>
                <div className="select-code">
                  <select
                    className="input-select-code"
                    value={country}
                    onChange={handleSelectCountry}
                    required
                  >
                    <option value="Nigeria">
                      <img src={process.env.PUBLIC_URL + "/images/flag-code.svg"} alt="logo"/>
                    </option>
                    <option value="Uganda">
                      <img
                        src={process.env.PUBLIC_URL + "/images/flag-code.svg"}
                        alt="logo"
                      />
                    </option>
                    <option value="Kenya">
                      <img
                        src={process.env.PUBLIC_URL + "/images/flag-code.svg"}
                        alt="logo"
                      />
                    </option>
                  </select>
                  <input
                    type="number"
                    placeholder="Phone Number"
                    name="phone"
                    className="input-phone-number"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <input
                className="input-field"
                type="email"
                placeholder="Business Email Address"
                name="business_email"
                onChange={handleInputChange}
              />
              <div className="double-input-container">
                <div className="input_container" onBlur={() => handleInputBlur('password')}>
                  <div className={`input-group ${isInputClicked.password ? 'clicked' : ''}`} onClick={() => handleInputContainerClick('password')} onBlur={() => handleInputBlur('password')} style={{justifyContent:"space-between"}}>
                    <input  onChange={handleInputChange} type={showPassword ? 'text' : 'password'} placeholder="Password (min. of 8 char)" name="password" className="input-name" required/>
                    <img onClick={handleTogglePassword} src="/images/eye.svg" alt="card" style={{width:"16px", height:"16px"}}/>
                  </div>
                  <p className={`input-label ${isInputClicked.password ? 'clicked' : ''}`}>Password</p>
                </div>
                <div className="input_container" onBlur={() => handleInputBlur('confirmPassword')}>
                  <div className={`input-group ${isInputClicked.confirmPassword ? 'clicked' : ''}`} onClick={() => handleInputContainerClick('confirmPassword')} onBlur={() => handleInputBlur('confirmPassword')} style={{justifyContent:"space-between"}}>
                    <input  onChange={handleInputChange} type={showConPassword ? 'text' : 'password'} placeholder="Confirm Password" name="confirmPassword" className="input-name" required/>
                    <img onClick={handleToggleConfirmPassword} src="/images/eye.svg" alt="card" style={{width:"16px", height:"16px"}}/>
                  </div>
                  <p className={`input-label ${isInputClicked.confirmPassword ? 'clicked' : ''}`}>Confirm Password</p>
                </div>
              </div>
             
              <input className="input-field" type="text" placeholder="Referral Code (Optional)" name="name"/>
            </div>
            <div className="signUp-checkbox">
              <input type="checkbox" className="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
              <h2 className="signUp-checkbox-text">
                I consent to Flick's <span><a href="https://getflick.app/privacy-policy">Privacy Policy </a></span> and <span>
                  <a href="https://getflick.app/terms-conditions">Terms of Use.</a></span>
              </h2>
            </div>
            <button className="btn" style={{background:"#2EBDB6"}}>
              {isLoading ? (
                  <BeatLoader
                    color="#FFF"
                    cssOverride={{}}
                  />              ) : (
                <>
                  Join Flick
                  <img src={process.env.PUBLIC_URL + "/images/arrow-forward.svg"} alt="arrow btn" style={{ display: "inline", marginLeft: "5px" }}/>
                </>
              )}
            </button>
            <p className="dont-have-account">
              Have an account?
              <Link to={"/"} className="signIn-link">Sign In
                <img style={{ display: "inline" }} src={process.env.PUBLIC_URL + "/images/coloredArrowForward.svg"} alt="colored"/>
              </Link>
            </p>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SignUpPage;
