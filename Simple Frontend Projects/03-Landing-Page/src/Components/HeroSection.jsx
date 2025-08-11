import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video1.mp4'

function HeroSection({theme}) {
  return (
    <div className='flex flex-col items-center mt-6 lg:mt-10' id='herosection'>
        <h1 className={`text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide ${theme === "light"?"text-[#333]":""}`}>Feels like crafting or
            <span className='bg-gradient-to-r from-orange-500 to-red-700 text-transparent bg-clip-text'>{" "} <br />building tools <h2 className='text-white'>for code</h2></span>
        </h1>

        <p className='mt-10 text-lg text-center max-w-4xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem possimus dolores corporis accusantium minima illo atque voluptas earum odit doloribus exercitationem veniam, voluptates, doloremque, temporibus ea in vitae repellat quia!
        </p>

        <div className="flex justify-center my-10 space-x-10">
            <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 rounded-md'>Start for Free</a>
            <a href="#" className='px-4 py-3 rounded-md border-2 border-white-800 hover:bg-gradient-to-r from-amber-500 via-orange-600 to-red-500 transition-all duration-700'>Documentation</a>
        </div>

        <div className="flex max-w-6xl gap-5 mt-10 justify-center">
            <video src={video1} autoPlay muted loop
             className="w-1/2  rounded-md border border-orange-700"
             type="video/mp4"></video>
            <video src={video2} autoPlay muted loop
            className="w-1/2 rounded-md border border-orange-700"
            type="video/mp4"></video>
        </div>
    </div>
  )
}

export default HeroSection