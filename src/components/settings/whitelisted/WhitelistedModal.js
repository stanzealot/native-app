import React from "react";

function WhitelistedModal({ open, onClose,addApi,setIp }) {
  
  if (!open) return null;

  const handleChange = (e)=>{
    setIp(e.target.value);
  }
  const handleSubmit = (e)=>{
      e.preventDefault();
      addApi();
  }
  return (
    <div className="overlay">
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
            <h2 className="add-account-text">Add IP address</h2>
            <h5 className="authenticate">
              Manually authenticate KYCs in real-time.
            </h5>
          </div>
          <form onSubmit={handleSubmit} className="settlement-form">
            <div className="settlement-form-wrapper">
              <div className="settlement-form-groups">
                <label className="lbl">IP address</label>
                <input
                  type="text"
                  name="ip"
                  placeholder="000 .000 .000 .000"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
            </div>
            <button style={{width:"fit-content"}} className="btn">Add IP address</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default WhitelistedModal;
