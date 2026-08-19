import React from 'react'
import { FaChevronDown } from "react-icons/fa";
import login from "../assets/login.jpg"



const FAQ = () => {
    return (
        <div className='h-full w-full border-5 p-10 flex flex-col gap-10 bg-amber-100'>
            <div>
                <h1 className='flex justify-center text-2xl font-bold'>FAQ ABOUT RAHUL MODI</h1>
            </div>


            <p className='border p-2 bg-mist-200 rounded-xl flex justify-between items-center px-5'>HOW IS RAHUL MODI? <FaChevronDown /></p>

            <p className='border p-2 bg-mist-200 rounded-xl flex justify-between items-center px-5'>HOW MANY BUSINESS HANDLE RAHUL MODI? <FaChevronDown /> </p>

            <p className='border p-2 bg-mist-200 rounded-xl flex justify-between items-center px-5'>WHAT ARE THE NAMES OF ALL THE COMPANIES OWNED BY RAHUL MODI? <FaChevronDown /></p>

            <p className='border p-2 bg-mist-200 rounded-xl flex justify-between items-center px-5'>HOW TO CONNECT RAHUL MODI? <FaChevronDown /></p>

            <p className='border p-2 bg-mist-200 rounded-xl flex justify-between items-center px-5'>WHAT IS FULL NAME OF RAHUL MODI? <FaChevronDown /></p>

            <p className='border p-2 bg-mist-200 rounded-xl flex justify-between items-center px-5'>RAHUL MODI SCHOOL NAME? <FaChevronDown /></p>

            <p className='border p-2 bg-mist-200 rounded-xl flex justify-between items-center px-5'>RAHUL MODI COLLEGE NAME ? <FaChevronDown /></p>

            <p className='border p-2 bg-mist-200 rounded-xl flex justify-between items-center px-5'>RAHUL MODI COUNTRY NAME? <FaChevronDown /></p>
        </div>

    )
}

export default FAQ;