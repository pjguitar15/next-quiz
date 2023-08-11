import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='text-white bg-blue-900 py-5'>
      <div className='container mx-auto flex items-center'>
        <div className='mr-5'>
          <Link href='/'>
            <div className='h-12 w-12 bg-white rounded-full relative'>
              <h1 className='text-3xl text-blue-800 font-bold absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                Q
              </h1>
            </div>
          </Link>
        </div>
        <Link href='/'>Home</Link>
        <Link className='ml-4' href='/high-scores'>
          High Scores
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
