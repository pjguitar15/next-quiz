'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'

const GameCompleteResult = () => {
  return (
    <div>
      <div className='bg-white text-blue-950 inline-block mt-5 px-5 py-3 text-xl'>
        <h3>
          Your Score was{' '}
          <span className='font-bold'>
            {localStorage.getItem('currentUserScore')}/10
          </span>
        </h3>
      </div>
      <Link className='text-white block mt-3' href='/'>
        Go back
      </Link>
    </div>
  )
}

export default GameCompleteResult
