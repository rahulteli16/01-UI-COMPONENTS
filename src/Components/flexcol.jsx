import React from 'react'

const Flexcol = () => {
  return (
    <div className='flex justify-center h-screen items-center'>
        <div className='bg-blue-400 flex flex-col border-2 px-5 py-2 h-130 w-60 justify-center items-center gap-25'>
        <div className='border-2 p-5 scale-150'>BOX-1</div>

        
        <div className='border-2 p-5 scale-150'>BOX-2</div>
        
        
        <div className='border-2 p-5 scale-150'>BOX-3</div>
        </div>
    </div>
  )
}

export default Flexcol