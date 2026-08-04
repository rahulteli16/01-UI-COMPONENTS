import React from 'react'

const Login = () => {
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='bg-amber-600 relative size-50 flex items-center justify-center'>
        <p className='absolute top-2 right-2'>❌</p>
        <p className='absolute top-2 left-2'>❌</p>
        <p>Close</p>
        <p className='absolute bottom-2 right-2'>❌</p>
        <p className='absolute bottom-2 left-2'>❌</p>
      </div>
    </div>
  )
}

export default Login;