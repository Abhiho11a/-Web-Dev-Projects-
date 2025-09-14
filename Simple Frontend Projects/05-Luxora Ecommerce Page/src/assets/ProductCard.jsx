import React, { useState } from 'react'
import { Eye, Heart, HeartIcon, HeartOff, HeartPulse, ShoppingCart } from 'lucide-react'
import Button from './Button'
import Notification from './Notification'
import product1 from './Images/product1.png'
import product2 from './Images/product2.png'
import product3 from './Images/product3.png'
import product4 from './Images/product4.png'
import product5 from './Images/product5.png'
import product6 from './Images/product6.png'
import product7 from './Images/product7.png'
import product8 from './Images/product8.png'
import product9 from './Images/product9.png'
import product10 from './Images/product10.png'
import product11 from './Images/product11.png'
import product12 from './Images/product12.png'
import product13 from './Images/product13.png'
import product14 from './Images/product14.png'


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

  function imgtag(id){
    if(id === 1)
      return product1
    else if(id === 2)
      return product2
    else if(id === 3)
      return product3
    else if(id === 4)
      return product4
    else if(id === 5)
      return product5
    else if(id === 6)
      return product6
    else if(id === 7)
      return product7
    else if(id === 8)
      return product8
    else if(id === 9)
      return product9
    else if(id === 10)
      return product10
    else if(id === 11)
      return product11
    else if(id === 12)
      return product12
    else if(id === 13)
      return product13
    else if(id === 14)
      return product14
  } 
  return (
    <div className='flex flex-col  bg-gray-50 lg:max-w-[100%] md:min-w-[100%] max-w-[70%] rounded-2xl hover:shadow-2xl transition-all duration-400 border-2 border-gray-100'>
        <div className='flex relative'>
          <div className='relative group overflow-hidden w-full rounded-t-2xl'>
            <img src={imgtag(prod.id)} alt="product img" className=' transition-transform group-hover:scale-102 object-cover' width={500} height={100}/>

            <div className="opacity-100 lg:opacity-0 group-hover:opacity-100 transition-all duration-600">
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
