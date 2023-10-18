import React from 'react'
import './tables.scss'
function Status({icon,mgs,bg,color,border,num}) {
  return (
    <div className='btn-status' style={{backgroundColor:bg,border:`1px solid ${border}` }}>
      {
        icon &&
        <img src={process.env.PUBLIC_URL + icon}  alt="status"/>
      }
      <p className='btn-status-value' style={{color:color}}>{num && <span style={{marginRight:"3px"}}>{num}</span>}{mgs}</p>
    </div> 
  )
}

export default Status
