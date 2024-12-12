import React from 'react'
import Qbar from '../../components/nav/questionBar'
import Question from '../../components/nav/Question'

const Question4 = () => {
  return (
    <div className='home-container'>
        <Qbar /> 
        <Question questionId={4}/>
        <center>The position you play in can also affect the type of cleats you should choose. For example, a forward should prioritize getting a cleat that is lightweight and provides good traction, while a defender may want a cleat that provides more protection and stability.</center>
    </div>
  )
}

export default Question4