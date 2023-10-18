import React from 'react'
import NotificationItem from './NotificationItem'

function Notification({setIsNotification}) {
    const handleReadAll = ()=>{

    }
  return (
    <div className='balance_modal'  onClick={setIsNotification.bind(this, false)} >
       <div onClick={(e) => e.stopPropagation()} className='balance_modal_content'>
          <div className='balance_modal_wrapper' >
              <img 
              onClick={setIsNotification.bind(this, false)}
              className='verify-close' src="/images/x-close.svg" alt='close' 
              />

              <div className='balance_identity_title'>
                  <h3 className='verify_identity_h'>Notifications</h3>
                  <p className='verify_identity_p'>Here is an overview of your transaction</p>
              </div>

              <div className='notification-msg'>
                 <NotificationItem 
                 status="New"
                 msg="⚡Flick Checkout is fast & easy to use. Dear Valued Customer, Did you know that Flick Checkout is the quickest and easiest way to..."
                 time="2 mins ago"
                 
                 />
                 <NotificationItem 
                 status="New"
                 msg="⚡Flick Checkout is fast & easy to use. Dear Valued Customer, Did you know that Flick Checkout is the quickest and easiest way to..."
                 time="2 mins ago"
                 />
                 <NotificationItem 
                 status="New"
                 msg="⚡Flick Checkout is fast & easy to use. Dear Valued Customer, Did you know that Flick Checkout is the quickest and easiest way to..."
                 time="2 mins ago"
                 read="read"
                 />
                 <NotificationItem 
                 status="New"
                 msg="⚡Flick Checkout is fast & easy to use. Dear Valued Customer, Did you know that Flick Checkout is the quickest and easiest way to..."
                 time="2 mins ago"
                 />
                 
              </div>
              {/*  */}

              <div className='notification-btn'>
                <button onClick={handleReadAll} style={{width:"fit-content"}} className='btn'>Mark all as read</button>
                <button style={{width:"fit-content"}} className='btn'>Clear all</button>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Notification
