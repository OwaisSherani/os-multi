"use client" ;
import Link from 'next/link'
import React, { useState } from 'react'




const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen (!isMenuOpen);
  };

  const closeMenu = () =>{
    setIsMenuOpen (false);
  }
  return (
    <header className='bg-blue-500 text-white py-5 flex justify-between items-center px-10 relative z-10'>
        <h1 className='text-2xl font-bold'>Mobile World</h1>
        {/* Desktop Navbar  */}

        
        <nav className='hidden md:flex gap-10 text-white font-bold'>
                <Link href='/' onClick={closeMenu}>Home</Link>
                <Link  href='/about' onClick={closeMenu}>About</Link>
                <Link href='/pictures' onClick={closeMenu}>Pictures</Link>
        </nav>




    </header>
  )
}

export default Header

function setIsMenuOpen(arg0: boolean) {
  throw new Error('Function not implemented.');
}
