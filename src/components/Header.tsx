import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='header'>
        <h1 className='logo'>Mobile World</h1>
        <nav>
                <Link href='/'>Home</Link>
                <Link  href='/about'>About</Link>
                <Link href='/pictures'>Pictures</Link>
        </nav>
    </header>
  )
}

export default Header