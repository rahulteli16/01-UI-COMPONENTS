import React from 'react'

const Newnavbar = () => {
    return (
        <div className='bg-blue-300 flex justify-between items-center  px-3 py-4'>
            <div className='flex gap-2'>
                <img src="src/assets/orange.png" alt="no avalaible" className='size-15 rounded-full' />
                <div className='py-2 hover:text-amber-800'>
                    <p>RAHUL Web Solutions</p>
                    <p>Web Solutions</p>
                </div>
            </div>
            <div className='flex justify-between gap-2'>
                <p className='hover:text-amber-800'>Home</p>

                <div className='relative group'>
                    <p className='hover:text-amber-800'>Service</p>
                    <div className='absolute hidden group-hover:block text-red-50 bg-amber-200 p-5 '>
                        <ul className='text-black'>
                            <li>Web developer</li>
                            <li>Python Developer</li>
                            <li>Full Stack developer</li>
                            <li>Frontend Developer</li>
                            <li>Backend Developer</li>
                        </ul>
                    </div>
                </div>

                <p className='hover:text-amber-800'>About</p>
                <p className='hover:text-amber-800'>Blog</p>
                <p className='hover:text-amber-800'>Shop</p>
                <p className='hover:text-amber-800'>Contact</p>
            </div>
            <div className='flex gap-3 rounded-3xl'>
                <button className='bg-amber-100 rounded-3xl py-2 px-3  hover:bg-amber-200'>Sign Up</button>
                <button className='bg-amber-100 rounded-3xl py-2 px-3 hover:bg-amber-200'>Sign In</button>
            </div>
        </div>
    )
}

export default Newnavbar