import React from 'react'
import   "./Button.css"


const Button = ({buttonName,onclick,classNameButton}) => {
  return (
   
      <button className={`button ${classNameButton}`}  onClick={onclick}  >{buttonName}</button>
    
  )
}

export default Button
