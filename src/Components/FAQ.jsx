import { FaChevronDown } from "react-icons/fa";
import login from "../assets/login.jpg"
import React, { useState } from "react";


const FAQ = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className='h-full w-full border-5 p-10 flex flex-col gap-10 bg-amber-100'>
            <div>
                <h1 className='flex justify-center text-2xl font-bold'>FAQ ABOUT RAHUL MODI</h1>
            </div>



            <div className='relative group flex flex-col gap-1'>
                <button
                    onClick={() => setOpen(!open)}
                    className='border p-2 bg-mist-200 rounded-xl flex justify-between items-center px-5'>
                    <span>HOW IS RAHUL MODI? </span>
                    <FaChevronDown />
                </button>

                <div
                    className={`overflow-hidden transition-all duration-500 
                ${open ? "max-h-20 opacity-100" : "max-h-0 opacity-0"}`}
                >
                    <p className='px-5 py-2 bg-mist-200  '>RAHUL MODI IS A OWN BY MULTIPLE BUSINESS ALL OVER WORLD</p>
                </div>
            </div>



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