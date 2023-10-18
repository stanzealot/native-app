import React from "react";
import BusinessOverview from "../components/businessOverview/BusinessOverview";
import Nav from "../components/sidebar/Nav";
import SideBar from "../components/sidebar/SideBar";
import "../components/common/Pages.scss";
import "../components/getStarted/GetStarted.scss";

function Documents() {
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
                <p className="provide-info">Document Upload</p>
                <p className="share-details">
                Submit additional documentation for faster KYC process.
                </p>
              </div>
                <div className="form-groups">
                  <label className="lbl">Business Registration/Incorporation Certificate*</label>
                  <div className="click-to-upload">
                    <img
                      src={process.env.PUBLIC_URL + "/images/upload-icon.svg"}
                      alt="upload"
                    />
                    <p className="click">
                      <span style={{ color: "#1C716D" }}>Click to upload</span>{" "}
                      or drag and drop
                    </p>
                    <p className="file-type">
                      SVG, PNG, JPG or GIF (max. 800x400px)
                    </p>
                  </div>
                </div>

                <div className="form-groups">
                  <label className="lbl">Article of Association*</label>
                  <div className="click-to-upload">
                    <img
                      src={process.env.PUBLIC_URL + "/images/upload-icon.svg"}
                      alt="upload"
                    />
                    <p className="click">
                      <span style={{ color: "#1C716D" }}>Click to upload</span>{" "}
                      or drag and drop
                    </p>
                    <p className="file-type">
                      SVG, PNG, JPG or GIF (max. 800x400px)
                    </p>
                  </div>
                </div>

                <div className="form-groups">
                  <label className="lbl">Operating Business Utility Bill*</label>
                  <div className="click-to-upload">
                    <img
                      src={process.env.PUBLIC_URL + "/images/upload-icon.svg"}
                      alt="upload"
                    />
                    <p className="click">
                      <span style={{ color: "#1C716D" }}>Click to upload</span>{" "}
                      or drag and drop
                    </p>
                    <p className="file-type">
                      SVG, PNG, JPG or GIF (max. 800x400px)
                    </p>
                  </div>
                </div>
            </div>
            <div className="name-control-btn">
                <button className="btn-control">Submit KYC Details</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Documents;
