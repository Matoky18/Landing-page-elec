import React from 'react'
import Button from '../../components/Button'
import './Welcome.css'
import Marquee from '../../components/Marquee'
const welcome = () => {

   

    return (
        <div className='container-welcome' >

            <div className='header-welcome-page' >
                <div className="logo">Logo</div>
                <Marquee/>
                <Button onclick={()=>{}} buttonName={"Appelez-maintenant"} classNameButton={"cta-welcome"} iconButton={""} />
            </div>

            <div className="phrases">

                <h1> Electricité Julien</h1>

                <h3>Besoin d’un électricien rapidement ? <br />
                    Un professionnel de confiance vous répond
                     immédiatement et arrive vite.
                </h3>

                

            </div>
            <div className="image-urgence">
                    <div className="urgence">Urgence 24H/24 7J/7</div>
                    <div className="image-welcome">aa</div>
            </div>
        </div>
    )
}

export default welcome