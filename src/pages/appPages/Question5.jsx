import React from 'react'
import Qbar from '../../components/nav/questionBar'
import Question from '../../components/nav/Question'
import { Button } from 'antd' 
import { Link } from 'react-router-dom'
import '../../components/nav/button.css'

const Question5 = () => {
  return (
    <div className='home-container'>
        <Qbar />
        <Question questionId={5}/>
        <div>
        <center>It is important to factor your budget when buying cleats. The higher end cleats are more expensive but more durable, suitable for competetive players. Lower end cleats may be better to consider if you only play recreationally, or are still growing.</center>
        </div>
        <div className='button1'>
        <Link to="/Results">    
          <Button type='primary'>Finalize</Button>
        </Link>  
        </div>
    </div>
  )
}

export default Question5