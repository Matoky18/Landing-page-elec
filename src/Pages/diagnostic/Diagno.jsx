import React, { useEffect, useRef } from 'react'
import "./Diagno.css"
import Cart from '../../components/Cart'
import Button from '../../components/Button'
import Marquee from '../../components/Marquee'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const Diagno = () => {
  const buttonRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Entrance Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "restart none none none",
        },
        defaults: { ease: "power3.out", duration: 1 }
      });

      tl.fromTo("#pre-diagnostic-title",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1 }
      )
        .fromTo(".block",
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.2 },
          "-=0.6"
        )
        .fromTo(".bg-diagno",
          { opacity: 0, scale: 1.05 },
          { opacity: 1, scale: 1, duration: 1.5 },
          "-=1"
        )
        .fromTo("#diagno-cta-container",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1 },
          "-=1"
        );

      // 2. Continuous Pulsing Animation for Button
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
    <div ref={containerRef} className='diagno-container' >

      <Marquee textContainer={"text-marquee-diagno"} classNameMarquee={"container-maquee-diagno"} text={"06 61 31 59 07 - Urgence 24H/24 7J/7"} />

      <h1 id="pre-diagnostic-title" className='h1' >Pré-Diagnostic Gratuit</h1>

      <div className="hero-diagno">
        <div className="block1 block">
          <div className="det">
            <h2>Appeler Eléctricien Julien</h2>
            <p>
              Une infiltration par votre toiture ?
              Des tuiles déplacées par le vent ?
              Vous êtes au bon endroit : on s'occupe de tout.
            </p>
          </div>
        </div>


        <div className="block2 block">

          <div className="det">
            <h2>Appeler Eléctricien Julien</h2>
            <p>
              Une infiltration par votre toiture ?
              Des tuiles déplacées by le vent ?
              Vous êtes au bon endroit : on s'occupe de tout.
            </p>
          </div>

        </div>


        <div className="block3 block">

          <div className="det">
            <h2>Appeler Eléctricien Julien</h2>
            <p>
              Une infiltration par votre toiture ?
              Des tuiles déplacées by le vent ?
              Vous êtes au bon endroit : on s'occupe de tout.
            </p>
          </div>

        </div>



      </div>


      <div className="bg-diagno"></div>

      <div id="diagno-cta-container">
        <Button
          ref={buttonRef}
          classNameButton={"cta-button-diagno"}
          buttonName={"Contactez-nous maintenant!"}
          phoneNumber={"06 61 31 59 07"}
          iconButton={<i className='bx bxs-phone-call' ></i>}
        />
      </div>




    </div>
  )
}

export default Diagno
