import React from 'react'

const loading = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex mt-5 gap-3 font-bold text-blue-950 text-xl'>
        {/* Header */}
        <div className='bg-blue-400 text-center w-1/5'>ID</div>
        <div className='bg-blue-400 text-center w-2/5'>Name</div>
        <div className='bg-blue-400 text-center w-2/5'>Score</div>
      </div>
      <div className='flex mt-3 gap-3 text-white text-xl'>
        {/* Loading content */}
        <div className='animate-pulse bg-gray-500 text-center w-1/5 h-8'></div>
        <div className='animate-pulse bg-gray-500 text-center w-2/5 h-8'></div>
        <div className='animate-pulse bg-gray-500 text-center w-2/5 h-8'></div>
      </div>
      <div className='flex mt-3 gap-3 text-white text-xl'>
        {/* Loading content */}
        <div className='animate-pulse bg-gray-500 text-center w-1/5 h-8'></div>
        <div className='animate-pulse bg-gray-500 text-center w-2/5 h-8'></div>
        <div className='animate-pulse bg-gray-500 text-center w-2/5 h-8'></div>
      </div>
      <div className='flex mt-3 gap-3 text-white text-xl'>
        {/* Loading content */}
        <div className='animate-pulse bg-gray-500 text-center w-1/5 h-8'></div>
        <div className='animate-pulse bg-gray-500 text-center w-2/5 h-8'></div>
        <div className='animate-pulse bg-gray-500 text-center w-2/5 h-8'></div>
      </div>
    </div>
  )
}

export default loading
