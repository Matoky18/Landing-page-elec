import React, { useEffect, useRef } from 'react'
import Button from '../../components/Button'
import './Welcome.css'
import Marquee from '../../components/Marquee'
import gsap from "gsap";


const welcome = () => {

    const urgenceRef = useRef()
    const numContentRef = useRef()
    const phoneIconRef = useRef()
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

        gsap.fromTo(
            phoneIconRef.current,
            { rotation: -10 },
            {
                rotation: 10,
                duration: 0.1,
                repeat: -1,
                yoyo: true,
                ease: "linear",
                transformOrigin: "center center"
            }
        )

    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsStickyHidden(true);
                } else {
                    if (entry.boundingClientRect.top < 0) {
                        // Element is above the viewport (we scrolled past it) -> Hide
                        setIsStickyHidden(true);
                    } else {
                        // Element is below the viewport (we haven't reached it) -> Show
                        setIsStickyHidden(false);
                    }
                }
            },
            { threshold: 0 }
        );

        const target = document.getElementById('diagno-cta-container');
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
                <div className="logo"></div>
                <div className="num"> <div ref={numContentRef} className="num-content"><i ref={phoneIconRef} className='bx bxs-phone' style={{ marginRight: "10px", display: "inline-block" }}></i>06 61 31 59 07<span className="desktop-text"> - Urgence 24H/24 7J/7</span></div> </div>
                <Button onclick={() => { }} buttonName={"Appelez-maintenant"} classNameButton={`cta-welcome ${isStickyHidden ? 'sticky-hidden' : ''}`} iconButton={<i className='bx bxs-phone-call' style={{ marginRight: "10px" }} ></i>} phoneNumber={"06 61 31 59 07"} />
            </div>

            <div className="phrases">

                <h1> Electricité Julien</h1>
                <h2 className="experience-text">Plus de 25 ans d’expérience</h2>

                <h3>
                    Besoin d’un électricien rapidement ? <br />
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