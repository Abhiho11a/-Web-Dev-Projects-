import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import {pricingOptions} from '../Info/info'

function Pricing() {
  return (
    <div className='mt-25 border-t border-neutral-500'id='pricing'>
        <h2 className='text-3xl text-center sm:text-5xl lg:text-6xl mt-15' >Pricing</h2>
         
        <div className='grid sm:justify-center flex-wrap mt-10 lg:grid-cols-3 gap-5  md:grid-cols-2 sm:grid-cols-1'>
            {pricingOptions.map((it,idx) => (
                <div className='flex lg:hover:scale-101 transition-all flex-col border border-gray p-8' key={idx}>
                    <div className='flex '>
                    <h2 className='text-3xl'>{it.title}</h2>
                    <p>{it.title==="Pro" && <span className='text-xl mb-2 ml-2 bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text'> (Most Popular)</span>}</p>
                    </div>
                    <p className='text-3xl lg:text-5xl mt-8'>{it.price} <span className='text-xl text-neutral-500'>/Month</span></p>

                    <ul >
                    {it.features.map((feature,idx) => (
                        <li key={idx} className='flex mt-8'>
                            <CheckCircle2/>
                            <span className='ml-2'>{feature}</span>
                        </li>
                    ))}
                    </ul>

                    <a href='#' className='text-3xl mt-20 border border-neutral-500 p-2 text-center hover:bg-orange-700/100 transition-all duration-800'>Subscribe</a>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Pricing