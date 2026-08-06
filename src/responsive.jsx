import React from 'react'
import orange from "./assets/orange.png";

const Responsive = () => {
  return (
    <>
      <div className='bg-amber-400'>
        <div className='flex flex-col gap-5 p-5 items-center lg:flex-row lg:justify-between lg:py-3 lg:px-5'>

          <div className='flex flex-col gap-4 justify-center  items-center   lg:flex-row lg:gap-2'>
            <img src={orange} alt="img" className='size-11 rounded-full' />
            <div className='max-lg:flex gap-1'>
              <h2>Rahul Modi</h2>
              <h2>Solution</h2>
            </div>
          </div>

          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum provident ipsum optio architecto doloribus sint quae eos harum cumque </p>
          </div>


          <div>
            <button className='bg-white w-20 rounded-2xl hover:bg-amber-200 lg:flex-row lg:py-1 lg:px-2'>Submit</button>
          </div>

        </div>
      </div>



    {/* <div className='flex h-screen items-center justify-center'>
      <div className='bg-amber-200 grid grid-cols-1 p-6 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-9 2xl:grid-cols-12 sm:bg-green-500 md:bg-yellow-400 lg:bg-red-500 xl:bg-purple-500'>
        <div className='bg-red-300 p-2 border-2'>BOX-1</div>
        <div className='bg-red-300 p-2 border-2'>BOX-2</div>
        <div className='bg-red-300 p-2 border-2'>BOX-3</div>
        <div className='bg-red-300 p-2 border-2'>BOX-4</div>
        <div className='bg-red-300 p-2 border-2'>BOX-5</div>
        <div className='bg-red-300 p-2 border-2'>BOX-6</div>
        <div className='bg-red-300 p-2 border-2'>BOX-7</div>
        <div className='bg-red-300 p-2 border-2'>BOX-8</div>
        <div className='bg-red-300 p-2 border-2'>BOX-9</div>
        <div className='bg-red-300 p-2 border-2'>BOX-10</div>
        <div className='bg-red-300 p-2 border-2'>BOX-11</div>
        <div className='bg-red-300 p-2 border-2'>BOX-12</div>
      </div>




    <div>
      <div className='bg-amber-400 flex flex-col  py-2 px-3 gap-5 items-center  lg:flex-row'>
      <img src="src/assets/orange.png" alt="Brand" className='size-11 rounded-full' />
          <p>All about for Money Power Repect</p>
          <button className='bg-blue-200 rounded-2xl py-1 px-2'>Contact</button>
      </div>
    </div>
</div>  */}

    </>

  )
}

export default Responsive