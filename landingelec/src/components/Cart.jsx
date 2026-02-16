import React from 'react'
import "./Cart.css"
import Button from './Button'


const Cart = ({buttonCartName,iconCart}) => {
  return (
    <div className='cart-container' >
      
      <h1>cart-name</h1>
      
      <img src= {iconCart} alt="" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis </p>
      <div className="image-block">a</div>
      <Button classNameButton={"cart-button"} buttonName={buttonCartName} />
      
    </div>
  )
}

export default Cart
