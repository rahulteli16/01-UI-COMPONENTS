import React from 'react'
import dark from "../assets/dark.jpg"
import nike from "/videos/nike.mp4"

const Backgraound = () => {
  return (
    <div style={{ backgroundImage: `url(${dark})` }} className='min-h-screen bg-cover bg-center'>


   <div className="relative max-w-4xl  mx-auto  h-screen flex justify-center items-center">
  <video
    src={nike}
    autoPlay
    muted
    loop
    className="w-full  h-[500px] object-cover rounded-2xl" 
  />

  <div className="absolute bottom-[120px] left-10 text-white">
    <h1 className="text-4xl font-bold">
      Just Do It.
    </h1>
  </div>
</div>


      <div className='flex flex-col h-screen justify-center items-center text-white'>
        <h1 className='text-2xl bg-amber-950 px-3 py-2'>Hey rahul modi</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptates optio quibusdam doloremque magnam ipsa blanditiis facilis adipisci totam deleniti officiis quod laborum dicta, sapiente cum est suscipit ad tenetur?</p>
        <button className='bg-red-900 px-3 py-2'>submit</button>
      </div>
    </div>




  )
}

export default Backgraound;





