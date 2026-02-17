import React from 'react'
import Cart from '../../components/Cart'
import "./Service.css"
import install from "../../assets/install.png"
import rep from "../../assets/rep.png"
import secu from "../../assets/secu.png"
import Marquee from '../../components/Marquee'
import wrench from '../../assets/noto_hammer-and-wrench.png'
import noto from '../../assets/noto_electric-plug.png'
import secur from '../../assets/fxemoji_lock.png'



const Service = () => {
  return (
    <div className='container-service' >

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
