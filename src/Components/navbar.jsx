import React from 'react'
import orange from "../assets/orange.png";

const Navbar = () => {
    return (
    <div className="bg-black text-orange-600 flex items-center justify-between px-6 py-4">
    
        <div className="flex items-center gap-2">
            <img src={orange} className='h-9 w-9' />

            <div className='text-2xl'>
                <p>Company</p>
                <p>YOUR LOGO HERE</p>
            </div>
        </div>

            <div className='flex flex-wrap gap-6 text-white text-2xl hover:text-cyan-200'>
                <h1>Home</h1>
                <h1>Service</h1>
                <h1>About</h1>
                <h1>Shop</h1>
                <h1>Blog</h1>
                <h1>Contact</h1>
            </div>


            <div className='flex rounded gap-3'>
                <button className='bg-amber-600 text-white rounded-2xl px-3 py-3 hover:bg-blue-200 text-yellow-900'>Sign Up</button>
                <button className='text-orange-600 border-2 border-orange-600  px-3 py-3 rounded-2xl hover:bg-amber-200'>Sign In</button>
            </div>
        </div>
    )
}

export default Navbar;