import React from 'react'
import './Home.css'

const About = () => {
  return (
    <div className='home-container'>
      <h1>About this app</h1>
      <div className='home-header'>
        The questionnaire consists of 5 simple questions, each with 2-3 possible answers. Based on your answers, the website will recommend a pair of cleats that are best suited for you.
        This app is primarly directed to soccer athletes who do not know how to shop for cleats, or are confused on which type of cleats they should purchase.
      </div>
      <div className='home-header'>To get started, click the start button on the home page. When you select an answer, it will automatically move to the next question.
        Once you have answered the 5th question, you will be taken to the results page where you can see which cleats are best for you.
        If you would like, you can press the restart button to take the questionnaire again.
      </div>
    </div>
  )
}
export default About;