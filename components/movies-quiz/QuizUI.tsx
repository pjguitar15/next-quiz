'use client'
import { useState, useEffect } from 'react'
import QuizItem from './QuizItem'
import { MovieQuizQuestions } from '../../QuizData'

const QuizUI = () => {
  const [activeQuizItem, setActiveQuizItem] = useState(0)
  const [playerScore, setPlayerScore] = useState(0)

  return (
    <div>
      <QuizItem
        question={MovieQuizQuestions[activeQuizItem].question}
        options={MovieQuizQuestions[activeQuizItem].options}
        answer={MovieQuizQuestions[activeQuizItem].answer}
        setActiveQuizItem={setActiveQuizItem}
        activeQuizItem={activeQuizItem}
        FakeQuizItem={MovieQuizQuestions}
        playerScore={playerScore}
        setPlayerScore={setPlayerScore}
      />
    </div>
  )
}

export default QuizUI
