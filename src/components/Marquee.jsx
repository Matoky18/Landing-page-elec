import React, { useEffect, useRef } from 'react'
import "./Marquee.css"
import gsap from "gsap";



const Marquee = ({text,classNameMarquee,textContainer,text2}) => {

    const textref = useRef()
    const containerRef = useRef()

    useEffect(()=>{

        const widthText = textref.current.scrollWidth; 
        const widthContainer = containerRef.current.scrollWidth

        gsap.fromTo(
            textref.current, 
            {
                
                x : widthContainer/2 ,
            },

            {
                
                repeat : -1,
                duration : 10,
                 x: -widthText, 
                // delay : 0.5, 
                // yoyo : true,
                ease: "linear"
            }
        )
    },[])

  return (
    <div ref={containerRef} className= {`container-marquee ${classNameMarquee}`} >
        <h1 className= {textContainer}  ref={textref} > {text} </h1>
    </div>
  )
}

export default Marquee
