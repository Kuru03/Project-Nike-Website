import { Component, useState } from 'react'
import './App.css'
import{NikeCustomerReviews,NikeFooter,NikeHero,
  NikeServises,NikePopularProducts,
  NikeSuperQuality,NikeSpecialOffers,
  NikeSubscribe
} from './Sections/index';
import Navbar from './components/Navbar';

function App() {

  return (
    <main className='relative'>
    <Navbar/> 
    <section className='xl:padding-l wide:padding-r padding-b'>
    <NikeHero/>
    </section>
    <section className='padding'>
    <NikePopularProducts/>
    </section>
    <section className='padding'>
    <NikeSuperQuality/>
    </section>
    <section className='padding-x py-10'>
      <NikeServises/>
    </section>
    <section className='padding'>
      <NikeSpecialOffers/>
    </section>
    <section className='padding bg-pale-blue'>
    <NikeCustomerReviews/>
    
    </section>
    <section className='padding-x sm:py-32 py-16 w-full'>
      <NikeSubscribe/>
    
    </section>
    <section className='padding-x padding-t pb-8 bg-black text-white-400'>
      <NikeFooter/>     
    </section>
    </main>
  )
}

export default App
