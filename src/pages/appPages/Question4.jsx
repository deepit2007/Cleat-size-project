import React from 'react'
import Qbar from '../../components/nav/questionBar'
import Question from '../../components/nav/Question'

const Question4 = () => {
  return (
    <div>
       <Qbar /> 
        Question 4
        <Question questionId={4}/>
    </div>
  )
}

export default Question4