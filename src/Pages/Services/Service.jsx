import React, { useEffect, useRef } from 'react'
import Cart from '../../components/Cart'
import "./Service.css"
import install from "../../assets/install.png"
import rep from "../../assets/rep.png"
import secu from "../../assets/secu.png"
import Marquee from '../../components/Marquee'
import wrench from '../../assets/noto_hammer-and-wrench.png'
import noto from '../../assets/noto_electric-plug.png'
import secur from '../../assets/fxemoji_lock.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);



const Service = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(".cart-container",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "restart none restart none",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [])

  return (
    <div ref={containerRef} className='container-service' >

      <Marquee text={"06 61 31 59 07 - Urgence 24H/24 7J/7  "} textContainer={"marquee-service"} classNameMarquee={"Marquee-conaiter"} />
      <div className="hero-service">

        <Cart buttonCartName={"Contactez-nous"}
          cartName={"Dépannage éléctrique"}
          detailsCart={"Appareils Défectueux, Panne Électrique, Disjoncteurs & Fusibles"}
          urlImageCart={rep}
          iconCart={wrench}
          iconButton={<i className='bx bxs-phone-call' style={{ marginRight: "10px" }} ></i>}
        />
        <Cart buttonCartName={"Appelez maintenant"}
          cartName={"Installation éléctrique"}
          detailsCart={"Prises, Interrupteurs, Tableau Électrique, Éclairages, Mise à la Terre"}
          iconCart={noto}
          urlImageCart={install}
          iconButton={<i className='bx bxs-phone-call' style={{ marginRight: "10px" }} ></i>}
        />
        <Cart buttonCartName={"Appelez vite"}
          cartName={"Mise en sécurité"}
          detailsCart={"Mise aux normes, disjoncteurs différentiels, protections des circuits"}
          urlImageCart={secu}
          iconCart={secur}
          iconButton={<i className='bx bxs-phone-call' style={{ marginRight: "10px" }} ></i>}

        />
      </div>

    </div>
  )
}

export default Service
