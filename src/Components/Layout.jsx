import React from 'react'

function Layout({ children }) {
  return (
    <div className='w-full h-screen	 bg-blue flex flex justify-center items-center '>
      <div className='w-[80%] max-w-[52em] h-[80%] max-h-[40em]	 bg-glassBlue rounded-2xl flex flex-col justify-around items-center p-5'>
        {children}
      </div>
    </div>
  )
}

export default Layout