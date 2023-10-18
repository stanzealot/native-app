import React from "react";
import './Modal.scss'

function Successful({setIsModalOpen,setIsSuccessful}) {
//   if (!open) return null;

  const handleCancel = (e)=>{
    setIsSuccessful(false)
    setIsModalOpen(false)
  }

  return (
    <div className="overlay" onClick={setIsSuccessful.bind(this,false)}>
    <div className="success-modal" onClick={(e)=>e.stopPropagation()}>
      <div className="success-icon" style={{marginLeft:"auto",marginRight:"auto",textAlign:"center"}}>
        <img style={{margin:"auto"}} src={process.env.PUBLIC_URL + "/images/modal-check-circle.svg"} alt="icon" />
      </div>


        <div className="success-title" style={{textAlign:"center"}}>
          <p className="successful">Successful!</p>
          <p className="your-limit">Your limit amount has been set to N2,000</p>
        </div>

          <button className="thanks-btn" onClick={handleCancel}>
            <h2 className="thanks">Thanks</h2>
          </button>
    </div>
    </div>
  );
} 

export default Successful;
