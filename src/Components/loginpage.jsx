import React from 'react'
import login from "../assets/login.jpg";

const Loginpage = () => {
    return (
        <div className='flex min-h-screen  gap-5 w-screen  justify-center items-center'>
            {/* LEFT CONTENT */}
           <div className='w-2/3  h-screen max-lg:hidden'>
                <img src={login} className='w-full h-full  object-cover object-center' />
            </div>





            {/* RIGHT CONTENT */}
            <div className='space-y-10  bg-white border  rounded-2xl p-8 shadow-2xl w-2/4 flex-col  justify-center items-center mr-5 max-lg:w-150 max-lg:m-5'>
                {/* top part */}
                <div className='space-y-3'>
                    <h1 className='text-5xl text-blue-500'>Login</h1>
                    <p>Welcome! Login to get amazing discounts and offers only for you</p>
                </div>


                {/* center part */}
                <div className='space-y-3'>
                    <div>
                        <h4>User Name</h4>
                        <input type="text" placeholder='Enter your user ID' className='border-2 p-2 rounded mt-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-300' />
                    </div>

                    <div>
                        <h4 className=''>Password</h4>
                        <input type="password" placeholder='Enter your  Password' className='border-2 p-2 rounded mt-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-300' />
                    </div>


                    <div className='flex gap-2'>
                        <input type="checkbox" name="" id="" />
                        <h5>Remember me</h5>
                    </div>

                    <div>
                        <button className='bg-blue-500 hover:bg-blue-700 w-full py-1 rounded-3xl hover:scale-105 transition-all duration-300'>LOGIN</button>
                    </div>
                </div>



                {/* Bottom part */}
                <div className='flex justify-between'>
                    <a href="#" className='text-blue-500 hover:text-blue-700 '>Sign up</a>
                    <a href="#" className='text-red-500 hover:text-red-700'> Forgot your password?</a>
                </div>



            </div>





        </div>
    )
}

export default Loginpage