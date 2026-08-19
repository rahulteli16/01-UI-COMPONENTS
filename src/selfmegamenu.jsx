import { Link } from "react-router-dom";
import { Menu } from 'lucide-react'
import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { MdOutlineKeyboardVoice } from "react-icons/md";




const Selfmegamenu = () => {

    const [ismenuOpen, setIsmenuOpen] = useState(false);


    return (
        <>
            <div className='bg-black  text-white flex justify-between px-3  py-4'>
                <div className='flex items-center gap-3' >
                    <img src="src/assets/orange.png" className='w-10 h-10 rounded-full  hover:text-amber-600'></img>
                    <div className='hover:text-amber-600'>
                        <p>Rahul</p>
                        <p >Web Solutions</p>
                    </div>
                </div>




        <div className="relative flex items-center w-95">
        <CiSearch className="absolute text-black left-2" />
       
        <input type="text" placeholder="Search result" className="bg-white text-black outline-none rounded-2xl w-full pl-9 pr-9 py-2"/>
       
        <MdOutlineKeyboardVoice className="absolute text-black right-2"/>
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
                    <Link to="/signup">
                        <button className='hover:bg-yellow-300 hover:border-black border hover:text-black border-amber-600 px-3 rounded-2xl'>Sign Up</button>
                    </Link>
                    <Link to="/login">
                        <button className='hover:bg-yellow-300  hover:border-black border hover:text-black border-amber-600 rounded-2xl px-3'>Sign In</button>
                    </Link>
                </div>


                <div className='flex z-50 items-center p-5 lg:hidden'>
                    <Menu className='fixed top-0 right-0 m-5 size-8 cursor-pointer hover:text-orange-300 transition duration-300'
                        onClick={() => setIsmenuOpen(!ismenuOpen)} />
                </div>
            </div>





            {/* mobile view  */}
            {
                ismenuOpen && (
                    <div className='lg:hidden flex flex-col gap-10 overflow-x-hidden mt-20'>
                        <div className='flex flex-col space-y-12  text-amber-600 '>

                            <a href="#" className="flex justify-center  w-full bg-black">HOME</a>

                            <div className='relative group'>
                                <a href="#" className='bg-black block w-full text-center'>SERVICE</a>
                                <div className='absolute flex flex-col gap-1 text-black bg-amber-200 border-2 border-amber-600  rounded-2xl p-3 mt-2 invisible group-hover:visible  opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out   -translate-y-7 translate-x-85 group-hover:translate-x-100'>
                                    <a className='hover:text-amber-800'>DEVELOPMENT</a>
                                    <a className='hover:text-amber-800'>AI & DATA</a>
                                    <a className='hover:text-amber-800'>DESIGN</a>
                                    <a className='hover:text-amber-800'>FEATURED</a>
                                </div>
                            </div>

                            <a href="#" className='block w-full bg-black text-center'>ABOUT</a>
                            <a href="#" className='block w-full bg-black text-center'>BLOG</a>
                            <a href="#" className='block w-full bg-black text-center'>SHOP</a>
                            <a href="#" className='block w-full bg-black text-center'>CONTACT</a>
                        </div>

                        <div className='flex flex-col gap-4 items-center'>
                            <Link to="/signup">
                                <button className='text-black border-2 border-amber-600 rounded-2xl px-4 bg-yellow-500 hover:bg-yellow-300 w-30  '>Sign up</button>
                            </Link>


                            <Link to="/login">
                                <button className='text-black border-2 border-amber-600 rounded-2xl px-4 bg-yellow-500 hover:bg-yellow-300 w-30'>Sign in</button>
                            </Link>
                        </div>
                    </div>
                )}
        </>

    )
}









export default Selfmegamenu