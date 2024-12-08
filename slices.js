import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [
    { id: 1, question: 'What is your Gender?', options: ['Male', 'Female'], answer: '' },
    { id: 2, question: 'What is your age range?', options: ['15 and Under', '16 and Above'], answer: '' },
    { id: 3, question: 'What is your feet width?', options: ['Wide', 'Narrow'], answer: '' },
    { id: 4, question: 'What is your psoition on the field?', options: ['Attacker', 'Midfield/Defense'], answer: '' },
    { id: 5, question: 'What is your budget?', options: ['$80 and Under', 'Over $80'], answer: '' },
  ],
};

const questionAnswerSlice = createSlice({
  name: 'questionAnswer',
  initialState,
  reducers: {
    setAnswer: (state, action) => {
      const { id, answer } = action.payload;
      const question = state.questions.find(q => q.id === id);
      if (question && question.options.includes(answer)) {
        question.answer = answer;
      }
    },
    addQuestion: (state, action) => {
      state.questions.push(action.payload);
    },
    removeQuestion: (state, action) => {
      state.questions = state.questions.filter(q => q.id !== action.payload);
    },
    resetAnswers: (state) => {
      state.questions.forEach(question => {
        question.answer = '';
      });
    },
  },
});

export const { setAnswer, addQuestion, removeQuestion, resetAnswers } = questionAnswerSlice.actions;

export default questionAnswerSlice.reducer;