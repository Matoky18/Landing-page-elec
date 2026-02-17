import React from 'react'
import "./Cart.css"
import Button from './Button'


const Cart = ({buttonCartName,iconCart,cartName,detailsCart,urlImageCart}) => {
  return (
    <div className='cart-container' >
      
      <div className="top-cart">
          <h1>{cartName}</h1>
      
          <img src= {iconCart} alt="" />
      </div>
      <p>{detailsCart} </p>
      <div style={{backgroundImage :  `url(${urlImageCart})` }} className="image-block"></div>
      <Button classNameButton={"cart-button"} buttonName={buttonCartName} />
      
    </div>
  )
}

export default Cart
