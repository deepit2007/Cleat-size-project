import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { resetAnswers } from '../../../slices';

const Results = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRestart = () => {
    dispatch(resetAnswers());
    navigate('/Question1');
  };

  return (
    <div>
      <h1>Results</h1>
      <p>Thank you for completing the questionnaire!</p>
      <Button type="default" onClick={handleRestart}>
        Restart
      </Button>
    </div>
  );
};

export default Results;