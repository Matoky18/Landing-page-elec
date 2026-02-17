import React from 'react'
import Cart from '../../components/Cart'
import "./Service.css"
import install from "../../assets/install.png"
import rep from "../../assets/rep.png"
import secu from "../../assets/secu.png"
import Marquee from '../../components/Marquee'
 

const Service = () => {
  return (
    <div className='container-service' >
      
      <Marquee text={"06 61 31 59 07 - Urgence 24H/24 7J/7  "}  textContainer={"marquee-service"} classNameMarquee={"Marquee-conaiter"} />
        <div className="hero-service">
          
            <Cart buttonCartName={"Contactez-nous"} 
            cartName={"Dépannage éléctrique"} 
            detailsCart={"Appareils Défectueux, Panne Électrique, Disjoncteurs & Fusibles"} 
            urlImageCart={rep}
            
            />
            <Cart buttonCartName={"Appelez maintenant"} 
            cartName={"Installation éléctrique"} 
            detailsCart={"Prises, Interrupteurs, Tableau Électrique, Éclairages, Mise à la Terre"}
            iconCart={""}
            urlImageCart={install}
            />
            <Cart buttonCartName={"Appelez vite"} 
            cartName={"Mise en sécurité"} 
            detailsCart={"Mise aux normes, disjoncteurs différentiels, protections des circuits"} 
            urlImageCart={secu}

            />
      </div>
     
    </div>
  )
}

export default Service
