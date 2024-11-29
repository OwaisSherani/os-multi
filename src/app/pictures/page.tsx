import React from 'react'



const Pictures = () => {

  const picData = [
    {id:1 , name:'Iphoe-16 ProMax' , price : 554500 , description : 'Luxury Phone', image:'/iphone-16.png'},
    {id:2 , name:'Vivo' , price : 139999 , description : 'Vivo V40', image:'/vivo.png'},
    {id:3 , name:'Oppo' , price : 50300 , description : 'Oppo A60', image:'/oppo.png'},
    {id:4 , name:'Samsung' , price : 144999 , description : 'Samsung Galaxy A10', image:'/samsung.png'},


  ]
  return (
    <div>
      <div className='mobiles'>
{picData.map ((mobile)=> (
  <div key={mobile.id} className='mobile-card'>
<img src = {mobile.image} alt={mobile.name}/>
<h3>{mobile.name}</h3>
<p>{mobile.description}</p>
<div className='price'>{mobile.price} PKR</div>
<button>Add to Cart</button>
  </div>

))} 
    </div>
    </div>
  )
}

export default Pictures