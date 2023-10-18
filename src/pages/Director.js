import React from "react";
import BusinessOverview from "../components/businessOverview/BusinessOverview";
import Nav from "../components/sidebar/Nav";
import SideBar from "../components/sidebar/SideBar";
import "../components/common/Pages.scss";
import "../components/getStarted/GetStarted.scss";

function Director() {
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
                <p className="provide-info">Director</p>
                <p className="share-details">
                  Please provide details about your directors.
                </p>
              </div>

              <form className="info-form">
                <div className="info-form-left">
                  <div className="form-groups">
                    <label className="lbl">First Name*</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Mide"
                      className="form-control"
                    />
                  </div>
                  <div className="form-groups">
                    <label className="lbl">Position*</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter position"
                      className="form-control"
                    />
                  </div>
                  <div className="form-groups">
                    <label className="lbl">Nationality*</label>
                    <input
                      type="date"
                      name="name"
                      placeholder="Enter your name"
                      className="form-control"
                      style={{ color: "#D0D5DD" }}
                    />
                  </div>
                  <div className="form-groups">
                    <label className="lbl">ID Number*</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="HJN637DHBCHE73"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="info-form-right">
                  <div className="form-groups">
                    <label className="lbl">Last Name*</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Name"
                      className="form-control"
                    />
                  </div>
                  <div className="form-groups">
                    <label className="lbl"> Date of Incorporation*</label>
                    <input
                      type="date"
                      name="name"
                      placeholder="GHJDC67Y4HFBNDJ4RF4"
                      className="form-control"
                    />
                  </div>
                  <div className="form-groups">
                    <label className="lbl">Identification Document*</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className="form-control"
                    />
                  </div>
                  <div className="form-groups">
                    <label className="lbl">Issued Country*</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Address"
                      className="form-control"
                    />
                  </div>
                </div>
              </form>
              <div className="form-groups">
                <label className="lbl">Residential Address*</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full address"
                  className="form-control"
                />
              </div>
              <div className="border-bottom">
                <div className="form-groups">
                  <label className="lbl">Valid ID for Director*</label>
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
                  <label className="lbl">Proof of Address*</label>
                  <div className="file-upload">
                    <div className="icon-file">
                      <img
                        src={process.env.PUBLIC_URL + "/images/file-icon.svg"}
                        alt="upload"
                      />
                      <p className="click">Proof of Address.JPEG</p>
                    </div>
                    <img
                      src={process.env.PUBLIC_URL + "/images/trash-icon.svg"}
                      alt="delete"
                    />
                  </div>
                  {/* <p className="file-size">4.2 MB</p> */}
                </div>
              </div>

            </div>
              <div className="add-btn">
                <img
                  src={process.env.PUBLIC_URL + "/images/plus.svg"}
                  alt="plus"
                />
                <p className="add-another">Add Another Director</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Director;
