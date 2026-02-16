import React from 'react'
import Cart from '../../components/Cart'
import "./Service.css"
const Service = () => {
  return (
    <div className='container-service' >
      
      <Cart buttonCartName={"Contactez-nous"} />
      <Cart buttonCartName={"Appelez maintenant"} />
      <Cart buttonCartName={"Appelez vite"} />
    </div>
  )
}

export default Service
