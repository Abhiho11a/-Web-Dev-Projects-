import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import code from '../assets/code.png'
import {checklistItems} from '../Info/info'

function WorkFlow() {
  return (
    <div className='flex justify-center flex-col items-center mt-20 border-t border-neutral-500' id='workflow'>
        <h2 className='text-3xl lg:text-6xl mt-15'>Accelerate your <span className='bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text'>coding workflow</span></h2>

        <div className='lg:flex-row mt-20 gap-5 flex flex-col items-center justify-center'>
            <div className="lg:w-1/2">
            <img src={code} alt="code-image"/>
            </div>

            <div className="lg:w-1/2  flex flex-col space-y-10 mt-10">
            {
                checklistItems.map((listItems,idx) => (
                    <div className="flex " key={idx}>
                        <div>
                            <CheckCircle2 className="text-green-500 w-5 h-5 mt-1 mr-3" />
                        </div>
                        <div className='flex flex-col'>
                            <h2 className='text-3xl sm:text-2xl'>{listItems.title}</h2>
                            <p className='text-md text-gray-400'>{listItems.description}</p>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default WorkFlow