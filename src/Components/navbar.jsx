import React from 'react'
import orange from "../assets/orange.png";

const Navbar = () => {
    return (


        
        <div className='bg-black text-white flex justify-between px-3 py-4'>
            <div className='flex items-center gap-3' >
                <img src={orange} className='w-10 h-10 rounded-full  hover:text-amber-600'></img>
                <div className='hover:text-amber-600'>
                    <p>Rahul</p>
                    <p>Web Solutions</p>
                </div>
            </div>

            <div className='flex gap-3 py-3'>
                <h1 className='hover:text-amber-600'>Home</h1>

                <div className='relative group'>
                    <a href='#' className='cursor-pointer py-4  hover:text-amber-600' >service</a>
                    <div className='absolute top-full invisible group-hover:visible opacity-0 group-hover:opacity-100  
                    transition duration-1000 ease-in-out grid grid-cols-4 mt-4  p-6  w-[850px]  bg-amber-200 text-black  gap-6 rounded-xl shadow-xl left-0 -translate-y-5 hover:translate-y-0'>
                        <div className='flex flex-col border-2 p-6  space-y-3  hover:bg-amber-400'>
                            <h2>Development</h2><hr />
                            <a href="#">Frontend</a>
                            <a href="#">Backend</a>
                            <a href="#">MERN</a>
                        </div>

                        <div className='flex flex-col border-2 p-5 space-y-3 hover:bg-amber-400'>
                            <h2>AI & DATA</h2><hr />
                            <a href="#">ML</a>
                            <a href="#">Data</a>
                            <a href="#">Python</a>
                        </div>

                        <div className='flex flex-col border-2 p-5 space-y-3 hover:bg-amber-400'>
                            <h2>Design</h2><hr />
                            <a href="#">UI/UX</a>
                            <a href="#">Figma</a>
                            <a href="#">Canva</a>
                        </div>

                        <div className='flex flex-col border-2 p-5 space-y-3 hover:bg-amber-400'>
                            <h2>Featured</h2><hr />
                            <a href="#">Image</a>
                            <a href="#">Button</a>
                            <a href="#">Text</a>
                        </div>

                    </div>
                </div>


                <a className='hover:text-amber-600'>About</a>
                <a className='hover:text-amber-600'>Blog</a>
                <a className='hover:text-amber-600'>Shop</a>
                <a className='hover:text-amber-600'>Contact</a>
            </div>


            <div className='py-2 flex gap-3'>
                <button className='hover:bg-stone-600 hover:border-black border border-amber-600 px-3 rounded-2xl'>Sign Up</button>
                <button className='hover:bg-stone-600  hover:border-black border border-amber-600 rounded-2xl px-3'>Sign In</button>
            </div>
        </div>
    )
}

export default Navbar;