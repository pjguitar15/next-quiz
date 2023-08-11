'use client'
import { useState, useEffect } from 'react'
import QuizItem from './QuizItem'
import { GeographyQuizQuestions } from '../../QuizData'

const QuizUI = () => {
  const [activeQuizItem, setActiveQuizItem] = useState(0)
  const [playerScore, setPlayerScore] = useState(0)

  return (
    <div>
      <QuizItem
        question={GeographyQuizQuestions[activeQuizItem].question}
        options={GeographyQuizQuestions[activeQuizItem].options}
        answer={GeographyQuizQuestions[activeQuizItem].answer}
        setActiveQuizItem={setActiveQuizItem}
        activeQuizItem={activeQuizItem}
        FakeQuizItem={GeographyQuizQuestions}
        playerScore={playerScore}
        setPlayerScore={setPlayerScore}
      />
    </div>
  )
}

export default QuizUI
