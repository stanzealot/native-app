import React from 'react'

function ProductItem({img,title,desc}) {
  return (
    <div className='flick-product-item'>
        <img src={img} alt='product'/>
        <div className='flick-product-item-content'>
            <h3 className='product-checkout'>{title}</h3>
            <p className='checkout-desc'>{desc}</p>
        </div>
    </div>
  )
}

export default ProductItem
