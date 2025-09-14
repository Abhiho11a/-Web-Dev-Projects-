import { ArrowRight, FilterIcon, Search, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Button from '../assets/Button'
import { FilterButtons, Products } from '../assets'
import ProductCard from '../assets/ProductCard'

const FeaturedProducts = ({setCartCount}) => {

  const [activeCategory, setActiveCategory] = useState("All");
  const [products,setProds] = useState(Products)
  const [searchedProd,setSearchedProd] = useState('')

 useEffect(() => {
  if (searchedProd === "") {
    setProds(Products);
  } else {
    const filtered = Products.filter(prod =>
      prod.name.toLowerCase().includes(searchedProd.toLowerCase())
    );
    setProds(filtered);
  }
}, [searchedProd]);

  
  function setBtnActive(category){
    console.log(category)
    setActiveCategory(category)
    setProds(Products)

    if(category === "All")//If All Category Is applied then it'll not filter anything
      return 
    
    const filteredProds = Products.filter(it => it.category === category)
    setProds(filteredProds)
  }
  return (
    <section className='flex flex-col px-10 lg:px-24 gap-15 w-full py-25' id='collections'>
      <div>
        <h2 className='text-center font-bold text-3xl'>Featured Products</h2> <br />
        <p className='text-center text-wrap text-xl text-slate-500'>Discover our handpicked selection of premium items that blend style, <br /> quality, and elegance</p> 
      </div>  
      <div className="flex lg:flex-row flex-col justify-between w-full">
        <div className='flex gap-2 border-2 border-slate-300 rounded-sm p-2 flex-1/3 max-h-[50px] max-w-[500px]'>
          <Search/>
          <input type="text" value={searchedProd} onChange={(e) => setSearchedProd(e.target.value)} placeholder='Search Products...' className='border-none outline-none w-full'/>
          <X onClick={() => setSearchedProd('')} className='cursor-pointer hover:bg-gray-200'/>
        </div>
        <div className='flex flex-wrap flex-1/2 items-center gap-3 mt-5 lg:mt-0 m justify-center lg:justify-end'>
          <FilterIcon className='text-slate-700 '/>
          {FilterButtons.map(btn => (
            <div onClick={() => setBtnActive(btn.label)}>
            <Button key={btn.label} label={btn.label} color="bg-white" active={activeCategory === btn.label} hover={"hover:bg-gray-100 hover:border-purple-300"}/></div>
          ))}
        </div>
      </div>
      <div className="grid place-items-center justify-center items-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 ">
        {products.map(prod => (
          <ProductCard prod={prod} className="" handleCart={setCartCount}/>
        ))}
      </div>
      <div className='w-full flex justify-center'>
        <Button label="View All Products" color="bg-white" hover={"hover:bg-gray-100 hover:border-purple-300"} imgUrl={ArrowRight}/>
      </div>
    </section>
  )
}

export default FeaturedProducts
