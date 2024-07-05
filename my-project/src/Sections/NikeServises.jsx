import React from 'react'
import { services } from '../constants'
import ServiceCard from '../components/ServiceCard'

const NikeServises = () => {
  return (
    <section id='about-us'>
      <div className='flex max-container gap-9 flex-wrap justify-center'>
        {services.map((service,index)=>(
          <ServiceCard key={service.label} {...service} />
        ))}
      </div>
    </section>
  )
}

export default NikeServises
    