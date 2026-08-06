import React from 'react'

const Selfmegamenu = () => {
    return (
        <div className='bg-black text-white flex justify-between px-3 py-4'>
            <div className='flex items-center gap-3' >
                <img src="src/assets/orange.png" className='w-10 h-10 rounded-full  hover:text-amber-600'></img>
                <div className='hover:text-amber-600'>
                    <p>Rahul</p>
                    <p>Web Solutions</p>
                </div>
            </div>

            <div className='flex gap-3 py-3'>
                <h1 className='hover:text-amber-600'>Home</h1>


                <div className='relative group'>
                    <a className='cursor-pointer  hover:text-amber-600 py-5'>service</a>
                    
                    <div className='absolute  top-full mt-4  bg-gray-700 space-y-3 w-[800px] p-6 rounded-xl shadow-2xl grid grid-cols-4 gap-6 invisible group-hover:visible opacity-0 group-hover:opacity-100 -translate-y-5 group-hover:translate-y-1  transition-all duration-1000 ease-in-out'>
                         
                        <div className='border-2 p-4 rounded-2xl flex flex-col space-y-5 hover:bg-gray-900 transition-all duration-1000'>
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


            <div className='py-2 flex gap-3'>
                <button className='hover:bg-stone-600 hover:border-black border border-amber-600 px-3 rounded-2xl'>Sign Up</button>
                <button className='hover:bg-stone-600  hover:border-black border border-amber-600 rounded-2xl px-3'>Sign In</button>
            </div>
        </div>
    )
}

export default Selfmegamenu