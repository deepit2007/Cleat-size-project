import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { resetAnswers, setRecommendation } from '../../../slices';

const Results = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const questions = useSelector((state) => state.questionAnswer.questions);
  const recommendation = useSelector((state) => state.questionAnswer.recommendation);

  React.useEffect(() => {
    dispatch(setRecommendation());
  }, [dispatch]);

  const handleRestart = () => {
    dispatch(resetAnswers());
    navigate('/Question1');
  };

  return (
    <div className='home-container'>
      <h1>Results</h1>
      <p><strong>Thank you for completing the questionnaire! Here are your selected options:</strong></p>
      
        {questions.map((question) => (
          <li key={question.id}>
            {question.question}: {question.answer}
          </li>
        ))}
      
      <h2><strong>Recommended Cleats:</strong> {recommendation}</h2>
      <Button type="primary" onClick={handleRestart}>
        Restart
      </Button>
    </div>
  );
};

export default Results;