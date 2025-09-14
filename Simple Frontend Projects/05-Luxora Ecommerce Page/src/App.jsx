import { useState } from 'react'
import './App.css'
import Notification from './assets/Notification'
import About from './components/About'
import FeaturedProducts from './components/FeaturedProducts'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Reviews from './components/Reviews'
import Subscribe from './components/Subscribe'

function App() {
  const [cartCount,setCartCount] = useState(0)

  return (
    <main>
    <Navbar cartCount={cartCount}/>
    <Hero/>
    <FeaturedProducts cartCount={cartCount} setCartCount={() => setCartCount(count => count+1)}/> 
    <About/>
    <Reviews/>
    <Subscribe/>
    <Footer/>
    </main>
  )
}

export default App
