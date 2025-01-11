import React from 'react'

const Background = () => {
  return (
    <>
      <div className='w-full h-screen fixed z-[2]'>
        <div className='flex items-center justify-center py-6 text-zinc-300 text-l'>Documents</div>
        <h1 className='text-[14vw] leading-none tracking-tighter absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-zinc-400 font-semibold'>Docs.</h1>
      </div>
    </>
  )
}

export default Background