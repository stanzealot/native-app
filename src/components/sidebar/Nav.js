import React,{useState} from 'react'
import { useSelector } from 'react-redux';
import './Sidebar.scss'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Nav({name,email,avatar,setIsNotification,toggleProfile}) {
    
   
    
   const toggleLiveMode =()=>{
//     if (currentUser.user.isVerified) {
//         setMode((prevMode) => !prevMode); // Using functional update to avoid stale state
//       } else {
//         setMode(false);
//         toast.warning("Incomplete KYC: Please complete your KYC so you can go live")
//       }
   }

   const handleProfile = ()=>{
    toggleProfile();
   }
   
   
  return (
    <div className='nav'>
        <div className='nav-wrapper'>
            <div className='nav-right'>
                <div className='nav-content'>
                    <div className='nav-support nav-btn'>
                        <img src={process.env.PUBLIC_URL+"/images/support.svg"} alt="support"/>
                        <h1 className='nav-heading'>Support</h1>
                    </div>
                    <div className='nav-documentation nav-btn'>
                        <img src={process.env.PUBLIC_URL+"/images/api.svg"} alt="support"/>
                        <h1 className='nav-heading'>API Documentation</h1>
                    </div>
                    <div className='divider'></div>
                    <div className='live-test-mode' >
                        <img  className="nav-toggle-img" onClick={toggleLiveMode} src= "/images/mode.svg"  alt="support"/>
                        <h1 className='nav-heading'>Test Mode</h1>
                    </div>
                    <div className='divider'></div>
                    <div onClick={setIsNotification.bind(this,true)} className='nav-notification'>   
                        <img  src={process.env.PUBLIC_URL+"/images/navBell.svg"} alt="Bell"/>
                    </div>
                   
                </div>
                {/* <div className='nav-profile' onClick={handleProfile}>
                    <div className='nav-profile-avatar'>
                        <img className='nav-profile-avatar-img' src={avatar} alt=""/>
                        <img className='nav-profile-online-indicator' src={process.env.PUBLIC_URL+"/images/avataOnlineIndicator.svg"} alt="avater" />
                    </div>

                    <div className='nav-profile-content' >
                        <h1 className='nav-heading'>{name}</h1>
                        <p className='nav-email'>{email}</p>
                    </div>
                    <img  src={process.env.PUBLIC_URL+"/images/dropdownArrow.svg"} alt="arrow"/>
                </div> */}
            </div>
        </div>
        
      <ToastContainer />
    </div>
  )
}

export default Nav
