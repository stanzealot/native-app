import React,{useEffect, useState} from 'react'
import SignUpAccessItem from '../components/signup/SignUpAccessItem';
import '../components/signup/SignUp.scss'
import { Link } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FadeLoader } from 'react-spinners';
import { useSelector } from 'react-redux';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function SignUp() {
  
  const navigate = useNavigate();
  const {currentUser} = useSelector((state)=>state?.user)
  const [isChecked, setIsChecked] = useState(false);
  const [country,setCountry] = useState("")
  const [business_type,setBusiness] = useState("")
  const[isLoading,setIsLoading] = useState(false)
  const [formData,setFormData] = useState({
    name:'',
    business_email:"",
    business_name:"",
    phone:"",
    password:"",
    confirmPassword:"",
    website:"",
    referral_code:""
  })

  useEffect(()=>{
    if(currentUser?.user) navigate("/getstarted");
  })
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    
  };
  const handleSelectBusiness = (e)=>{
    setBusiness(e.target.value);
  }
  const handleSelectCountry = (e)=>{
    setCountry(e.target.value);
  }

  const  handleInputChange = (event)=>{
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }


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
    }else if(website.length < 10){
      toast.error("website must be greater than 10 characters");
      return false;
    }

    return true;

  };
  const handleSubmit = async (e)=>{

    e.preventDefault();
    
    try{
      if(handleValidation()){
        setIsLoading(true);
        const result = {...formData,country,business_type}
        const res = await axios.post('https://zunpla6tnl.execute-api.us-east-2.amazonaws.com/production/signup',{...result})
        setIsLoading(false);
        toast.success("Successfully signUp: Please check your email to verify your Account");
        
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
    <div className='signUp'>

      <div className='signUp-container'>
          <div className='signUp-main'>
              <img className='signUp-logo' src={process.env.PUBLIC_URL+"/images/flickLogo.svg"} alt="logo" />

              <div className="main-wrapper">
                  
                  <p className='signUp-form-title'>Create your Flick account</p>

                  {/* form */}
                  <form className='signup-form' onSubmit={handleSubmit}>
                    {/* input conta inner */}
                    <div className='signUp-form-wrapper'>
                        <div className='signup-form-left'>
                          <div className='form-groups'>
                              <label className='lbl'>Name*</label>
                              <input onChange={handleInputChange} type='text' name="name" placeholder='Enter your name' className='form-control' required />
                          </div>
                          <div className='form-groups'>
                              <label className='lbl'>Business Email*</label>
                              <input onChange={handleInputChange} type='text' name="business_email" placeholder='Enter your name' className='form-control' required />
                          </div>
                         
                          <div className='form-groups'>
                              <label className='lbl'>Country*</label>
                              <div className='form-select-group'>
                                <div className='form-select-line'></div>
                                <select 
                
                                  className="input-select"
                                  value={country}
                                  onChange={handleSelectCountry}
                                  required
                                  >
                                    <option value='' disabled selected hidden>country</option>
                                    
                                    <option value="Nigeria">Nigeria</option>
                                    <option value="Uganda">Uganda</option>
                                    <option value="Kenya">Kenya</option>

                                </select>
                              </div>
                          </div>
                          <div className='form-groups'>
                              <label className='lbl'>Business Type*</label>
                              <div className='form-select-group'>
                                <div className='form-select-line'></div>
                                <select 
                                  className="input-select"
                                  value={business_type}
                                  onChange={handleSelectBusiness}
                                  required
                                  >
                                    <option value="" disabled selected hidden>Select</option>
                                    {/* {allBankData.map((bank)=>(
                                      <option value={bank.name}>{bank.name}</option>
                                    ))} */}
                                    <option value="Merchant">Merchant</option>
                                    <option value="Fintech">Fintech</option>
                                    <option value="E-Commerce">E-Commerce</option>

                                </select>
                              </div>
                          </div>
                          <div className='form-groups'>
                              <label className='lbl'>Referral Code</label>
                              <input onChange={handleInputChange} type='text' name="referral_code" placeholder='e.g. 678982' className='form-control'  />
                          </div>
                        </div>
                        {/*  */}
                        <div className='signup-form-right'>
                            <div className='form-groups'>
                                <label className='lbl'>Business Name*</label>
                                <input onChange={handleInputChange} type='text' name="business_name" placeholder='Enter your name' className='form-control' required/>
                            </div>
                            <div className='form-groups'>
                                <label className='lbl'>Phone Number*</label>
                                <input onChange={handleInputChange} type='text' name="phone" placeholder='Enter your name' className='form-control' required />
                            </div>
                            <div className='form-groups'>
                                <label className='lbl'>Password*</label>
                                <input onChange={handleInputChange} type='text' name="password" placeholder='Enter your name' className='form-control' required/>
                            </div>
                            <div className='form-groups'>
                                <label className='lbl'>Confirm Password*</label>
                                <input onChange={handleInputChange} type='text' name="confirmPassword" placeholder='Enter your name' className='form-control' required />
                            </div>
                            <div className='form-groups'>
                                <label className='lbl'>Website</label>
                                <input onChange={handleInputChange} type='text' name="website" placeholder='Enter your name' className='form-control' />
                            </div>

                        </div>

                    </div>
                    {/*  */}
                    <div className='signUp-checkbox'>
                      <input
                      type="checkbox"
                      className="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                      />
                      <h2 className='signUp-checkbox-text'>I hereby consent to Flick's <span> <a href='https://getflick.app/privacy-policy'>Privacy Policy </a></span> and agree to abide by Flick's <span><a href='https://getflick.app/terms-conditions'>Terms of Use.</a></span></h2>
                    </div>
                    <button  className='btn'>
                      {
                        isLoading ? <FadeLoader color="#F7F8FA" height={10} width={10} />:
                        <>
                          Join Flick  
                          <img src={process.env.PUBLIC_URL +"/images/arrow-forward.svg"} alt="arrow btn" style={{display:'inline',marginLeft:"5px"}}/>      
                        </>
                      }
                    </button>
                    <p className='dont-have-account'>Have an account? <Link to={'/login'} className='signIn-link'>Sign In <img style={{display:"inline"}} src={process.env.PUBLIC_URL+"/images/coloredArrowForward.svg"} alt='colored'/></Link></p>
                    
                  </form>
              </div>
              <p   className='signup-main-bottom'>© Flick2023</p>
          </div>
          <div className='signUp-aside'>
            <div className='signUp-aside-container'>
              <h3 className='signUp-aside-title'>Your Flick account gives:</h3>
              <SignUpAccessItem 
              title="Access to our APIs to power businesses across Fintech, Entertainment, Logistics, Lifestyle, Technology, Agency Banking and more"
              
              />
              <SignUpAccessItem 
              title="Access to all Flick core services from a single easy to use web based platform"
              />
              <SignUpAccessItem 
              title="Manage all your services and insights from our easy-to-use dashboard"
              />
            </div>
            <Footer />
            
          </div>
      </div>
      
      <ToastContainer />
    </div>
  )
}

export default SignUp
