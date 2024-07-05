import React from 'react'
import PropTypes from 'prop-types'
import { star } from '../assets/icons'


function ProductCard({prodInfo}) {
  return (
    <section>
      <div className=" font-montserrat text-2xl leading-normal font-semibold flex flex-1 flex-col w-full justify-start sm:w-full  sm:h-400 rounded-xl max-sm:p-4">
        <img
          className=" object-contain w-[280px] h-[280px]"
          src={prodInfo.imgURL}
          alt={prodInfo.name}
        />
        
        <div className='mt-4 flex justify-start gap-2.5 font-palanquin text-xl text-normal'>
            <img src={star} width={24} height={24} alt='rating'></img>
            <p className='text-slate-gray font-montserrat '>(4.5)</p>
        </div>
        <h1 className='mt-2'>{prodInfo.name}</h1> 
        <span className='text-coral-red mt-2' >{prodInfo.price}</span>
      </div >
    </section>
  )
}

export default ProductCard
