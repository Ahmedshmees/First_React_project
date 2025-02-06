/* eslint-disable no-unused-vars */
import { useRef, useState ,useEffect } from 'react'
import Nav from './components/Nav'
import Main from './components/Main'
import Services from './components/Services'
import Order from './components/Order'
import Platform from './components/Platform'
import Footer from './components/Footer'
import Testimonial from './components/Testimonial'
import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    AOS.init({
      offset:200,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
    });
  });

  return (
    <>
      <Nav />
      <Main />
      <Services />
      <Order />
      <Platform />
      <Testimonial/>
      <Footer />
    </>
  )
}

export default App
