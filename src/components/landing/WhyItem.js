import React from 'react'

function WhyItem({title,desc,line}) {
  return (
    <div className='why-container'>
        <div className='why-item-img'>
                <img src='/images/ellipsNumB.svg' alt='alt'/>
                {
                 line &&
                 <span className='verticalLine'></span>   
                }
        </div>
        <div className='why-item-content'>
            <div className='why-item'>
                <h1 className='why-title'>{title}</h1>
                <p className='why-desc'>{desc}</p>
            </div>
        </div>
    </div>
  )
}

export default WhyItem
