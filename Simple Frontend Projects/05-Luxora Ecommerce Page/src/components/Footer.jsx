import { Facebook, Instagram, MapPin, MessageCircleCodeIcon, PhoneCall, Twitter, Youtube } from 'lucide-react';
import { FooterLinks } from '../assets';
const Footer = () => {
  return (
    <footer className='grid px-10 m-auto lg:px-24 bg-blue-950'>
      <div className='lg:flex sm:grid gap-5'>
        <div className="flex flex-1 flex-col gap-5 justify-self-start  py-10">
          <h2 className='text-purple-500 text-3xl font-semibold'>Luxora</h2>
          <p className='flex justify-self-start text-slate-400'>Elevating your style with premium fashion pieces that blend timeless elegance with contemporary trends.</p>
          <div className="flex gap-5 ">
            <Facebook className='bg-gray-700 p-2 rounded-md hover:bg-purple-500 text-white cursor-pointer transition-all' size="40"/>
            <Instagram className='bg-gray-700 p-2 rounded-md  hover:bg-purple-500 text-white cursor-pointer transition-all' size="40"/>
            <Twitter className='bg-gray-700 p-2 rounded-md  hover:bg-purple-500 text-white cursor-pointer transition-all' size="40"/>
            <Youtube className='bg-gray-700 p-2 rounded-md  hover:bg-purple-500 text-white cursor-pointer transition-all' size="40"/>
            
          </div>
        </div>
        <div className='flex flex-1/4 lg:gap-50 gap-20 items-center py-10'>
          {FooterLinks.map(it => (
            <div>
              <h2 className='text-white font-semibold'>{it.label}</h2>
              <ul className='grid mt-5'>
              {it.links.map(link => (
                <li className='leading-8 text-slate-400 hover:text-white cursor-pointer' >{link}</li>
              ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4  py-10">
          <h2 className='text-white font-semibold'>Get in Touch</h2>
          <span className='flex gap-2 '><MapPin className='text-purple-500'/> <p className='text-slate-400 hover:text-white cursor-pointer'>123 XYZ India, IN 10001</p></span>
          <span className='flex gap-2 '><PhoneCall className='text-purple-500'/> <p className='text-slate-400 hover:text-white cursor-pointer'>+91234567890</p></span>
          <span className='flex gap-2 '><MessageCircleCodeIcon className='text-purple-500'/> <p className='text-slate-400 hover:text-white cursor-pointer'>+91234567890</p></span>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col gap-5 justify-between text-gray-400 text-md py-5 border-t-2 border-slate-700">
        <div className='text-xs lg:text-sm md:text-sm'>Designed By:<b>Abhishek Holla</b></div>
        <div className='flex gap-5 text-xs lg:text-sm md:text-sm'>
          <a href='' className='hover:text-white' >Privacy Policy</a>
          <a href='' className='hover:text-white'>Terms of Service</a>
          <a href='' className='hover:text-white'>Cookie Policy</a>
          </div>      
      </div>
    </footer>
  )
}

export default Footer;