import React from 'react'



const Pictures = () => {

  const picData = [
    {id:1 , name:'Iphoe-16 ProMax' , price : 554500 , description : 'Luxury Phone', image:'/iphone-16.png'},
    {id:2 , name:'Vivo' , price : 139999 , description : 'Vivo V40', image:'/vivo.png'},
    {id:3 , name:'Oppo' , price : 50300 , description : 'Oppo A60', image:'/oppo.png'},
    {id:4 , name:'Samsung' , price : 144999 , description : 'Samsung Galaxy A10', image:'/samsung.png'},


  ]
  return (
    <div className='mobiles grid grid-cols-6 md:grid-cols-2 gap-10 px-10 my-10'>
      <div className='mobiles'>
{picData.map ((mobile)=> (
  <div key={mobile.id} className='mobile-card bg-white p-5 rounded-md shadow-md text-center'>
<img src = {mobile.image} alt={mobile.name} className='w-full rounded-md transition-transform duration-300 transform hover:scale-110'/>
<h3 className='mt-4 text-2xl font-bold'>{mobile.name}</h3>
<p className='text-gray-600'>{mobile.description}</p>
<div className='price text-blue-600 text-xl font-semibold mt-2'>{mobile.price} PKR</div>
<button className='mt-4 px-4 py-2 bg-blue-600 text-white rounded-md'>Add to Cart</button>
  </div>

))} 
    </div>
    </div>
  )
}

export default Pictures