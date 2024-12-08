import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAnswer } from '../../../slices';

const Question = ({ questionId }) => {
  const question = useSelector((state) =>
    state.questionAnswer.questions.find((q) => q.id === questionId)
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAnswerChange = (answer) => {
    dispatch(setAnswer({ id: questionId, answer }));

    if (questionId < 5) {
      navigate(`/Question${questionId + 1}`);
    } else {
      navigate('/Results');
    }
  };

  return (
    <div>
      {question && (
        <div>
          <h2>{question.question}</h2>
          {question.options.map((option) => (
            <label key={option}>
              <input
                type="radio"
                name={`question-${question.id}`}
                value={option}
                checked={question.answer === option}
                onChange={() => handleAnswerChange(option)}
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default Question;