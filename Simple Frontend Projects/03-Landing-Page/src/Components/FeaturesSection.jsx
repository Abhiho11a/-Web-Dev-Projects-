import React from 'react'
import { features } from '../Info/info'

function FeaturesSection({theme}) {
  return (
    <div className='relative mt-25 border-t border-neutral-500 min-h-[700px] px-4' id='features'>
      <div className="text-center mt-15">
        <span className=' text-orange-500 text-5xl sm:text-5xl lg:text-6xl'>
          Feature
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10">
          Easily build <span className='bg-gradient-to-r from-orange-500 to-red-700 text-transparent bg-clip-text'>your code</span>
        </h2>
      </div>

      <div className="flex flex-wrap mt-16 gap-y-12">
        {features.map((feature,idx) =>(
            <div className='w-full sm:1/2 lg:w-1/3 hover:scale-105 transition-all duration-200' key={idx}>
                <div className='flex '>
                    <div className="flex  mx-6 h-10 w-10 p-10 bg-neutral-900  items-center rounded-full">
                    abcd
                    </div>

                    <div>
                        <h5 className='mt-1 mb-6 text-xl'>{feature.text}</h5>
                        <p className='text-gray-400'>{feature.description}</p>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturesSection
