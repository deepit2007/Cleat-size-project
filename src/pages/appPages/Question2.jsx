import React from 'react'
import Qbar from '../../components/nav/questionBar'
import Question from '../../components/nav/Question'

const Question2 = () => {
  return (
    <div>   
        <Qbar />
        Question 2
        <Question questionId={2}/>
    </div>
  )
}

export default Question2