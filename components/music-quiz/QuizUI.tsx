'use client'
import { useState, useEffect } from 'react'
import QuizItem from './QuizItem'
import { MusicQuizQuestions } from '../../QuizData'

const QuizUI = () => {
  const [activeQuizItem, setActiveQuizItem] = useState(0)
  const [playerScore, setPlayerScore] = useState(0)

  return (
    <div>
      <QuizItem
        question={MusicQuizQuestions[activeQuizItem].question}
        options={MusicQuizQuestions[activeQuizItem].options}
        answer={MusicQuizQuestions[activeQuizItem].answer}
        setActiveQuizItem={setActiveQuizItem}
        activeQuizItem={activeQuizItem}
        FakeQuizItem={MusicQuizQuestions}
        playerScore={playerScore}
        setPlayerScore={setPlayerScore}
      />
    </div>
  )
}

export default QuizUI
