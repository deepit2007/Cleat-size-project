import { configureStore } from '@reduxjs/toolkit';
import questionAnswerReducer from './slices';

const store = configureStore({
  reducer: {
    questionAnswer: questionAnswerReducer,
  },
});

export default store;
