import React from 'react'
import "./Diagno.css"
import Cart from '../../components/Cart'
import Button from '../../components/Button'
const Diagno = () => {
  return (
    <div className='diagno-container' >
        
        <h1>Pré-Diagnostic Gratuit</h1>

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
