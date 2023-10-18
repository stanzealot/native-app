import React from "react";
import BusinessOverview from "../components/businessOverview/BusinessOverview";
import Nav from "../components/sidebar/Nav";
import SideBar from "../components/sidebar/SideBar";
import '../components/common/Pages.scss'
import '../components/getStarted/GetStarted.scss'

function AdditionalInformation() {
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
          <p className="provide-info">Additional Information (Optional)</p>
          <p className="share-details">Provide us with the socials of your business</p>
        </div>

      <form className="info-form">
          <div className="info-form-left">
          <div className='form-groups'>
              <label className='lbl'>Company Website*</label>
              <input type='text' name="name" placeholder='www.getflick.app' className='form-control' />
          </div>
          <div className='form-groups'>
              <label className='lbl'>Twitter*</label>
              <input type='text' name="name" placeholder='www.getflick.app' className='form-control' />
          </div>
          </div>

          <div className="info-form-right">
          <div className='form-groups'>
              <label className='lbl'>LinkedIn*</label>
              <input type='text' name="name" placeholder='https://www.getflick.com' className='form-control' />
          </div>
          <div className='form-groups'>
              <label className='lbl'>Instagram*</label>
              <input type='text' name="name" placeholder='https://www.getflick.com' className='form-control' />
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

export default AdditionalInformation;
