import React from 'react'
import Cart from '../../components/Cart'
import "./Service.css"
import install from "../../assets/install.png"
import rep from "../../assets/rep.png"
import secu from "../../assets/secu.png"
 

const Service = () => {
  return (
    <div className='container-service' >
      
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
  )
}

export default Service
