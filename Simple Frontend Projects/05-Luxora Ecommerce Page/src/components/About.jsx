import React from 'react'
import { AboutInfo, SalesData } from '../assets'
import { Clock, Star, StarIcon } from 'lucide-react'
import Button from '../assets/Button'

const About = () => {
  return (
    <section className='flex gap-20 flex-col px-10 lg:px-24 bg-gray-50 py-25' id="about">
      <div className='text-center'>
        <h2 className='text-3xl font-bold'>Why Choose Luxora?</h2>
        <p className='mt-3'>We're committed to providing you with the best shopping experience <br /> through our premium services</p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 items-center m-auto justify-center gap-7">
        {AboutInfo.map(card => (
          <div className='flex max-w-md flex-col justify-center items-center shadow-2xl shadow-gray-200 bg-white rounded-2xl p-10 gap-5 group hover:shadow-gray-400 transition-all duration-400'>
            <card.icon className={`${card.bgcol} ${card.txtcol} rounded-2xl size-15 p-3 group-hover:scale-110 transition-all duration-400`}/>
            <h2>{card.label}</h2>
            <p className='text-center text-slate-600'>{card.content}</p>
          </div>
        ))}
      </div>
      <div className=' flex flex-col justify-center items-center gap-10 bg-white rounded-2xl shadow-2xl shadow-gray-200 p-10'>
        <div><h2 className='text-3xl font-bold text-center'>Trusted By Thousands</h2>
        <p className='text-slate-500 text-center'>Our numbers speak for themselves</p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 w-full justify-around">
          {SalesData.map(data => (
            <div className='flex justify-center items-center '>
              <span className='mt-5'><h2 className='text-4xl font-bold text-center '>{data.count}</h2>
              <p className='text-sm text-slate-500 text-center'>{data.label}</p></span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-10 rounded-2xl bg-gradient-to-r from-purple-700  to-pink-600 justify-center items-center p-10">
        <div className='flex gap-3 flex-col justify-center items-center'>
        <span className='flex gap-1'>
          <Star className='text-yellow-400 fill-amber-400'/>
          <Star className='text-yellow-400 fill-amber-400'/>
          <Star className='text-yellow-400 fill-amber-400'/>
          <Star className='text-yellow-400 fill-amber-400'/>
          <Star className='text-yellow-400 fill-amber-400'/>
        </span>
        <h2 className='text-3xl text-white font-bold text-center'>Ready to Experience Premium Quality?</h2>
        <p className='text-xl text-slate-200 text-center'>Join thousands of satisfied customers who trust Luxora for their fashion <br /> needs</p>
        </div>
        <div className="flex gap-5 lg:flex-row md:flex-row flex-col">
          <Button label="Start Shopping Now" color="bg-white" txtColor="text-purple-700"/>
          <Button label="Browse Catalog" imgUrl={Clock} color="bg-transparent" padx="5" txtColor="text-white"/>
        </div>
       
      </div>
      
    </section>
  )
}

export default About
