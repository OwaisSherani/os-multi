import { url } from 'inspector'
import React from 'react'

const HomeContent = () => {
  return (
    <div>
        <section className='hero' style={{backgroundImage: "url(mobile-background.png)"}}>
            <div>
                <h1 className='fade-in'>Welcome to Mobile World</h1>
                <p>Your one stop shop for the best mobiles </p>
                <button>Buy now</button>
            </div>

        </section>
    </div>
  )
}

export default HomeContent