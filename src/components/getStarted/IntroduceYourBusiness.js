import React from 'react'
import BusinessOverview from '../businessOverview/BusinessOverview'
import './GetStarted.scss'
import { useNavigate } from 'react-router-dom'

function IntroduceYourBusiness() {
  const navigate = useNavigate()
  const handleBack = ()=>{
    navigate('/getstarted')
  }
  return (
 
    <div className='back-introduce'>
        <div className="go-back-btn" onClick={handleBack}>
            <img
              src={process.env.PUBLIC_URL + "/images/arrow-narrow-right.svg"}
              alt="arrow"
            />
            <h1 className="btn-title"> Go Back</h1>
        </div>

        <div className="introduces">
      <BusinessOverview />
      <div className="overview-session">
      <session className="main-form" id="introduction">
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
      </session>

      <session className="main-form" id="information">
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
      </session>

      <session className="main-form" id="directors">
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
          </session>

          <session className="main-form" id="person">
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
                        process.env.PUBLIC_URL + "/images/ticked-checkbox.svg"
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
                    <label className="lbl">First Name*</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Mide"
                      className="form-control"
                    />
                  </div>
                  <div className="form-groups">
                    <label className="lbl">Percentage of Shares Owned*</label>
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
                    <label className="lbl">ID/Passport Number*</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="HJN637DHBCHE73"
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
                        process.env.PUBLIC_URL + "/images/unticked-checkbox.svg"
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
                    <label className="lbl">Last Name*</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Name"
                      className="form-control"
                    />
                  </div>
                  <div className="form-groups">
                    <label className="lbl"> Date of Birth*</label>
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
              </div>
            </div>
            <div className="add-btn">
              <img
                src={process.env.PUBLIC_URL + "/images/plus.svg"}
                alt="plus"
              />
              <p className="add-another">Add Another Shareholder</p>
            </div>
          </session>

          <session className="main-form" id="legal">
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
          </session>

          <session className="main-form" id="political">
            <div className="main-form-wrapper">
              <div className="info-form-title">
                <p className="provide-info">Politically Exposed Persons or VIPs Declaration (Optional)</p>
                <p className="share-details">
                Confirm any politically or financially exposed persons associated with you or your business.
                </p>
              </div>

              <form className="info-form">
                <div className="info-form-left">
                  <div className="form-groups">
                    <label className="lbl">Name*</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Mide"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="info-form-right">
                  <div className="form-groups">
                    <label className="lbl">Position*</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Name"
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
              </div>

            </div>
              <div className="add-btn">
                <img
                  src={process.env.PUBLIC_URL + "/images/plus.svg"}
                  alt="plus"
                />
                <p className="add-another">Add Another PEP</p>
              </div>
          </session>

          <session className="main-form" id="document">
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
            
            <button style={{width:"fit-content"}} className='btn'>Submit KYC Details</button>
              
          </session>
          </div>
        </div>
    
    </div>
  )
}

export default IntroduceYourBusiness