import React from 'react'
import MyButton from './MyButton'
import GreetUser from './GreetUser'

const StartGamePage = () => {
  return (
    <div className='py-12'>
      <GreetUser />
      <h1 className='text-2xl text-white'>Welcome to the</h1>
      <h1 className='text-5xl text-white mb-4 font-extrabold '>
        <span className='text-yellow-500'>Next </span>
        Quiz Game
      </h1>
      <p className='mb-7 text-white lg:w-3/4 xl:w-2/4'>
        Earn points with each correct answer, and watch as your score climbs to
        new heights. But beware, the clock is ticking, adding an element of
        excitement and urgency to every decision you make. Can you maintain your
        composure and answer accurately under pressure?
      </p>
      <MyButton title={'Start Game'} link={'/start'} />
    </div>
  )
}

export default StartGamePage
