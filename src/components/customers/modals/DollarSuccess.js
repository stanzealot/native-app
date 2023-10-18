import React from 'react'
import '../../modals/Modal.scss'
function DollarSuccess({setIsDollarSuccess,setIsDollarVirtual,setIsDollarAmount,setIsBalanceOpen}) {

    const handleConfirm =()=>{
        setIsDollarSuccess(false)
        setIsDollarVirtual(false)
        setIsDollarAmount(false)
        setIsBalanceOpen(false)
    }
  return (
    <div className="overlay" onClick={setIsDollarSuccess.bind(this,false)} >
        <div className="success-modal">
        <div className="success-wrapper">

            <div>
            <img src={process.env.PUBLIC_URL + "/images/iconSuccess.svg"} alt="icon" />
            </div>

        <div className="success-ful">
            <p className="success">Payment Initiated</p>
            <p className="check-balance">We’ll notify you once we receive your payment; this should take about 2-4 days</p>
        </div>

        <input className='dollar_ref_id' type='text' placeholder='Enter transaction reference ID'/>

        <button onClick={handleConfirm} className="btn">
            Confirm
        </button>
            </div>
        </div>
    </div>
  )
}

export default DollarSuccess
