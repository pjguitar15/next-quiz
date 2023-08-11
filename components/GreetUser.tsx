'use client'
import { useState, useEffect } from 'react'
import AskUsernameModal from './AskUsernameModal'

const GreetUser = () => {
  const [username, setUsername] = useState(
    localStorage.getItem('username') || 'Unknown user'
  )

  return (
    <div>
      <div className='flex items-center'>
        <h1 className='text-white text-xl'>Hi {username}!</h1>
        <AskUsernameModal />
      </div>
      <hr className='my-4 lg:w-3/4 xl:w-2/4' />
    </div>
  )
}

export default GreetUser
