import React from 'react'

function NotificationItem({status,read,msg,time}) {
  return (
    <div className="notification-item">
        <p className={`notification_status ${read ? read : ""}`}>{read?read:status}</p>
        <div className='notification_content'>
            <p className='notification_desc'>{msg}</p>
            <span className='notification_time'>{time}</span>
        </div>
    </div>
  )
}

export default NotificationItem
