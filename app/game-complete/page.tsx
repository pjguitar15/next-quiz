'use client'
import GameCompleteResult from '@/components/GameCompleteResult'

const GameComplete = ({ params }: any) => {
  return (
    <div className='container mx-auto pt-5 text-center'>
      <h1 className='text-4xl font-bold text-yellow-500'>
        Congratulations for Completing the Quiz
      </h1>
      <GameCompleteResult />
    </div>
  )
}

export default GameComplete
