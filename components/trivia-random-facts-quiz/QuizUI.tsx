'use client'
import { useState, useEffect } from 'react'
import QuizItem from './QuizItem'
import { TriviaQuizQuestions } from '../../QuizData'

const QuizUI = () => {
  const [activeQuizItem, setActiveQuizItem] = useState(0)
  const [playerScore, setPlayerScore] = useState(0)

  return (
    <div>
      <QuizItem
        question={TriviaQuizQuestions[activeQuizItem].question}
        options={TriviaQuizQuestions[activeQuizItem].options}
        answer={TriviaQuizQuestions[activeQuizItem].answer}
        setActiveQuizItem={setActiveQuizItem}
        activeQuizItem={activeQuizItem}
        FakeQuizItem={TriviaQuizQuestions}
        playerScore={playerScore}
        setPlayerScore={setPlayerScore}
      />
    </div>
  )
}

export default QuizUI
