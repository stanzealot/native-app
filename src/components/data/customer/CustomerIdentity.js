import React, { useRef } from 'react'
import Details from '../../common/Details';
import { copyToClipboard } from '../../utilities/clipboardUtils';
function CustomerIdentity() {
    const refLink = useRef(null);
  return (
    <div className='data_customer'>
      <div className='topbar_identity'>
        <div className='link-bar-left'>
            <img src="/images/Avatar.svg" alt='avater' />
            <div className='link-right'>
                <h5 className='text_h3'>ARM Limited</h5>
                <div className='link-right-copy'>
                    <input ref={refLink} className='input_link_copy' type='text' value="64a85678gshs65678sh6s8678" />
                    <img onClick={copyToClipboard.bind(null,refLink)} src='/images/copy.svg' alt="copy" />
                </div> 
            </div>
        </div>
      </div>
        
      <Details
        fullName="QRABA LIMITED" 
        email="mide@flick.app"
        phone="08136902667"
        linked="11"
        date="Sep 5, 2023"
        synced="Sep 5, 2023"
        state="Lagos"
        bvn="234324543254"
        nin="5467892384733"
        nationality="Nigerian"
        address="573, Okesuna Street, GRA, Oke-Ado, Ibadan, Oyo State, Nigeria"
        income="99.89"
        />
      
    </div>
  )
}

export default CustomerIdentity
