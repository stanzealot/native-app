import React from "react";
import BusinessOverview from "../components/businessOverview/BusinessOverview";
import Nav from "../components/sidebar/Nav";
import SideBar from "../components/sidebar/SideBar";
import '../components/common/Pages.scss'
import '../components/getStarted/GetStarted.scss'

function IntroduceBusiness() {
  return (
    <div className="page">
      <div className="aside-content">
        <SideBar
          name="Mide Ajibade"
          email="ayomide@getflick.com"
          avatar="/images/tope.svg"
        />
      </div>
      <div className="main">
        <Nav
          name="Mide Ajibade"
          email="ayomide@getflick.com"
          avatar="/images/tope.svg"
        />

        <div className="main-content">
          <div className="main-inner">
            <h1 className="get-started-title">You’re Getting Started</h1>
            <p className="get-started-text">
              Take a few minutes to explore Flick!
            </p>

            <div className="nav-documentation nav-btn">
              <img
                src={process.env.PUBLIC_URL + "/images/arrow-narrow-right.svg"}
                alt="arrow"
              />
              <h1 className="nav-heading"> Go Back</h1>
            </div>
          </div>
        </div>
        <div className="introduce">
      <BusinessOverview />

      <div className="main-form">
        <div className="main-form-wrapper">

        <div className="info-form-title">
          <p className="provide-info">Provide information about your business.</p>
          <p className="share-details">Share some details about yourself and your business.</p>
        </div>
      <form className="info-form">
          <div className="info-form-left">
          <div className='form-groups'>
              <label className='lbl'>Business Name*</label>
              <input type='text' name="name" placeholder='Flick' className='form-control' />
          </div>
          <div className='form-groups'>
              <label className='lbl'>Business Model*</label>
              <input type='text' name="name" placeholder='Enter your name' className='form-control' />
          </div>
          <div className='form-groups'>
              <label className='lbl'>Date of Incorporation*</label>
              <input type='date' name="name" placeholder='Enter your name' className='form-control' style={{color: '#D0D5DD'}}/>
          </div>
          <div className='form-groups'>
              <label className='lbl'>Tax Number*</label>
              <input type='text' name="name" placeholder='HJN637DHBCHE73' className='form-control' />
          </div>
          <div className='form-groups'>
              <label className='lbl'>Zip Code*</label>
              <input type='text' name="name" placeholder='Zip Code' className='form-control' />
          </div>
          <div className='form-groups'>
              <label className='lbl'>City*</label>
              <input type='text' name="name" placeholder='Enter your name' className='form-control' />
          </div>
          </div>

          <div className="info-form-right">
          <div className='form-groups'>
              <label className='lbl'>Company Type*</label>
              <input type='text' name="name" placeholder='Enter your name' className='form-control' />
          </div>
          <div className='form-groups'>
              <label className='lbl'>Incorporation Number*</label>
              <input type='text' name="name" placeholder='GHJDC67Y4HFBNDJ4RF4' className='form-control' />
          </div>
          <div className='form-groups'>
              <label className='lbl'>Country of Incorporation*</label>
              <input type='text' name="name" placeholder='Enter your name' className='form-control' />
          </div>
          <div className='form-groups'>
              <label className='lbl'>Company Address*</label>
              <input type='text' name="name" placeholder='Enter Address' className='form-control' />
          </div>
          <div className='form-groups'>
              <label className='lbl'>State*</label>
              <input type='text' name="name" placeholder='Enter your name' className='form-control' />
          </div>
          <div className='form-groups'>
              <label className='lbl'>What is the nature of your business?*</label>
              <input type='text' name="name" placeholder='Brief Description' className='form-control' />
          </div>
          </div>
      </form>
      </div>
      </div>
        </div>
      </div>
    </div>
  );
}

export default IntroduceBusiness;
