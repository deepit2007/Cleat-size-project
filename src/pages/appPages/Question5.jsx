import React from 'react'
import Qbar from '../../components/nav/questionBar'
import Question from '../../components/nav/Question'


const Question5 = () => {
  return (
    <div>
        <Qbar />
        Question 5
        <Question questionId={5}/>
    </div>
  )
}

export default Question5