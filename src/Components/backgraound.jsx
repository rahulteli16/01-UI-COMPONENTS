import React from 'react'
import dark from "../assets/dark.jpg"

const Backgraound = () => {
  return (
        <div style={{backgroundImage : `url(${dark})`}} className='min-h-screen bg-cover bg-center'>

        <div className='flex flex-col h-screen justify-center items-center text-white'>
        <h1 className='text-2xl bg-amber-950 px-3 py-2'>Hey rahul modi</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptates optio quibusdam doloremque magnam ipsa blanditiis facilis adipisci totam deleniti officiis quod laborum dicta, sapiente cum est suscipit ad tenetur?</p>
        <button className='bg-red-900 px-3 py-2'>submit</button>
        </div>
        </div>



    
  )
}

export default Backgraound