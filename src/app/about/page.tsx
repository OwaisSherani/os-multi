import React from 'react'

const About = () => {
  return (
    <div>
        <section className='about h-screen flex items-center justify-start bg-cover bg-center text-white px-10' style={{backgroundImage: "url(about-image.png)"}}>
            <div className='bg-black bg-opacity-60 p-8 rounded-md max-w-lg'>
                <h2 className='text-4xl font-bold mb-4 fade-in'>About Us</h2>
                <p>Welcome to the mobile. We are dealing with Smart mobile phones. The heart of the mobile world. Smartphones have evolved from basic communication tools into powerful devices capable of handling a range of tasks, from internet browsing and photography to gaming and business applications. Leading smartphone manufacturers include Apple, Samsung, Xiaomi, and Google. </p>

            </div>
        </section>
    </div>
  )
}

export default About