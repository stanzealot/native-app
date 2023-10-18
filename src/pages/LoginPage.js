import React, { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import AsideView from "../components/login/AsideView";
import "../components/signup/SignUp.scss";
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from "react-redux";
import { loginFailure,loginStart,loginSuccess } from "../redux/userSlice";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from 'react-toastify';
import { apiPost } from "../components/utilities/api/axios";


function LoginPage() {

  const navigate = useNavigate();
  const {currentUser} = useSelector((state)=>state?.user)

  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [formData,setFormData] = useState({
    business_email:"",
    password:""
  });
  const [showPassword, setShowPassword] = useState(false);
 

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const dispatch = useDispatch();

  useEffect(()=>{
    if(currentUser?.user) navigate("/getstarted");
  });
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const  handleChange = (event)=>{
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }
  

  const handleValidation = () => {
    const {business_email, password} = formData;
    if (business_email.length < 11) {
       
      toast.error("business_email must be above 10 character");
      return false;
     }
     if(password.length < 8){
      toast.error("password must be above 7 character");
      return false;
     }
    
      return true;

  };

  const handleLogin = async (e)=>{
    e.preventDefault();
    
    try{
      if(handleValidation()){ 
        console.log("validation true") 
        dispatch(loginStart());
        setIsLoading(true);
        const data = {...formData}
        
        const url = 'https://zunpla6tnl.execute-api.us-east-2.amazonaws.com/production/login'
        const res = await apiPost(url,data,{},true,{})
        console.log(res.data);
        dispatch(loginSuccess(res.data))
        setIsLoading(false);
        navigate('/getstarted'); 
      }
    }catch(err){
      setIsLoading(false);
      dispatch(loginFailure());
      const errorMessage = err?.response?.data?.msg || "failed to register"
      toast.error(errorMessage || "Failed to register")
    }
  }

  return (
    <div className="dashboard-container">
      <div className="aside-container">
        <AsideView />
      </div>
      <div className="dashboard-main">
        <div className="sign-up-wrapper">
          <p className="sign-up-title">Log in to your Flick dashboard</p>
          <form onSubmit={handleLogin} className="sign-up-form">
            <div className="sign-up-inner">
              <input
                className="input-field"
                type="email"
                placeholder="Email Address"
                name="business_email"
                onChange={handleChange}
                required
              />
              <div className="input_container" style={{width:"100%"}}>
                <div className="input-group" style={{justifyContent:"space-between"}}>
                  <input type={showPassword ? 'text' : 'password'} placeholder="Enter Password (min. of 8 character)" name="password" className="input-name" onChange={handleChange} required/>
                  <img src="/images/eye.svg" alt="card" style={{width:"16px", height:"16px"}} onClick={handleTogglePassword}/>
                </div>
                <p className="input-label">Password</p>
              </div>
            </div>
            <div className="signUp-checkbox">
                <div style={{display:"flex", gap:"8px"}}>
              <input type="checkbox" className="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
              <h2 className="signUp-checkbox-text">Remember for 30 days </h2>
                </div>
              <div>
              <Link to='/password-reset' className='login-reset-link'>Reset Password <img style={{display:"inline"}} src={process.env.PUBLIC_URL + "/images/arrowUpward.svg"} alt="arrow"/> </Link>
              </div>
            </div>
            <button className="btn" style={{background:"#2EBDB6"}}>
              {isLoading ? (
                <BeatLoader
                color="#FFF"
                cssOverride={{}}
              />
                
              ) : (
                <>
                  Log in
                  <img src={process.env.PUBLIC_URL + "/images/arrow-forward.svg"} alt="arrow btn" style={{ display: "inline", marginLeft: "5px" }}/>
                </>
              )}
            </button>
            <p className="dont-have-account">
            Don’t have an account? 
              <Link to={"/signUp"} className="signIn-link">Sign Up
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

export default LoginPage;
