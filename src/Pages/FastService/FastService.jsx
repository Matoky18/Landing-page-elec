import React, { useEffect, useRef } from 'react'
import Button from '../../components/Button'
import "./FastService.css"
import gsap from 'gsap'

const FastService = () => {
  const buttonRef = useRef(null)

  useEffect(() => {
    gsap.to(buttonRef.current, {
      scale: 1.05,
      duration: 0.8,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    })
  }, [])

  return (
    <div className='container-FastService' >
      <div className="stars">

      </div>
      <h1>VOTRE ELECTRICIEN EST  PRET A INTERVENIR PRES DE CHEZ VOUS !</h1>
      <div className="image-FastService">

        <Button
          ref={buttonRef}
          classNameButton={"cta-fast"}
          buttonName={"Chez vous en 30 minutes  Appelez !"}
          phoneNumber={"06 61 31 59 07"}
          iconButton={<i className='bx bxs-phone-call' style={{ marginRight: "10px" }} ></i>}
        />

      </div>
    </div>
  )
}

export default FastService

