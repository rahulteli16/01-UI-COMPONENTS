import React from 'react'

const Transition = () => {
  return ( 
<div className='flex h-screen items-center justify-center'>
    <div className='flex gap-2'>
   
    <div>
        <button className='bg-amber-400  rounded-2xl px-2 transition  duration-300 ease-in-out hover:bg-black hover:text-white'>HELLO RAHUL MODI</button>
    </div>
   
    <div>
        <p className='size-20 bg-amber-700 transition duration-300 ease-in-out opacity-100 hover:opacity-50'>box</p>
    </div>
  
    <div>
            <button className='size-20 bg-blue-700 transition duration-300 ease-in-out hover:scale-110'>click me</button>
    </div>
    
    <div>
        <button className='size-20 bg-blue-700 transition duration-300 ease-in-out hover:scale-110 hover:-translate-y-5'>translate</button>
    </div>
    </div>
</div>
  )
}

export default Transition