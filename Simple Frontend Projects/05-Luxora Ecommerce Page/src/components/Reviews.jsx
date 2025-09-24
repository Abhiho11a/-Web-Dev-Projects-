import React, { useState } from 'react'
import TestimonialsCard from '../assets/TestimonialsCard'
import { TestimonialInfo } from '../assets'
import { ReviewData } from '../assets'
import Button from '../assets/Button'
import ReviewForm from '../assets/ReviewForm'

const Reviews = () => {
    const [form,setForm] = useState(false)
  return (
    <section className='flex flex-col gap-15 px-10 lg:px-24 justify-center items-center text-center py-20'>
        {form && <ReviewForm closeForm = {() => setForm(false)}/>}
        {!form && <><div>
            <h2 className='font-bold text-3xl'>What Our Customers Say</h2>
            <p className='text-gray-500 mt-5 text-xl' >Don't just take our word for it. Here's what our valued customers have to <br /> say about their experience</p>
        </div>

        <div className="grid lg:grid-cols-3 max-w-[100%] flex-wrap place-items-center gap-10  md:grid-cols-2 sm:grid-cols-1">
            {TestimonialInfo.map(person => (
                <TestimonialsCard card={person}/>
            ))}
        </div>
        <div onClick={() => setForm(true)}>
            <Button label="Write a Review" color="bg-gray-200" hover="hover:border-2 hover:border-purple-500"/>
        </div>
        <div className="flex bg-gray-50 p-5 rounded-2xl border-gray-200 border-2">
            {ReviewData.map(data => (
                <div className='border-r-2 px-5 border-gray-400 last:border-0'>
                    <h2 className='font-bold text-xl lg:text-2xl'>{data.count}</h2>
                    <p className='text-gray-500 text-xs font-bold'>{data.label}</p>
                </div>
            ))}
        </div> </>}       
    </section>
  )
}

export default Reviews