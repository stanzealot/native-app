import React from "react";
import BusinessOverview from "../components/businessOverview/BusinessOverview";
import Nav from "../components/sidebar/Nav";
import SideBar from "../components/sidebar/SideBar";
import "../components/common/Pages.scss";
import "../components/getStarted/GetStarted.scss";

function LegalEntity() {
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
                <p className="provide-info">Shareholders</p>
                <p className="share-details">
                  We are interested in learning more about your shareholders.
                </p>
              </div>
              
              <form className="info-form">
                <div className="info-form-left">
                <div className="shareholder">
                <div>
                  <div className="icon-text">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/images/unticked-checkbox.svg"
                      }
                      alt="checkbox"
                    />
                    <p className="shareholder-text">Natural Person/UBOs</p>
                  </div>
                  <p className="other-text">
                    This shareholder is an individual
                  </p>
                </div>
              </div>
                  <div className="form-groups">
                    <label className="lbl">Name*</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Mide"
                      className="form-control"
                    />
                  </div>
                  <div className="form-groups">
                    <label className="lbl">Registration/Incorporation Number*</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter"
                      className="form-control"
                    />
                  </div>
                </div>
                
                <div className="info-form-right">
                <div className="shareholder">
                <div>
                  <div className="icon-text">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/images/ticked-checkbox.svg"
                      }
                      alt="checkbox"
                    />
                    <p className="shareholder-text">Legal Entity</p>
                  </div>
                  <p className="other-text">
                  This shareholder is a legal entity
                  </p>
                </div>
                </div>
                  <div className="form-groups">
                    <label className="lbl">Country of Registration/Incorporation*</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Name"
                      className="form-control"
                    />
                  </div>
                  <div className="form-groups">
                    <label className="lbl">Percentage of Shares Owned*</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Select"
                      className="form-control"
                    />
                  </div>
                </div>
              </form>
              <div className="border-bottom">
              </div>
            </div>
            <div className="add-btn">
              <img
                src={process.env.PUBLIC_URL + "/images/plus.svg"}
                alt="plus"
              />
              <p className="add-another">Add Another Shareholder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LegalEntity;
