import React from 'react'
import {resourcesLinks} from '../Info/info'
import {platformLinks} from '../Info/info'
import {communityLinks} from '../Info/info'


function Footer() {
  return (
    <footer className='mt-25  border-t border-neutral-500 w-full ' id='footer' >
        <div className="grid lg:grid-cols-3 grid-cols-2  gap-5 mt-15 mb-5">
            <div>
                <h3 className='text-2xl font-semibold mb-4'>Resources</h3>

                <ul>
                    {resourcesLinks.map((reslink,idx) => (
                        <li key={idx}>
                            <a href='' className='text-md text-neutral-500 hover:text-red-600 hover:underline  leading-8'>{reslink.text}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className='text-2xl font-semibold mb-4'>Platforms</h3>

                <ul>
                    {platformLinks.map((plalink,idx) => (
                        <li key={idx}>
                            <a href='' className='text-md text-neutral-500 hover:text-red-600 hover:underline leading-8'>{plalink.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
            
            <div>
                <h3 className='text-2xl font-semibold mb-4'>Community</h3>

                <ul>
                    {communityLinks.map((comlink,idx) => (
                        <li key={idx}>
                            <a href='' className='text-md text-neutral-500 hover:text-red-600 hover:underline leading-8'>{comlink.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>    
    </footer>
  )
}

export default Footer