import React from 'react'

const TableItems = ({ id, name, score }: any) => {
  return (
    <div className='flex mt-2 gap-3 text-white text-xl'>
      {/* Name */}
      <div className='text-center w-1/5'>{id}</div>
      <div className='text-center w-2/5'>{name}</div>
      <div className='text-center w-2/5'>Geography</div>
      <div className='text-center w-2/5'>{score}/10</div>
    </div>
  )
}

export default TableItems
