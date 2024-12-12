import React from 'react'
import Qbar from '../../components/nav/questionBar'
import Question from '../../components/nav/Question'


const Question1 = () => {
  return (
    <div className='home-container'>
        <Qbar />
        <Question questionId={1}/>
        <center>Men and women are sized differently when it comes to footwear. For example, a size 6 in mens footwear would be larger than a size 6 in womens. It is important to take this into account.</center>
        
    </div>
  )
}

export default Question1