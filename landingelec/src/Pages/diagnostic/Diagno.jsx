import React from 'react'
import "./Diagno.css"
import Cart from '../../components/Cart'
import Button from '../../components/Button'
import Marquee from '../../components/Marquee'
const Diagno = () => {
  return (
    <div className='diagno-container' >

      <Marquee textContainer={"text-marquee-diagno"} classNameMarquee={"container-maquee-diagno"} text={"06 61 31 59 07 - Urgence 24H/24 7J/7"} />
        
        <h1 className='h1' >Pré-Diagnostic Gratuit</h1>

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
                          Des tuiles déplacées par le vent ?
                          Vous êtes au bon endroit : on s'occupe de tout.
                      </p>
                  </div>

            </div>


            <div className="block3 block">
              
              <div className="det">
                  <h2>Appeler Eléctricien Julien</h2>
                  <p> 
                      Une infiltration par votre toiture ? 
                      Des tuiles déplacées par le vent ?
                      Vous êtes au bon endroit : on s'occupe de tout.
                  </p>
              </div>
              
            </div> 



        </div>

     
        <div className="bg-diagno"></div>
    
        <Button classNameButton={"cta-button-diagno"} buttonName={"Contactez-nous maintenant!"} />
     

        

    </div>
  )
}

export default Diagno
