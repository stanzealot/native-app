import React, { useState } from "react";
import banks from '../../utilities/banks.json'
function SettlementModal({ open, onClose,setFormData,formData,addSettlementAccount }) {
  const [country, setCountry] = useState("");
  const bankData = banks;
  if (!open) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    addSettlementAccount();
  }
  
  return (
    <div className="overlay" onClick={onClose}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="settlement-modal"
      >
        <div className="settlement-modal-inner">
          <div className="close-icon">
            <img
              onClick={onClose}
              src={process.env.PUBLIC_URL + "/images/modal-close-icon.svg"}
              alt=""
            />
          </div>
          <div className="add-account">
            <h2 className="add-account-text">Add a settlement account</h2>
            <h5 className="authenticate">
              Manually authenticate KYCs in real-time.
            </h5>
          </div>
          <form onSubmit={handleSubmit} className="settlement-form">
            <div className="settlement-form-wrapper">
              <div className="settlement-form-groups">
                <label className="lbl">Select country</label>
                <div className="form-select-group">
                <select
                  className="input-select"
                  value={formData.country}
                  name="country"
                  onChange={handleInputChange}
                 >
            
                  <option value="" disabled>Select country ...</option>
                  {/* {bankData.map((bank, index) => (
                    <option
                      key={index}
                      value={bank.country}
                    >
                      {bank.country}
                    </option>
                  ))} */}
                  <option value="Nigeria">Nigeria</option>
                  <option value="Uganda">Uganda</option>
                  <option value="Kenya">Kenya</option>
                </select>
                </div>
              </div>
              <div className="settlement-form-groups">
                <label className="lbl">Account currency</label>
                <div className="form-select-group">
                  <select
                    className="input-select"
                    value={formData.currency}
                    name="currency"
                    onChange={handleInputChange}
                  >
                    <option value="" disabled>Select Currency..</option>
                    {/* {bankData.map((bank, index) => (
                    <option
                      key={index}
                      value={bank.currency}
                    >
                      {bank.currency}
                    </option>
                  ))} */}
                    <option value="NGN">NGN</option>
                    <option value="USD">USD</option>
                    <option value="Uba">KEN</option>
                  </select>
                </div>
              </div>
              <div className="settlement-form-groups">
                <label className="lbl">Bank name</label>
                <div className="form-select-group">
                  <select
                    className="input-select"
                    value={formData.bankCode}
                    name="bankCode"
                    onChange={handleInputChange}
                  >

                    <option value="" disabled>Select bank..</option>
                    {bankData.map((bank, index) => (
                    <option
                      key={index}
                      value={bank.code}
                    >
                      {bank.name}
                    </option>
                  ))}
                    {/* <option value="GTBank">GTBank</option>
                    <option value="Zenith">Zenith</option>
                    <option value="FCMB">FCMB</option> */}
                  </select>
                </div>
              </div>
              <div className="settlement-form-groups">
                <label className="lbl">Account number</label>
                <input
                  type="number"
                  name="accountNumber"
                  placeholder="678909876235"
                  className="form-control"
                  value={formData.accountNumber}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="settlement-checkbox">
            <input type="checkbox" className="checkbox" />
            <h2 className="settlement-checkbox-text">
              Make this my primary settlement account{" "}
            </h2>
            </div>
            <button className="btn" style={{width:"fit-content"}}>Add account</button>
          </form>
          
        </div>
      </div>
    </div>
  );
}

export default SettlementModal;
