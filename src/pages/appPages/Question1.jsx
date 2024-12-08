import React from 'react'
import Qbar from '../../components/nav/questionBar'
import Question from '../../components/nav/Question'


const Question1 = () => {
  return (
    <div>
        <Qbar />
        Question 1
        <Question questionId={1}/>
        
    </div>
  )
}

export default Question1