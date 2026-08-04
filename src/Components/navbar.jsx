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
                <a className='hover:text-amber-600' >service</a>
                
                <div className="absolute top-full bg-black text-2xl text-black p-15 border hidden group-hover:block">
                    <ul className='text-red-900'>
                        <li>Web development</li><br></br>
                        <li>Pyhton</li><br></br>
                        <li>UI/UX</li><br></br>
                    </ul>
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