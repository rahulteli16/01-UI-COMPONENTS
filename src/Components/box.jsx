import React from "react";

const Box = () => {
  return (
      <div className="flex items-center justify-center h-screen">
        <div className="relative size-60 border-black border-2 ">
          <div className="absolute size-32 top-5 left-5 bg-blue-300 z-200"></div>
          <div className="absolute size-32 top-10 left-10 bg-red-500 z-100"></div>
        </div>
      </div>
  );
};

export default Box;












// import React from 'react'

// const Box = () => {
//   return (
//     <div className='relative'>
//         <p className='absolute top-0 left-0'>Blue 🟦</p>
//         <p className='absolute top-5 left-5'> Red 🟥</p>
//     </div>
//   )
// }

// export default Box