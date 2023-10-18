import React, { useRef } from 'react'
import './Pages.scss'
import CustomerOverViewItem from '../payment/CustomerOverViewItem'
import Active from './Active'
import { copyToClipboard } from '../utilities/clipboardUtils'
function CustomerOverView({customer,data}) {
  const refLink = useRef(null);
  return (
    <div className='customer-overview'>
       {
        customer ?  <div className='link-bar-left'>
        <img src="/images/Avatar.svg" alt='avater' />
        <div className='link-right'>
            <h5 className='text_h3'>Brooklyn Simmons</h5>
            <div className='link-right-copy'>
                <input ref={refLink} className='input_link_copy' type='text' value="jackson.graham@sample.com " />
                <img onClick={copyToClipboard.bind(null,refLink)} src='/images/copy.svg' alt="copy" />
            </div> 
        </div>
        </div>:
        <div className='customer-profile'>
            <img className='customer-profile-avater' src={process.env.PUBLIC_URL+"/images/tope.svg"} alt='customer'/>

            <div className='customer-profile-content'>
                <h3 className='customer-profile-name'>Brooklyn Simmons</h3>
                <p className='customer-profile-email'>jackson.graham@sample.com </p>
            </div>
        </div>
       }
    
        <div className='customer-line'></div>
        <CustomerOverViewItem 
        icon="/images/inflow.svg"
        desc="Total inflows"
        amount="N45,3672,746.98"
        />
 
        <div className='customer-line'></div>
        <CustomerOverViewItem 
        icon="/images/outflow.svg"
        desc="Total inflows"
        amount="N45,3672,746.98"
        />

        <div className='customer-line'></div>
        {
          customer ?
          <CustomerOverViewItem 
            icon={!data ?"/images/customers/balance.svg":"/images/numTransaction.svg"}
            desc={!data ?"Balance":"No of transactions"}
            amount={!data?"N45,3672,746.98":"3425"}
          />:
          <div className='customer-date'>
              <Active
            
              title="Active"
              />
              <p className='customer-date-text'>Jan 6, 2023, 02:45:23 AM</p>
          </div>
        }
    </div>
  )
}

export default CustomerOverView
