import React, { useRef } from 'react'
import './payment.scss'
import Status from '../common/Status'
import { copyToClipboard } from '../utilities/clipboardUtils'

function PayoutOverviewModal({toggleInflow,data}) {
  const accRef = useRef(null);
  const IdRef = useRef(null);
  const handletoggle =(e)=>{
    e.stopPropagation();
    toggleInflow()
  }
  const handlePropagation = (e)=>{
    e.stopPropagation();
  }
  return (
    <div className='payment-modal' onClick={handletoggle}>
      <div className='modal-box'>
        <div className='modal-box-wrapper' onClick={handlePropagation}>
            <img onClick={handletoggle} className='payment-modal-close' src='/images/x-close.svg' alt='f'/>
            <div className='payment-model-title'>

                <h3>Transaction Summary</h3>
                <p>Here is an overview of your transaction</p>
            </div>
            <div  className='payment-model-line'></div>

            <div className='payment-model-amount'>
                <p>Transaction amount</p>
                <h4>N300,000.00</h4>
            </div>

            <div  className='payment-model-line'></div>

            <div className='payment-model-overview'>
                <div className='payment-model-content'>
                    <p className='payment-model-th'>Recipient</p>
                    <p className='payment-model-th'>Bank</p>
                </div>
                <div className='payment-model-content'>
                    <p className='payment-modal-td'>Mide Ajibade</p>
                    <p className='payment-modal-td'>GTBank - 0224048917</p>
                </div>
                <div className='payment-model-content space'>
                    <p className='payment-model-th'>Status</p>
                    <p className='payment-model-th'>Account number</p>
                </div>
                <div className='payment-model-content '>
                    <Status 
                     icon="/images/success.svg"
                     mgs="Successful"
                    />
                    <p className='payment-modal-td'>0224048917</p>
                </div>

                <div className='payment-model-content space'>
                    <p className='payment-model-th'>Initiated by</p>
                    <p className='payment-model-th'>Wallet debited</p>
                </div>
                <div className='payment-model-content '>
                    <p className='payment-modal-td'>API</p>
                    <p className='payment-modal-td'>NGN wallet</p>
                </div>

                <div className='payment-model-content space'>
                    <p className='payment-model-th'>Charges</p>
                    <p className='payment-model-th'>Reference</p>
                </div>
                <div className='payment-model-content '>
                <p className='payment-modal-td'>N50.00</p>
                    <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
                      <input ref={IdRef} value="hrtg3s8...fge3" className='payment-modal-td copyInput'/>
                      <img 
                      onClick={ copyToClipboard.bind(null,IdRef)} 
                      style={{display:"inline"}} 
                      src='/images/copy.svg' 
                      alt='payment' 
                      />
                    </div>
                </div>

                <div className='payment-model-content space'>
                    <p className='payment-model-th'>Decription</p>  
                    <p className='payment-model-th'>Proof</p>  
                </div>
                <div className='payment-model-content '>
                    <p className='payment-modal-td'>TOCHUKWU ..|FLICK</p>   
                    <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
                        <input ref={accRef} value="1123555243534275..." className='payment-modal-td copyInput'/>
                        <img
                         onClick={ copyToClipboard.bind(null,accRef)} style={{display:"inline"}} src='/images/copy.svg' alt='payment' />
                    </div> 
                </div> 
            </div>

            <div className='payment-overview-btn'>
                <button className='btn'>
                  Resend webhook
                </button>
                <button className='btn'>
                   Download reciept
                </button>

            </div>
        </div>
      </div>
    </div>
  )
}

export default PayoutOverviewModal
