'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const QuizItem = ({
  question,
  options,
  answer,
  setActiveQuizItem,
  activeQuizItem,
  FakeQuizItem,
  playerScore,
  setPlayerScore,
}: any) => {
  const [result, setResult] = useState({ userAnswer: '', answerResult: '' })
  const [username, setUsername] = useState(
    localStorage.getItem('username') || 'Unknown User'
  )
  const router = useRouter()

  const addNewHighScore = async () => {
    try {
      // Send a POST request to the specified API endpoint with todo data
      const res = await fetch(`http://localhost:3000/api/high-scores/`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ username: username, score: playerScore }),
      })

      // Check if the response is successful (status code 200-299)
      if (res.ok) {
        // Redirect to the home page (root URL) after successful addition
        console.log('High Score Added Successfully!')
      } else {
        // If the response is not successful, throw an error
        throw new Error('Failed to create a high score')
      }
    } catch (error) {
      // If any error occurs during the fetch or processing, log it to the console
      console.log(error)
    }
  }

  const handleNext = (answer: string, userAnswer: string) => {
    if (activeQuizItem < FakeQuizItem.length - 1) {
      if (userAnswer === answer) {
        setResult({ userAnswer, answerResult: 'correct' })
        setPlayerScore(playerScore + 1)
      } else {
        setResult({ userAnswer, answerResult: 'wrong' })
      }
      setTimeout(() => {
        setActiveQuizItem(activeQuizItem + 1)
        setResult({ userAnswer: '', answerResult: '' })
      }, 1000)
    } else {
      // Fix this error
      localStorage.setItem('currentUserScore', playerScore.toString())
      router.push(`/game-complete`)
      // Create new high score here
      addNewHighScore()
    }
  }

  const handleBackToCategories = () => {
    const confirmation = confirm(
      `Your quiz is not over yet! Are you sure you want to go back?`
    )
    if (confirmation) {
      router.push('/start')
    } else {
    }
  }
  return (
    <div className='container mx-auto'>
      <h1 className='text-white text-4xl'>{question}</h1>
      {options.map((item: any, index: number) => (
        <div
          onClick={() => handleNext(answer, item)}
          key={item}
          className={`${
            result.userAnswer === item &&
            result.answerResult === 'correct' &&
            'bg-green-500 hover:bg-green-500'
          } ${result.userAnswer === '' && 'bg-blue-900 hover:bg-blue-800'} ${
            result.userAnswer === item &&
            result.answerResult === 'wrong' &&
            'bg-red-500 hover:bg-red-500'
          } p-5 mt-5 cursor-pointer transition duration-300`}
        >
          <h1 className='text-white'>
            <span className='px-2 py-1 mr-3 bg-white text-black rounded-full'>
              {index === 0 && 'A'}
              {index === 1 && 'B'}
              {index === 2 && 'C'}
              {index === 3 && 'D'}
            </span>
            {item}
          </h1>
        </div>
      ))}
      {/* Return to Categories */}
      <div className='text-center'>
        <button
          onClick={handleBackToCategories}
          className='text-white bg-yellow-600 px-4 py-2 mt-4'
        >
          Back to Categories
        </button>
      </div>
      <div className='text-center text-white'>
        <h3 className='text-xl mt-4'>
          {activeQuizItem + 1}/{FakeQuizItem.length}
        </h3>
      </div>
    </div>
  )
}

export default QuizItem
