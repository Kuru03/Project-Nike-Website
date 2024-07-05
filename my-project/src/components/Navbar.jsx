import React from 'react'
import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import { navLinks } from '../constants'

const Navbar = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a>
          <img src={headerLogo} width={140} height={29} alt='Logo'/>
        </a>
        <ul className="navflex flex items-center gap-16 justify-center max-lg:hidden">
          {navLinks.map(items=>(<li key={items.label}>
            <a  href={items.href} className=' text-slate-gray font-montserrat leading-normal text-lg '>
              {items.label}   
            </a>
          </li>))}
        </ul>
        <div className="">
          <img className='hidden max-lg:block' src={hamburger} alt="redirect" width={25} height={25} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
