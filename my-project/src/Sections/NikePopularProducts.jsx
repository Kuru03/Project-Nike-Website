import React from 'react'
import { products } from '../constants'
import ProductCard from '../components/ProductCard'


const NikePopularProducts = () => {
  return (
    <section id="products"  className='max-container max-sm:mt-12'>
      <div className="flex flex-col  justify-start gap-5">
        <h2 className='text-4xl font-bold font-palanquin'>Our <span className='text-coral-red'>Popular</span> Products</h2>
        <p className='font-palanquin text-slate-gray lg:max-w-lg'>Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>
      </div>
      <div className=' mt-16 gap-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4'>
        {
          products.map((product,index)=>(
            <ProductCard
             prodInfo={product}
            />
          ))
        }
      </div>

    </section>
  )
}

export default NikePopularProducts
