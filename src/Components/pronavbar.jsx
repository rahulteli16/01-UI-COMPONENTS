import React from 'react'

const Pronavbar = () => {
    return (
        <header>
            <nav>
                <div className='flex justify-between bg-purple-400 py-4 px-3'>
                    <div className='flex gap-2'>
                        <img src="src/assets/orange.png" alt="pic" className='size-12 rounded-full' />
                        <div className='hover:text-white'>
                            <p>Rahul</p>
                            <p>Web Solutions</p>
                        </div>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <a className='hover:text-white'>HOME</a>

                        <div className='relative group'>
                            <a className='hover:text-white'>SERVICE</a>
                            <div className='absolute top-full mt-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-1000 ease-in-out z-50 -translate-y-5 hover:translate-y-0 '>

                                <ul className='bg-fuchsia-300 border-2  rounded-xl w-120 p-5  text-shadow-lg space-y-3'>
                                    <li className='border-2 rounded-3xl p-5 hover:bg-fuchsia-800'>
                                        <h3>🪩 FULL STACK DEVELOPER</h3>
                                        <p>----Build Modern Layout</p>
                                    </li>
                                    <li className='border-2 rounded-3xl p-5 hover:bg-fuchsia-800'>
                                        <h3>🐍 PYHTON DEVELOPER</h3>
                                        <p>----Build Modern Data Services</p>
                                    </li>
                                    <li className='border-2 rounded-3xl p-5 hover:bg-fuchsia-800'>
                                        <h3>🔯 MERN STACK DEVELOPER</h3>
                                        <p>----Build Modern Websites</p>
                                    </li>
                                    <li className='border-2 rounded-3xl p-5 hover:bg-fuchsia-800'>
                                        <h3>🤖 AI/ML ENGINEER</h3>
                                        <p>----Provide 3</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <a className='hover:text-white'>ABOUT</a>
                        <a className='hover:text-white'>BLOG</a>
                        <a className='hover:text-white'>SHOP</a>
                        <a className='hover:text-white'>CONTACT</a>
                    </div>
                    <div className='flex gap-2' >
                        <button className='bg-white rounded-3xl px-3 py-1 hover:bg-amber-100'>SIGN UP</button>
                        <button className='bg-white rounded-3xl px-3 py-1 hover:bg-amber-100'>SIGN IN</button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Pronavbar