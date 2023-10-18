import React from "react";
import "./Modal.scss";

function CardDetails({setIsCardDetails,setIsCardMethod}) {
  return (
    <div className="overlay" >
      <div className="enter-amount-modal">
        <div className="modal-wrapper">
          <div>
            <img
              src={process.env.PUBLIC_URL + "/images/backArrowBalanceModal.svg"}
              alt="icon"
              style={{cursor:"pointer"}}
              onClick={setIsCardDetails.bind(this,false)}
            />
          </div> 

          <div className="modal-title">
            <p className="enter-amount">Input Card Details</p>

            <p className="enter-an-amount">
              Your card will be automatically be debited.
            </p>
          </div>

          <form className="modal-form">
            <div className="modal-form-left">
              <div className="modal-form-groups">
                <label className="form-lbl">Name on card</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Mide Ajibade"
                  className="modal-form-control"
                />
              </div>
              <div className="modal-form-groups">
                <label className="form-lbl">Card number</label>
                <span className="modal-form-control">
                  <img
                    src={process.env.PUBLIC_URL + "/images/modal-card-icon.svg"}
                    alt="icon"
                  />
                  <input
                    type="text"
                    name="name"
                    placeholder="1234 1234 1234 1234"
                    className="modal-input"
                  />
                </span>
              </div>
            </div>

            <div className="modal-form-right">
              <div className="modal-form-groups">
                <label className="form-lbl">Expiry</label>
                <input
                  type="text"
                  name="name"
                  placeholder="MM/YYYY"
                  className="modal-form-control"
                />
              </div>
              <div className="modal-form-groups">
                <label className="form-lbl">CVV</label>
                <input
                  type="text"
                  name="name"
                  placeholder="***"
                  className="modal-form-control"
                />
              </div>
            </div>
          </form>
          <div className="save-card">
            <input
              type="checkbox"
              className="modal-checkbox"
              name="card"
              value="card"
              id="card"
            />
            <label htmlFor="card" className="save-card-text">
              Save card details for frequent transaction
            </label>
          </div>

          <div className="modal-btn">
            <button onClick={setIsCardDetails.bind(this,false)} className="first-btn">
              Cancel
            </button>
            <button  onClick={setIsCardMethod.bind(this,true)} className="btn">  
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
