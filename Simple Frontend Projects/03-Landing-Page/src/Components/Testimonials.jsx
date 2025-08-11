import React from 'react'
import {testimonials} from '../Info/info'

function Testimonials({theme}) {
  return (
    <div className='mt-25 tracking-wide border-t border-neutral-500' id='testimonials'>
        <h2 className={`text-3xl lg:text-6xl sm:text-5xl text-center space-x-2 mt-15 ${theme === "light"?"text-[#333]":""}`}>What People are saying</h2>

        <div className='flex flex-wrap justify-center '>
        {testimonials.map((info,idx) => (
            <div key={idx} className =" w-full sm:w-1/2 lg:w-1/3 mt-10">
               
            <div className="bg-neutral rounded-md p-6 border border-neutral-800 ml-2 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/30">
               <p className={`${theme === "light"?"text-[#666666]":""}`}>{info.text}</p>
               
                <div className='flex  mt-10'>
                    <div className='w-10 h-10 '>
                    <img src={info.image} className='rounded-full' alt=""/>
                    </div>
                    <div className='ml-5'>
                        <h1>{info.user}</h1>
                        <p className={`text-x ${theme === "light"?"text-[#999999]":"text-neutral-500"}`}>{info.company}</p>
                    </div>
                </div>
                </div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Testimonials