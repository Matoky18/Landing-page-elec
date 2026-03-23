import Diagno from './Pages/diagnostic/Diagno'
import FastService from './Pages/FastService/FastService'
import Footer from './Pages/Footer/Footer'
import Welcome from './Pages/Hello/Welcome'
import Service from './Pages/Services/Service'
import "./App.css"
import gsap from "gsap"

function App() {


  return (
    <>
      
      <Welcome />
      <Diagno/>
      <Service/>
      <FastService/>
      <Footer/>
    </>
  )
}

export default App
