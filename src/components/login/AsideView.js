import React from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/Footer';

function AsideView() {
  const navigate = useNavigate();
  const handlehome = ()=>{
    navigate('/');
  }

  return (
    <div className='aside-view'>
        <div className='aside-view-container'>
              <img onClick={handlehome} src={process.env.PUBLIC_URL+"/images/flickLogo.svg"} alt="login-logo" className='flick-logo' />
            <div className='aside-view-content'>
                <h1 className='enable-data'>Enable data and payment functionalities within your product.</h1>
                <h2 className='quick-access'>Get quick access to intelligent financial and data tools that gives you the ability to create amazing products that solve big problems.</h2>
                <img src={process.env.PUBLIC_URL+"/images/green-bar.svg"} alt="bar" className='green-bar' />
            </div>
            <div className='footer-link'>
              <Footer />
              <img src={process.env.PUBLIC_URL+"/images/dashboard.svg"} alt="bar"  className='dashboard-img'/>
            </div>
        </div>
    </div>
  )
}

export default AsideView