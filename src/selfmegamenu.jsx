import { Menu } from 'lucide-react'
import React, { useState } from 'react'



const Selfmegamenu = () => {

    const [ismenuOpen, setIsmenuOpen] = useState(false);


    return (
     <>
        <div className='bg-black  text-white flex justify-between px-3 py-4'>
            <div className='flex items-center gap-3' >
                <img src="src/assets/orange.png" className='w-10 h-10 rounded-full  hover:text-amber-600'></img>
                <div className='hover:text-amber-600'>
                    <p>Rahul</p>
                    <p >Web Solutions</p>
                </div>
            </div>

            <div className='flex gap-3 py-3 max-lg:hidden'>
                <h1 className='hover:text-amber-600'>Home</h1>


                <div className='relative group'>
                    <a className='cursor-pointer  hover:text-amber-600 py-5'>service</a>

                    <div className='absolute  top-full  mt-4  bg-gray-700  space-y-3  w-[800px]  p-6 rounded-xl   shadow-2xl  grid  grid-cols-4 gap-6   invisible  group-hover:visible  opacity-0 group-hover:opacity-100 -translate-y-5 group-hover:translate-y-1  transition-all duration-1000  ease-in-out'>


                        <div className='border-2   p-4   rounded-2xl flex  flex-col  space-y-5  hover:bg-gray-900 transition-all  duration-1000'>
                            <h1>DEVELOPMENT</h1><hr />
                            <a href="#">FRONTEND</a>
                            <a href="#">BACKEND</a>
                            <a href="#">MERN</a>
                        </div>
                        <div className='border-2 p-4 rounded-2xl flex flex-col space-y-5 hover:bg-gray-900'>
                            <h1>AI & DATA</h1><hr />
                            <a href="#">ML</a>
                            <a href="#">DATA</a>
                            <a href="#">PYTHON</a>
                        </div>
                        <div className='border-2 p-4 rounded-2xl flex flex-col space-y-5 hover:bg-gray-900'>
                            <h1>DESIGN</h1><hr />
                            <a href="#">UI/UX</a>
                            <a href="#">FIGMA</a>
                            <a href="#">CANVA</a>
                        </div>
                        <div className='border-2 p-4 rounded-2xl flex flex-col space-y-5 hover:bg-gray-900'>
                            <h1>FEATURED</h1><hr />
                            <a href="#">IMAGE</a>
                            <a href="#">BUTTON</a>
                            <a href="#">TEXT</a>
                        </div>
                    </div>
                </div> 


                <a className='hover:text-amber-600'>About</a>
                <a className='hover:text-amber-600'>Blog</a>
                <a className='hover:text-amber-600'>Shop</a>
                <a className='hover:text-amber-600'>Contact</a>
            </div>


            <div className='py-2 flex gap-3 max-lg:hidden'>
                <button className='hover:bg-stone-600 hover:border-black border border-amber-600 px-3 rounded-2xl'>Sign Up</button>
                <button className='hover:bg-stone-600  hover:border-black border border-amber-600 rounded-2xl px-3'>Sign In</button>
            </div>


            <div className='flex z-50 items-center p-5 lg:hidden'>
                <Menu className='fixed top-0 right-0 m-5 size-8 cursor-pointer hover:text-orange-300 transition duration-300'
                    onClick={() => setIsmenuOpen(!ismenuOpen)}/>
            </div>
    </div>





{/* mobile view  */}
{ 
    ismenuOpen &&  (
            <div className='lg:hidden flex flex-col gap-7 overflow-x-hidden'>
                <div className='flex flex-col gap-8 text-amber-600'>
                    
    <a href="#">HOME</a>

                    <div className='relative group'> 
                    <a href="#">SERVICE</a>
                    <div className='absolute flex flex-col gap-1 text-black bg-amber-200 border-2 border-amber-600  rounded-2xl p-3 mt-2 invisible group-hover:visible  opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out -translate-x-2 group-hover:translate-x-20'>
                        <h3 className='hover:text-amber-800'>DEVELOPMENT</h3>
                        <h3 className='hover:text-amber-800'>AI & DATA</h3>
                        <h3 className='hover:text-amber-800'>DESIGN</h3>
                        <h3 className='hover:text-amber-800'>FEATURED</h3>
                    </div>
                    </div>
                    
                    <a href="#">ABOUT</a>
                    <a href="#">BLOG</a>
                    <a href="#">SHOP</a>
                    <a href="#">CONTACT</a>
                </div>

                <div className='flex flex-col gap-4'>
                    <button className='text-black border-2 border-amber-600 rounded-2xl px-4'>Sign up</button>
                    <button className='text-black border-2 border-amber-600 rounded-2xl px-4'>Sign in</button>
                </div>
            </div>
    )}
            </>

)}









export default Selfmegamenu