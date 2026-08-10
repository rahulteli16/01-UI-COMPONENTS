import React from 'react'

const Screencheck = () => {
    return (
        <>
            {/* <div className="h-screen bg-green-200">
                {Array.from({ length: 50 }).map((_, i) => (
                    <p key={i}>Hello Rahul</p>
                ))}
            </div>


            <div className="min-h-screen bg-blue-200">
                {Array.from({ length: 50 }).map((_, i) => (
                    <p key={i}>Hello Rahul</p>
                ))}
            </div> */}


            <div className="flex h-screen">

                <div className="w-2/5 bg-red-200">
                    Left
                </div>

                <div className="w-3/5 bg-blue-200">
                    Right
                </div>
            </div>
        </>
    )
}

export default Screencheck