import React from 'react'
import Qbar from '../../components/nav/questionBar'
import Question from '../../components/nav/Question'

const Question3 = () => {
  return (
    <div>
        <Qbar />
        Question 3
        <Question questionId={3}/>
    </div>
  )
}

export default Question3