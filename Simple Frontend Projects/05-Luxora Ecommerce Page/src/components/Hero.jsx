import React from 'react'
import Button from '../assets/Button'
import { ArrowRight, Play } from 'lucide-react'
import Hero_img from '../assets/Images/Hero-img.avif'
import { Boxes } from '../assets'
const Hero = () => {
  return (
    <section className='flex flex-col justify-between lg:flex-row items-center px-10 lg:px-24 min-h-screen bg-pink-50'>
      <div className="flex flex-1 flex-col gap-10 mt-30 items-center lg:items-start">
        <div className='flex flex-col lg:items-start items-center'>
          <div><h2 className='font-bold text-5xl lg:text-6xl'>Discover Your <br /> <span className='bg-gradient-to-r from-purple-700 to-pink-600 text-transparent bg-clip-text'>Perfect Style</span></h2></div>
           <p className='text-2xl w-[80%] sm:w-[100%] md:w-[60%] text-slate-600 text-wrap mt-10'>Elevate your wardrobe with our curated collection of premium fashion pieces. From timeless classics to contemporary trends.</p>
        </div>

        <div className="flex gap-8">
          <Button label="Shop Now" imgUrl={ArrowRight}/>
          <Button label="Watch Now" align="reverse" imgUrl={Play} color="bg-white"/>
        </div>
        <div className="flex flex-col lg:flex-row gap-5">
          {Boxes.map(box => (
            <div className='bg-white rounded-2xl shadow-2xl text-center p-5'>
              <h2 className='text-2xl font-bold'>{box.count}</h2>
              <p className='text-wrap text-gray-800 font-semibold'>{box.label}</p>
            </div>
          ))}
        </div>
        <div className='flex'>

        </div>
      </div>
      <div className='flex-1 flex items-center justify-center'>
        <img src={Hero_img} alt="hero Img" width={600} height={250} className='rounded-3xl'/>
      </div>
    </section>
  )
}

export default Hero
