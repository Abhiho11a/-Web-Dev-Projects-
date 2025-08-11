import React, { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar.jsx'
import HeroSection from './Components/HeroSection.jsx'
import FeaturesSection from './Components/FeaturesSection.jsx'
import WorkFlow from './Components/WorkFlow.jsx'
import Pricing from './Components/Pricing.jsx'
import Testimonials from './Components/Testimonials.jsx'
import Footer from './Components/Footer.jsx'
import { ArrowUp } from 'lucide-react';


function App() {

  const [showArrowUp,setArrowUp] = useState(false);
  const [theme,setTheme] = useState("light")

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  window.addEventListener('scroll',()=>{
    window.scrollY > 1000 ? setArrowUp(true) : setArrowUp(false);
  })

  return (
    <div className={`${theme === "light"?"light":"dark"}`}>
      <Navbar theme={theme} setTheme={setTheme}/>

      {showArrowUp && <ArrowUp onClick={() => scrollToTop()} className='fixed bottom-0 right-0 bg-blue-500 rounded-full h-10 p-1 m-5 pointer z-10 hover:scale-120 transition-transform duration-300 lg:mr-15 lg:h-10 w-10'></ArrowUp>}
      
      <div className="max-w-7xl mx-auto p-20 px-6 ">
        <HeroSection theme={theme}/>
        <FeaturesSection theme={theme}/>
        <WorkFlow theme={theme}/>
        <Pricing theme={theme}/>
        <Testimonials theme={theme}/>
        <Footer theme={theme}/>
      </div>

    </div>
  )
}

export default App