import React, { useEffect, useState } from 'react'
import AsideOverView from '../components/login/AsideOverView'
import '../components/login/Login.scss'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { loginFailure, loginStart, loginSuccess } from '../redux/userSlice';
import { FadeLoader } from 'react-spinners';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  
  const navigate = useNavigate();
  const {currentUser} = useSelector((state)=>state?.user)
  const [isChecked, setIsChecked] = useState(false);
  const [formData,setFormData] = useState({
    business_email:"",
    password:""
  });
  const[isLoading,setIsLoading] = useState(false)
  const dispatch = useDispatch();
  useEffect(()=>{
    if(currentUser?.user) navigate("/getstarted");
  });

  const handleCheckbox = (e)=>{
    setIsChecked(e.target.checked);
  }

  const  handleChange = (event)=>{
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }
  
  const handlehome = ()=>{
    navigate('/');
  }



  const handleValidation = () => {
    const {business_email, password} = formData;
     if (business_email.length < 11) {
      toast.error("business_email must be above 10 character");
      return false;
     }
      return true;

  };
 
 

  const handleLogin = async (e)=>{
    e.preventDefault();
    
    try{
      if(handleValidation()){  
        dispatch(loginStart());
        setIsLoading(true);
        const res = await axios.post('https://zunpla6tnl.execute-api.us-east-2.amazonaws.com/production/login',{...formData})
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
    <div className="login
    ">
        {/* left side */}
      <div className='login-main'>
          <img onClick={handlehome} src={process.env.PUBLIC_URL+"/images/flickLogo.svg"} alt="login-logo" className='login-logo' />
        <div className='login-main-content'>
            <h1 className='login-title'>Log in</h1>
            <p className='login-desc'>To proceed to your Dashboard, kindly sign in.</p>
            <form className='login-form' onSubmit={handleLogin}>
                <div className='form-groups'>
                    <label className='lbl'>Email</label>
                    <input onChange={handleChange} type='email' name="business_email" placeholder='Enter your email' className='form-control' required />
                </div>
                <div className='form-groups'>
                    <label className='lbl'>Password</label>
                    <input onChange={handleChange} type='text' name="password" placeholder='password' className='form-control' required />
                </div>
                <div className='rest-password'>
                    <div className='login-rest'>
                        {/* <input type='checkbox' /> */}
                        <input
                        type="checkbox"
                        className="checkbox-login"
                        checked={isChecked}
                        onChange={handleCheckbox}
                        />
                        <span className='login-days' style={{marginLeft:"8px"}}>
                            Remember for 30 days 
                        </span>
                    </div>
                    <Link to='/password-reset' className='login-rest-link'>Reset Password <img style={{display:"inline"}} src={process.env.PUBLIC_URL + "/images/arrowUpward.svg"} alt="arrow"/> </Link>
                </div>
                <button  className='btn' >
                  {
                    isLoading ? <FadeLoader color="#F7F8FA" height={10} width={10} />:
                    <>
                      Sign In <img style={{display:"inline"}} src={process.env.PUBLIC_URL+"/images/arrow-forward.svg"} alt="arrow" />
                    </>
                  }
                </button>
                <p className='login-noAccount'>
                 Don’t have an account?  
                 <Link to="/signUp" className='login-noAccount-link'> Sign Up <img style={{display:"inline"}} src={process.env.PUBLIC_URL+"/images/coloredArrowForward.svg"} alt='arrow'/></Link>
                </p>
            </form>
        </div>
        <div className='login-footer'>
            <Footer />
        </div>
      </div>
        {/* right */}
      <div className='login-aside'>
        <AsideOverView />
      </div>
      <ToastContainer />
    </div>
  )
}

export default Login
