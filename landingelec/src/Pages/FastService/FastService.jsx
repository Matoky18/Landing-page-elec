import React from 'react'
import Button from '../../components/Button'
import "./FastService.css"

const FastService = () => {
  return (
    <div className='container-FastService' >
      <div className="stars">

      </div>
      <h1>VOTRE ELECTRICIEN EST  PRET A INTERVENIR PRES DE CHEZ VOUS !</h1>
      <div className="image-FastService">

        <Button classNameButton={"cta-fast"} buttonName={"Chez vous en 30 minutes – Appelez !"} phoneNumber={"06 61 31 59 07"} />

      </div>
    </div>
  )
}

export default FastService

