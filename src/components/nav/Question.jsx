import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAnswer } from '../../../slices';
import './Question.css'; // Import the CSS file

const Question = ({ questionId }) => {
  const question = useSelector((state) =>
    state.questionAnswer.questions.find((q) => q.id === questionId)
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAnswerChange = (answer) => {
    dispatch(setAnswer({ id: questionId, answer }));
    // Navigate to the next question page
    if (questionId < 5) {
      navigate(`/Question${questionId + 1}`);
    } else {
      navigate('/Results');
    }
  };

  return (
    <div className="question-container">
      {question && (
        <div className="question-content">
          <h2 className="question-title">{question.question}</h2>
          <div className="options-container">
            {question.options.map((option) => (
              <label key={option} className="option-label">
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={option}
                  checked={question.answer === option}
                  onChange={() => handleAnswerChange(option)}
                  className="option-input"
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Question;