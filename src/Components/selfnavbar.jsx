import React from 'react'

const Selfnavbar = () => {
    return (
        <header>
            <nav>
                <div className='flex bg-amber-300 justify-between py-3 px-2'>

                    <div className='flex items-center gap-15'>
                        <div className='flex items-center gap-2'>
                            <img src="src/assets/orange.png" alt="pic" className='size-13 rounded-full' />
                            <div>
                                <p>RAHUL</p>
                                <p>Web solution</p>
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <p>HOME</p> 

                            <div className='relative group'>
                                <a href='#'>SERVICE</a>
                                <div className='absolute top-full bg-amber-500  mt-2 w-100 p-5 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out -translate-y-2 group-hover:translate-y-0'>

                                    <ul className='border border-black space-y-2 p-5 rounded-2xl'>
                                        <li className='border border-black p-3 rounded-2xl hover:bg-amber-400 shadow-2xl'>
                                            <h3>FRONTEND DEVELOPMENT</h3>
                                            <p>LEARN FRONTEND PART OF WEBSITE</p>
                                        </li>
                                        <li className='border border-black p-3 rounded-2xl hover:bg-amber-400 shadow-2xl'>
                                            <h3>BACKEND DEVELOPMENT</h3>
                                            <p>LEARN BACKEND PART OF WEBSITE</p>
                                        </li>
                                        <li className='border border-black p-3 rounded-2xl hover:bg-amber-400 shadow-2xl'>
                                            <h3>FULLSTACK  DEVELOPMENT</h3>
                                            <p>LEARN FRONTEND AND BACKEND PART OF WEBSITE</p>
                                        </li>
                                        <li className='border border-black p-3 rounded-2xl hover:bg-amber-400 shadow-2xl'>
                                            <h3>DATA SCINCE</h3>
                                            <p>LEARN AI/ML CONCEPT</p>
                                        </li>
                                        <li className='border border-black p-3 rounded-2xl hover:bg-amber-400 shadow-2xl'>
                                            <h3>UI/UX</h3>
                                            <p>LEARN VISUAL LAYOUT OF PAGES</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <a href='#'>ABOUT</a>
                            <a href='#'>CONTACT</a>
                            <a href='#'>COURCE</a>
                            <a href='#'>FAQ</a>
                        </div>
                    </div>


                    <div className='flex  items-center'>
                        <div className='flex gap-2'>
                            <button className='bg-amber-200 py-2 px-3 rounded-2xl'>Sign Up</button>
                            <button className='bg-amber-200 py-2 px-3 rounded-2xl'>Sign IN</button>
                        </div>
                    </div>

                </div>
            </nav>
        </header>

    )

}

export default Selfnavbar