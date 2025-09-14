import { Inbox, InboxIcon, LucideInbox, MessageCircle, MessageSquareIcon, MessagesSquareIcon } from 'lucide-react'
import React from 'react'
import Button from '../assets/Button'
import { SubscribeList } from '../assets'

const Subscribe = () => {
  return (
    <section className='flex gap-5 flex-col justify-between items-center px-10 lg:px-24 bg-gradient-to-br from-purple-700 via-pink-500 to-orange-600 py-25 text-white' id='contact'>
      <MessageCircle size="100"className='p-5 border-2 rounded-2xl'/>
      <div className='text-center'>
      <h2 className='text-3xl font-bold mb-3'>Stay in the Loop</h2>
      <p className='text-wrap'>Be the first to know about new collections, exclusive offers, and style tips. Join our community of fashion enthusiasts.</p>
      </div>
      <div className="flex gap-5 lg:flex-row items-center">
        <input type="text" placeholder='Enter your email address' className='bg-white rounded-xl text-gray-500 outline-none p-3'/>
        <Button label="Subscribe" color="bg-white" padx="2" txtColor="text-purple-700" hover="hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-400 hover:to-orange-500 hover:text-white"/>
      </div>
      <ol className='grid lg:grid-cols-4 grid-cols-2 gap-10 '>
        {SubscribeList.map(it => (
          <li className='list-disc'>{it}</li>
        ))}
      </ol>
      <h2>Join 10,000+ fashion lovers who never miss an update</h2>
      </section>
  )
}

export default Subscribe;
