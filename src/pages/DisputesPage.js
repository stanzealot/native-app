import React, { useState } from "react";
import '../components/common/Pages.scss'
import '../components/getStarted/GetStarted.scss'
import RefundAssurance from "../components/disputes/RefundAssurance";
import '../components/disputes/Disputes.scss'
import NameControl from "../components/common/NameControl";

function DisputesPage() {

    const [method,setMethod] = useState("Bank Account");

    const handleSelectMethod = (e)=>{
        setMethod(e.target.value);
      }

  return (
    <div className='main-inner'>
    <NameControl
    btn
    name="Disputes"
    desc="Manage all your settlements here"
    />
        <div className="introduce">
      <RefundAssurance />
          <div className="overview-session">
      <session className="main-form">
        <div className="main-form-wrapper">

        <div className="info-form-title">
          <p className="provide-info">Provide information about your transaction.</p>
          <p className="share-details">Share some details about yourself and your business.</p>
        </div>
      <form className="dispute-form">
          <div className='form-groups'>
              <label className='lbl'>Amount*</label>
              <input type='text' name="name" placeholder='Flick' className='form-control' />
          </div>
          <div className='form-groups'>
              <label className='lbl'>When was the debit alert received?*</label>
              <input type='date' name="name" placeholder='Select date' className='form-control' />
          </div>

          <div className='form-groups'>
                              <label className='lbl'>What payment method did you use?*</label>
                              <div className='form-select-group'>
                                <select 
                
                                  className="input-select"
                                  value={method}
                                  onChange={handleSelectMethod}
                                  >
                                    <option value="Bank Account">Bank Account</option>
                                    <option value="Debit Card">Debit Card</option>
                                    <option value="Flick">Flick</option>

                                </select>
                              </div>
                          </div>
         <div className={`bank-group bank-option ${method==="Bank Account" && "bank-active"}`}>
            <div className='form-groups'>
                <label className='lbl'>Which bank did you use for your payment?*</label>
                <input type='text' name="name" placeholder='e.g. GTBank' className='form-control' />
            </div>

            <div className='form-groups'>
                <label className='lbl'>Your account number?*</label>
                <input type='text' name="name" placeholder='e.g. 089263725' className='form-control' />
            </div>
        </div>
            {/*  */}
          <div className={`debit-group flick-group ${method==="Debit Card" && "flick-active"}`}>
            <div className='left-form-groups'>
                <label className='lbl'>First six digits of your card*</label>
                <input type='text' name="name" placeholder='Enter here' className='form-control' />
            </div> 
            <div className='right-form-groups'>
                <label className='lbl'>Last four digits of your card*</label>
                <input type='text' name="name" placeholder='Enter here' className='form-control' />
            </div>     
          </div>
            {/*  */}
          <div className={`debit-group flick-group ${method==="Flick" && "flick-active"}`}>
            <div className='left-form-groups'>
                <label className='lbl'>Enter phone number*</label>
                <input type='text' name="name" placeholder='+234 000000000' className='form-control' />
            </div> 
            <div className='right-form-groups'>
                <label className='lbl'>Flick tag (Optional)</label>
                <input type='text' name="name" placeholder='Enter here' className='form-control' />
            </div>     
          </div>
      </form>

      <div>
        <button className="submit">
            <p className="submit-text">Submit Dispute</p>
        </button>
      </div>
      </div>
      </session>
          </div>
        </div>
    </div>
  );
}

export default DisputesPage;
