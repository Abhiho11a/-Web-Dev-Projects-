import React, { useState } from 'react'
import { Eye, Heart, HeartIcon, HeartOff, HeartPulse, ShoppingCart } from 'lucide-react'
import Button from './Button'
import Notification from './Notification'
const ProductCard = ({prod,handleCart}) => {
  const [fav,setFav] = useState(prod.fav)
  const [showNotification,setShowNotification] = useState(false)
  const [notificationMsg,setNotificationMsg] = useState('')

  function handleFav(){
    fav?setNotificationMsg("Product unmarked as Favourite"):setNotificationMsg("Product marked as Favourite")
    setShowNotification(true)
    prod.fav = !prod.fav
    setFav(prod.fav)
  }
  function handleCartBtn(){
    setNotificationMsg("Product added to cart")
    setShowNotification(true)
    handleCart()
  }

  //To Hide Notification after 3 seconds
  setTimeout(()=>{
    setShowNotification(false)
    setNotificationMsg('')
  },3000)

  
  return (
    <div className='flex flex-col  bg-gray-50 lg:max-w-[100%] md:min-w-[100%] max-w-[70%] rounded-2xl hover:shadow-2xl transition-all duration-400 border-2 border-gray-100'>
        <div className='flex relative'>
          <div className='relative group overflow-hidden w-full rounded-t-2xl'>
            <img src={`src/assets/Images/product${prod.id}.avif`} alt="product img" className=' transition-transform group-hover:scale-102 object-cover' width={500} height={100}/>

            <div className="opacity-0 group-hover:opacity-100 transition-all duration-600">
              <div className='flex flex-col gap-3 right-5 top-5 absolute z-10'>
                  {fav ?
                  <Heart fill='red' onClick={() => handleFav()} className='bg-white rounded-full p-2 size-8 cursor-pointer'/>:
                  <Heart onClick={() => handleFav()} className='bg-white rounded-full p-2 size-8 cursor-pointer'/>}
                  {showNotification && <Notification msg={notificationMsg}/>}
              </div>
              <div className="flex justify-center absolute z-20 bottom-4 items-center w-full m-auto">
                <button onClick={() => handleCartBtn()}>
                  <Button label="Add To Cart" imgUrl={ShoppingCart} padx="10"/>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-5">
          <span className='flex'><p>{prod.rating}</p><p>{`(${prod.sales})`}</p></span>
          <h2>{prod.name}</h2>
        </div>
        
    </div>
  )
}

export default ProductCard