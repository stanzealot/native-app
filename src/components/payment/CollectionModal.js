import React, { useRef } from 'react'
import './payment.scss'
import Status from '../common/Status'
import { copyToClipboard } from '../utilities/clipboardUtils';

function CollectionModal({toggleModal,setIsCollection}) {
    const inputRef = useRef(null);
  const handletoggle =()=>{
    toggleModal()
  }
  const isoData = (date)=>{
    const newData = new Date(date);
    return newData;
  }
  function convertDate(dateString){
    const date = new Date(dateString);
    const dateFormat = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    const formattedDate = new Intl.DateTimeFormat('en-US', dateFormat).format(date);
    return formattedDate;
}
  return (
    <div className='payment-modal'>
       
      <div className='modal-box'>
        <div className='modal-box-wrapper'>
            <img onClick={setIsCollection.bind(this,false)} className='payment-modal-close' src='/images/x-close.svg' alt='f'/>
            <div className='payment-model-title'>

                <h3>Transaction Summary</h3>
                <p>Here is an overview of your transaction</p>
            </div>
            <div  className='payment-model-line'></div>

            <div className='payment-model-amount'>
                <p>Transaction amount</p>
                <h4>N4,000,000.00</h4>
            </div>

            <div  className='payment-model-line'></div>

            <div className='payment-model-overview'>
                <div className='payment-model-content'>
                    <p className='payment-model-th'>Recipient</p>
                    <p className='payment-model-th'>Bank</p>
                </div>
                <div className='payment-model-content'>
                    <p className='payment-modal-td'>Mide Ajibade</p>
                    <p className='payment-modal-td'>GTBank</p>
                </div>
                <div className='payment-model-content space'>
                    <p className='payment-model-th'>Status</p>
                    <p className='payment-model-th'>Channel</p>
                </div>
                <div className='payment-model-content '>
                  
                        <Status 
                         icon="/images/success.svg"
                         mgs="Credit"
                        />
                    <p className='payment-modal-td'>Bank Transfer</p>
                </div>

                <div className='payment-model-content space'>
                    <p className='payment-model-th'>Charges</p>
                    <p className='payment-model-th'>Date & Time</p>
                </div>
                <div className='payment-model-content '>
                    <p className='payment-modal-td'>N20,000.00</p>
                    <p className='payment-modal-td'>Jan 6, 2023, 02:45:23 AM</p>  
                </div>

                <div className='payment-model-content space'>
                    <p className='payment-model-th'>Reference</p>
                </div>
                <div className='payment-model-content '>
                 <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
                      <input ref={inputRef} className='link_table' style={{width:"fit-content"}}  value={"hrtg3s8...fge3"}    readOnly/>
                      <img 
                      style={{display:"inline"}} 
                      src='/images/copy.svg' 
                      alt='payment' 
                      onClick={(e) => {
                        e.stopPropagation();
                        copyToClipboard(inputRef);
                      }}
                      />
                    </div>
                </div>

                
            </div>
        </div>
      </div>
    </div>
  )
}

export default CollectionModal
