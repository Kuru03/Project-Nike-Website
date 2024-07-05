import React from 'react'
import Button from '../components/Button'
const NikeSubscribe = () => {
  return (
    <section id="contact-us"  className='flex flex-1 flex-col justify-between xl:flex-row max-container max-sm:mt-12 items-center max-lg:flex-col gap-10'>
      <div className="flex flex-col  justify-start gap-5 sm:max-w-md w-full">
        <h2 className='text-4xl font-bold font-palanquin'>Sign Up for   <span className='text-coral-red'>Updates</span> & Newsletter</h2>
      </div>
      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col  px-2.5 sm:border sm:border-slate-gray rounded-full'>
        <input type='text' placeholder='subscribe@nike.com' className='input' />
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
        <Button text="Sign Up" BackgroundColor="bg-coral-red" TextColor="text-white" fullWidth/>
        </div>
      </div>
    </section>
  )
}

export default NikeSubscribe
