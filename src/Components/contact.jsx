import React from 'react'
import login from "../assets/login.jpg"
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";

const Contact = () => {
    return (
        <div className='flex min-h-screen text-white bg-black'>

            <div style={{ backgroundImage: `url(${login})` }} className='flex h-screen w-screen bg-center'>


                <div className='flex flex-col w-6/12  justify-center items-center  gap-10 text-xl'>
                    <div className='w-80'>
                        <IoLocationSharp />
                        <p>Address:</p>
                        <p>198 West 21th street, Suite 721 New York NY 10016</p>
                    </div>
                    <div className='flex flex-col w-80'>
                        <FaPhoneAlt />
                        <p>Phone:</p>
                        <p>+ 1235 2355 98</p>
                    </div>

                    <div className='w-80'>
                        <SiMinutemailer />
                        <p>Email:</p>
                        <a href="#">infonike.com</a>
                    </div>
                </div>

                {/* right part */}
                <div className=' flex w-6/12  justify-center items-center'>
                    <div className='flex flex-col gap-5 justify-center items-center border-2  p-10 rounded-2xl bg-white text-black 
                w-full  max-w-md p-10'>

                        <div className='text-3xl'>
                            <h1>Get in touch with us</h1>
                        </div>


                        <div className='flex flex-col gap-6 items-center justify-center text-black text-xl'>
                            <div>
                                <input type="text" placeholder=' Name' className='border p-2 w-80' />
                            </div>
                            <div>
                                <input type="Email" placeholder=' Email' className='border p-2 w-80' />
                            </div>
                            <div>
                                <input type="text" placeholder=' Subject' className='border p-2 w-80' />
                            </div>
                            <div>
                                <textarea name="" placeholder="Message" id="" className='border p-2 w-80 h-32'></textarea>
                            </div>
                        </div>


                        <div className='flex items-center justify-center'>
                            <button className='bg-red-500 px-2 py-2 rounded'>SEND MESSAGE</button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact