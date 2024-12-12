import React from 'react'
import Qbar from '../../components/nav/questionBar'
import Question from '../../components/nav/Question'

const Question3 = () => {
  return (
    <div className='home-container'>
        <Qbar />
        <Question questionId={3}/>
        <center>Certain models or cleat brands cater to those with wider feet width than others. It is important to take this into account when choosing a pair of cleats.</center>
    </div>
  )
}

export default Question3