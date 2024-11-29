"use client";
import { url } from 'inspector'
import { useEffect } from 'react';
import React from 'react'

const HomeContent = () => {



  return (
    <div>
        <section className='hero h-screen flex items-center bg-cover bg-center' style={{backgroundImage: "url(mobile-background.png)"}}>
            <div className='pl-0 md:pl-16 text-white text-center'>
                <h1 className='text-6xl font-bold drop-shadow-md '>Welcome to Mobile World</h1>
                <p className='text-2xl mt-4'>Your one stop shop for the best mobiles </p>
                <button className='mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-700 rounded-md font-bold'>Buy now</button>
            </div>

        </section>
    </div>
  )
}

export default HomeContent