import React, { useEffect, useRef } from 'react'
import Button from '../../components/Button'
import "./FastService.css"
import gsap from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const FastService = () => {
  const buttonRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Entrance Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "restart none none none", // Replays on scroll down
        },
        defaults: { ease: "power3.out", duration: 1 }
      });

      tl.fromTo(containerRef.current.querySelector('h1'),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1 }
      )
        .fromTo(".image-FastService",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1 },
          "-=0.6"
        );

      // 2. Pulse Animation
      gsap.to(buttonRef.current, {
        scale: 1.05,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      })
    }, containerRef);

    return () => ctx.revert();
  }, [])

  return (
    <div ref={containerRef} className='container-FastService' >
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

