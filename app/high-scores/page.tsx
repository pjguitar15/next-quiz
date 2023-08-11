import TableItems from '@/components/TableItems'
import React from 'react'

// Fetch data from backend
const getHighScores = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/high-scores/`, {
      cache: 'no-store',
    })

    if (!res.ok) {
      throw new Error('Failed to fetch todos')
    }

    return res.json()
  } catch (error) {
    console.log(`Error loading high scores`, error)
  }
}
const page = async () => {
  const { userHighScore } = await getHighScores()
  const sortedData = userHighScore.sort((a: any, b: any) => b.score - a.score)
  console.log(userHighScore)
  return (
    <div className='container mx-auto'>
      {/* Table header */}
      <div className='flex mt-5 gap-3 font-bold text-blue-950 text-xl'>
        {/* Name */}
        <div className='bg-blue-400 text-center w-1/5'>ID</div>
        <div className='bg-blue-400 text-center w-2/5'>Name</div>
        <div className='bg-blue-400 text-center w-2/5'>Category</div>
        <div className='bg-blue-400 text-center w-2/5'>Score</div>
      </div>
      {sortedData.map((item: any) => (
        <TableItems
          key={item._id}
          id={item._id.slice(0, 10)}
          name={item.username}
          score={item.score}
        />
      ))}
    </div>
  )
}

export default page
