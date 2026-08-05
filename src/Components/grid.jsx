import React from 'react'

const Grid = () => {
  return (
    <div className='flex justify-center h-screen items-center'>
        
        <div className='bg-amber-400 grid grid-cols-2 gap-2 max-w-7xl w-full h-100 border-2 place-items-center '>
            <div className='col-span-2 border-2 py-2 px-3'>BOX-1</div>
            <div className='border-2 py-2 px-3'>BOX-2</div>
            <div className='border-2 py-2 px-3'>BOX-3</div>
            <div className='border-2 py-2 px-3'>BOX-4</div>
            <div className='border-2 py-2 px-3'>BOX-5</div>
            <div className='border-2 py-2 px-3 row-span-2'>BOX-6</div>
            <div className='border-2 py-2 px-3 row-span-2'>BOX-7</div>
    </div>
    </div>
  )
}

export default Grid