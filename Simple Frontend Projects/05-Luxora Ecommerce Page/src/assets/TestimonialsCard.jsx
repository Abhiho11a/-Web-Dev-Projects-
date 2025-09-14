import { Star } from 'lucide-react'
import React from 'react'
import profileImg from './Images/profile.avif'
const TestimonialsCard = ({card}) => {
    let StarHtml = ''
    for (let index = 0; index < card.rating; index++) {
        StarHtml +=  '⭐'
    }
  return (
    <div className='grid flex-col gap-5 rounded-2xl border-2 border-gray-200 px-10 p-5 items-start bg-gray-50 hover:shadow-xl transition-all duration-300'>
        <span className='flex gap-1 text-2xl'>
            {StarHtml}
        </span>
        <div className="flex flex-col items-center">
            <h2 className="text-gray-500 text-left">{card.content}</h2>
        </div>
        <div className="flex justify-center justify-self-start items-center gap-5">
            <img src={profileImg} alt={card.name} className='rounded-full' width={60} height={60}/>
            <div className='flex flex-col text-left'>
                <h2 className='font-black'>{card.name}</h2>
                <p className='text-gray-500'>{card.profession}</p>
            </div>
        </div>
    </div>
  )
}

export default TestimonialsCard
