'use client'
import { useState, useEffect } from 'react'
import QuizItem from './QuizItem'
import { HistoryQuizQuestions } from '../../QuizData'

const QuizUI = () => {
  const [activeQuizItem, setActiveQuizItem] = useState(0)
  const [playerScore, setPlayerScore] = useState(0)

  return (
    <div>
      <QuizItem
        question={HistoryQuizQuestions[activeQuizItem].question}
        options={HistoryQuizQuestions[activeQuizItem].options}
        answer={HistoryQuizQuestions[activeQuizItem].answer}
        setActiveQuizItem={setActiveQuizItem}
        activeQuizItem={activeQuizItem}
        FakeQuizItem={HistoryQuizQuestions}
        playerScore={playerScore}
        setPlayerScore={setPlayerScore}
      />
    </div>
  )
}

export default QuizUI
