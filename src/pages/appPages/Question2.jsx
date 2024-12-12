import React from 'react'
import Qbar from '../../components/nav/questionBar'
import Question from '../../components/nav/Question'

const Question2 = () => {
  return (
    <div className='home-container'>   
        <Qbar />
        <Question questionId={2}/>
        <center>Those who are not yet fully developed should choose size wisely, as to leave room to account for foot growth in the future.</center>
    </div>
  )
}

export default Question2