import React from 'react'
import Link from 'next/link'

const MyButton = ({ title, link }: any) => {
  return (
    <Link
      href={link}
      className='bg-yellow-500 hover:bg-yellow-400 transition duration-300 px-7 py-2 border-2 border-yellow-700 rounded-full'
    >
      {title}
    </Link>
  )
}

export default MyButton
