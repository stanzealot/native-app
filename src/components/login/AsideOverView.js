import React from 'react'

function AsideOverView() {
  return (
    <div className='aside-overview'>
      <div className='aside-overview-container'>
        <div className='aside-overveiw-content'>
            <h1 className='aside-overView-title'>
                Few things make me feel more powerful than setting up 
                automations in Untitled to make my life easier and more efficient.
            </h1>
            <div className='autho'>
                <div className='autho-content'>
                    <h5 className='autho-name'>— Aliah Lane</h5>
                    <p className='autho-role'>Founder, Layers.io</p>
                </div>
                <img src={process.env.PUBLIC_URL+"/images/Stars.svg"} alt="stars" />
            </div>
        </div>
        <img className='overviewImg' src={process.env.PUBLIC_URL+"/images/dasboardView.svg"} alt="dashboardOverview" />
      </div>
    </div>
  )
}

export default AsideOverView
