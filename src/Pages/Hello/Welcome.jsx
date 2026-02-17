import React, { useEffect, useRef } from 'react'
import Button from '../../components/Button'
import './Welcome.css'
import Marquee from '../../components/Marquee'
import gsap from "gsap";


const welcome = () => {

    const urgenceRef = useRef()
    const numContentRef = useRef()
    const [isStickyHidden, setIsStickyHidden] = React.useState(false);


    useEffect(() => {
        const widthContent = numContentRef.current.scrollWidth

        gsap.fromTo(
            urgenceRef.current,
            {
                color: "red"
            },
            {
                repeat: -1,
                color: "yellow",
                duration: 1,
                yoyo: true
            }
        )

        gsap.fromTo(
            numContentRef.current,

            {
                color: "blue"

            },
            {
                color: "green",
                repeat: -1,
                yoyo: true,

            }
        )

    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsStickyHidden(entry.isIntersecting);
            },
            { threshold: 0 }
        );

        const target = document.getElementById('pre-diagnostic-title');
        if (target) {
            observer.observe(target);
        }

        return () => {
            if (target) {
                observer.unobserve(target);
            }
        };
    }, []);



    return (
        <div className='container-welcome' >

            <div className='header-welcome-page' >
                <div className="logo">Logo</div>
                <div className="num"> <div ref={numContentRef} className="num-content">06 61 31 59 07 - Urgence 24H/24 7J/7</div> </div>
                <Button onclick={() => { }} buttonName={"Appelez-maintenant"} classNameButton={`cta-welcome ${isStickyHidden ? 'sticky-hidden' : ''}`} iconButton={""} phoneNumber={"06 61 31 59 07"} />
            </div>

            <div className="phrases">

                <h1> Electricité Julien</h1>

                <h3>Besoin d’un électricien rapidement ? <br />
                    Un professionnel de confiance vous répond
                    immédiatement et arrive vite.
                </h3>



            </div>

            <div className="image-urgence">
                <div ref={urgenceRef} className="urgence">Urgence 24H/24 7J/7</div>
                <div className="image-welcome"></div>
            </div>
        </div>
    )
}

export default welcome