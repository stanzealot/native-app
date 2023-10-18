import React from 'react'

function DataItem({subtitle,title,desc}) {
  return (
    <div className='data-tool-item'>
        <img src="/images/dattool.svg" alt='data' />
        <p className='data-subtitle'>{subtitle}</p>
        <h5 className='data-title'>{title}</h5>
        <p className='data-desc'>{desc}</p>
    </div>
  )
}

export default DataItem
