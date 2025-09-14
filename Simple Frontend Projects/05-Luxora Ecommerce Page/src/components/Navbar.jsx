import React, { useState } from 'react'
import { Navlinks } from '../assets'
import {SearchIcon,User,ShoppingBag} from 'lucide-react'
import '../App.css'
const Navbar = ({cartCount}) => {
    const [viewSection,setViewSection] = useState('Shop')
  return (
    <header className='fixed z-20 backdrop-blur-lg bg-white/80 flex items-center justify-between shadow-2xl  px-10 lg:px-24 py-7 w-full' id='navbar'>
        <a className='font-bold text-3xl' href='#'>Luxora</a>
        <div className='hidden lg:inline-block'>
            <ul className='flex gap-10 text-xl'>
                {Navlinks.map((link) => (
                    <a key={link} href={link.url} onClick={() => setViewSection(link.label)} className={`hover-underline-animation`}>{link.label}</a>
                ))}
            </ul>
        </div>
        <div className="flex gap-5 lg:pr-20">
            <SearchIcon className='hover:bg-gray-200 p-2 size-10 rounded-md cursor-pointer'/>
            <User className='hover:bg-gray-200 p-2 size-10 rounded-md cursor-pointer'/>
            <div>
                <ShoppingBag className='hover:bg-gray-200 p-2 size-10 rounded-md cursor-pointer'/>
                <h2 className='bg-red-500 rounded-full w-4 h-4 text-center fixed top-7 ml-6 text-white text-xs'> <span>{cartCount}</span></h2>
            </div>
        </div>
    </header>
  )
}

export default Navbar