import React from 'react'
import Dark from "../assets/dark.jpg"

const Signup = () => {
    return (
        <div className='flex min-h-screen  justify-center items-center '>
            {/* left part */}
            <div className='w-7/12 h-screen max-lg:hidden'>
                <img src={Dark} alt="sign up img" className='h-full object-cover' />
            </div>

 

            {/* right part */}
            <div className='w-5/12 max-lg:w-full flex flex-col space-y-10 p-10 items-center justify-center border-2 shadow-2xl rounded-2xl m-6 '>
        <Link to="navbar">
                <button>HOME</button>
        </Link>
                {/* top part */}
                <div className='space-y-2'>
                    <h1 className='text-4xl text-green-700'>Create an account</h1>
                    <h4>Already have an accunt? <a href="#">Log in</a></h4>
                </div>


                {/* center part */}
                <div className='flex-col space-y-3  '>

                    <div className='flex flex-col lg:flex-row justify-between gap-3'>
                        <input type="text" placeholder=' Firstname' className='border-2  rounded focus:ring-2 focus:ring-green-300 focus:outline-none ' />
                        <input type="text" placeholder=' Lastname' className='border-2 rounded focus:ring-2 focus:ring-green-700 focus:outline-none' />
                    </div>

                    <div className='flex flex-col space-y-3'>
                        <input type="text" placeholder=' Email' className='border-2 rounded focus:ring-2 focus:ring-green-700 focus:outline-none ' />
                        <input type="text" placeholder=' Enter your password' className='border-2 rounded focus:ring-2 focus:ring-green-700 focus:outline-none' />
                    </div>
                    <div className='flex gap-2'>
                        <input type="checkbox" />
                        <p>I Agree to the terms & conditions</p>
                    </div>
                </div>


                {/* bottom part */}
                <div className='flex-col  items-center space-y-2'>
                    <button className='bg-green-900 text-amber-50 w-full rounded-2xl py-1 hover:scale-105 transition-all duration-1000'>Create Account</button>
                    <p className='flex justify-center'>-------OR Register With------</p>

                    <div className='flex justify-between gap-3'>
                        <a href="https://google.com" className='bg-green-700  rounded px-15 py-1 hover:scale-105 text-amber-50'>Google</a>
                        <a href="apple" className='bg-green-700 rounded px-15 py-1 hover:scale-105 text-amber-50'>Apple</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Signup