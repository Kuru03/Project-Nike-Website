import React from 'react'
import { reviews } from '../constants'
import CustomerReviewCard from '../components/CustomerReviewCard'

const NikeCustomerReviews = () => {
  return (
    <section>
      <div className="flex flex-col w-full items-center justify-center">
        <h2 className='text-4xl font-bold font-palanquin '>What Our <span className='text-coral-red'>Customers</span> Say?</h2>
        <p className= 'mt-3 info-text text-slate-gray lg:max-w-lg justify-center items-center text-center text-xl	'>Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
      </div>
      <div className='flex flex-1 flex-col lg:flex-row mt-24 justify-evenly gap-14'>
        {reviews.map((review)=>(
          <CustomerReviewCard key={review.imgURL} {...review}/>
        ))}
      </div>
      
    </section>
  )
}

export default NikeCustomerReviews
