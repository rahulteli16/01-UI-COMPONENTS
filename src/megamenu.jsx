import React from 'react'

const Flexcol = () => {
    return (
        <header>
            <nav>
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
                    <a className='hover:text-amber-600' >service</a>
                    <div className='absolute bg-amber-500 border-2 border-black rounded-2xl transition duration-1000 ease-in-out opacity-0 group-hover:opacity-100 top-full mt-3'>
                        <div className='flex flex-col p-5  gap-3'>
                            <div className='border-2 border-black rounded-2xl p-2 px-3 py-1 hover:bg-amber-800'>box1</div>
                            <div className='border-2 border-black rounded-2xl p-2 px-3 py-1 hover:bg-amber-800'>box2</div>
                            <div className='border-2 border-black rounded-2xl p-2 px-3 py-1 hover:bg-amber-800'>box3</div>
                            <div className='border-2 border-black rounded-2xl p-2 px-3 py-1 hover:bg-amber-800'>box4</div>
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
        
        </nav>
        </header>
    )
}

export default Flexcol