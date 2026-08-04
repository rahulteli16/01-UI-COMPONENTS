import React from 'react'

const Img = () => {
    return (
        <div className='flex h-screen items-center justify-center'>
            <div className='h-130 w-100 bg-amber-950 text-amber-50 relative flex items-center justify-center rounded-4xl'>
                <h4 className='absolute top-10'>MY CARD</h4>
                <p>IMG</p>
                <button className='absolute bottom-15 bg-black rounded-2xl h-10 w-30 hover:bg-white hover:text-black'>Learn More</button>
            </div>
        </div>
    )
}

export default Img