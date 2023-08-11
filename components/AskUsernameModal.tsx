'use client'
import { useState, useEffect } from 'react'
import { PencilSquareIcon } from '@heroicons/react/24/solid'

const AskUsernameModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [userName, setUserName] = useState('')

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setUserName('')
  }

  const handleFormSubmit = (event: any) => {
    event.preventDefault()
    // Handle form submission logic here
    console.log('Submitted:', userName)
    // add to local storage
    localStorage.setItem('username', userName)
    setTimeout(() => {
      window.location.reload()
    }, 1500)
    closeModal()
  }

  return (
    <div className='flex items-center justify-center'>
      <button
        className='text-white hover:text-yellow-100 px-4 py-2'
        onClick={openModal}
      >
        <PencilSquareIcon className='w-5 h-5 text-white' />
      </button>
      {isModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
          <div
            className='absolute inset-0 bg-blue-900 bg-opacity-50 backdrop-filter backdrop-blur'
            onClick={closeModal}
          ></div>
          <div className='bg-white p-6 rounded shadow-lg w-80 relative z-10'>
            <h2 className='text-blue-900 text-2xl font-bold mb-4'>
              Enter Your Name
            </h2>
            <form onSubmit={handleFormSubmit}>
              <input
                type='text'
                className='border border-blue-300 rounded w-full py-2 px-3 mb-2'
                placeholder='Your Name'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <button
                type='submit'
                className='bg-blue-500 text-white py-2 px-4 rounded'
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default AskUsernameModal
