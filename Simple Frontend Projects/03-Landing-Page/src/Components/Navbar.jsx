import React, { useState } from 'react'
import logo_png from '../assets/logo.png' 
import {navItems} from '../Info/info'
import {Menu , MoonIcon, SunIcon, X} from "lucide-react"

function Navbar({theme,setTheme}) {
    const [drawerOpen,setDrawerOpen] = useState(false);

    const toggleDrawerBtn = () => {
        setDrawerOpen(!drawerOpen);
    }
  return (
    <nav className="sticky top-0 z-50 py-1 backdrop-blur-lg border-b border-neutral-700/80" id="navbar">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center p-3">

                <div className="flex item-center flex-shrink-0">
                    <a href="#">
                    <img src={logo_png} alt="" className="h-10 w-10 mr-2" />
                    <span className="text-xl tracking-tight mt-2">CodeCraft</span></a>
                </div>

                <ul className={`hidden lg:flex ml-14 space-x-12 ${theme === "light"?"text-[#1F2937]":"text-white"}`}>
                    {navItems.map((it,index) => (
                        <li key={index}>
                            <a href={`#${it.href}`} className='hover-underline-animation text-2xl hover:text-[#F97316]'>{it.label}</a>
                        </li>))}
                </ul>
                <div className="hidden lg:flex justify-center space-x-12 items-center cursor-pointer">
                    <div onClick={() => theme === 'light'?setTheme('dark'):setTheme('light')} className={`cursor-pointer ${theme === "light"?'hover:bg-gray-400':'hover:bg-gray-700'} rounded-full hover:scale-120 transform p-1 transition-all`}>
                        {theme === "light"?(<MoonIcon />):(<SunIcon/>)}        
                    </div>       
                    <a href="#" className='py-2 px-3 border rounded-md hover:bg-gradient-to-r from-amber-500 via-orange-600 to-red-500 transition-all duration-700'>Sign In</a>
                    <a href="#" className='bg-gradient-to-r from-amber-500 via-orange-600 to-red-500 py-2 px-3 rounded-md'>Create an account</a>
                </div>

                <div className="lg:hidden md:flex flex gap-5 justify-end">
                    <div onClick={() => theme === 'light'?setTheme('dark'):setTheme('light')} className={`cursor-pointer ${theme === "light"?'hover:bg-gray-400':'hover:bg-gray-700'} rounded-full hover:scale-120 transform p-1 transition-all`}>
                        {theme === "light"?(<MoonIcon />):(<SunIcon/>)}        
                    </div>
                    <button className='cursor-pointer hover:scale-120 transform transition-all' onClick={toggleDrawerBtn}>{drawerOpen ? <X/>:<Menu/>}</button>
                </div>
            </div>
            
            {drawerOpen && (
                <div className={`lg:hidden fixed right-0 z-50 ${theme === 'light'?'bg-neutral-100':'bg-neutral-800'} w-full p-12 flex flex-col justify-center items-center`}>
                    <ul>
                        {navItems.map((it,idx) =>(
                            <a href={`#${it.href}`} onClick={() => setDrawerOpen(false)} className={`flex py-2 ${theme === "dark"?'hover:bg-gray-800':'hover:bg-gray-200'} px-50 text-xl`} key={idx}>{it.label}</a>
                        ))}
                        </ul>

                        <div className="flex space-x-8 mt-10">
                            <a href="#" className='py-2 px-3 border rounded-md'>Sign In</a>
                            <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>Create an account</a>
                        </div>
                </div>)}
                
        </div>
    </nav>
  )
}

export default Navbar;