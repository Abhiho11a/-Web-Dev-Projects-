import React from 'react'
import { Navlinks } from '../assets'

const Menu = ({viewSection,setViewSection,closeMenu}) => {
    function handleClick(link){
        setViewSection(link.label)
        closeMenu()
    }
  return (
    <div className='bg-neutral-200 fixed p-10 flex flex-col mt-15 justify-center left-0 items-center w-full'>
        <ul className='flex flex-col gap-1 text-xl w-full'>
            {Navlinks.map((link) => (
                <a key={link} href={link.url} onClick={() => handleClick(link)} className={`${viewSection === link.label?'bg-gray-400 text-white':'bg-gray-300'} bg-none p-3 w-full hover:bg-gray-400 hover:text-white text-center`}>{link.label}</a>
            ))}
        </ul>
    </div>
  )
}

export default Menu