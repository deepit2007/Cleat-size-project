import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [
    { id: 1, question: 'What is your Gender?', options: ['Male', 'Female'], answer: '' },
    { id: 2, question: 'What is your age range?', options: ['15 and Under', '16 and Above'], answer: '' },
    { id: 3, question: 'What is your feet width?', options: ['Wide', 'Narrow', 'Normal'], answer: '' },
    { id: 4, question: 'What is your position on the field?', options: ['Attacker', 'Midfielder', 'Defender'], answer: '' },
    { id: 5, question: 'What is your budget?', options: ['Under $80', '$80-$120', 'Over $120'], answer: '' },
  ],
  recommendation: '',
  cleats: [
    { name: 'Nike Phantom GX Elite', tags: ['Over $80', 'Wide', 'Attacker'] },
    { name: 'Adidas Copa Sense .2', tags: ['Wide', 'Defender', '$80-$120'] },
    { name: 'Nike Tiempo Legend 9 Elite', tags: ['Normal', 'Defender', 'Over $120'] },
    { name: 'Adidas Predator Accuracy .1', tags: ['Narrow', 'Midfielder', 'Over $120'] },
    { name: 'Nike Mercurial Vapor 14 Elite', tags: ['Over $120', 'Attacker', 'Narrow'] },
    { name: 'Puma Future Z 1.1', tags: ['Midfielder', 'Over $120', 'Normal'] },
    { name: 'Puma Ultra 1.3', tags: ['Under $80', 'Defender', 'Normal'] },
    { name: 'Adidas X Ghosted .1', tags: ['Under $80', 'Attacker', 'Wide'] },
    { name: 'Nike Phantom GT Elite', tags: ['Midfielder', 'Over $120', 'Normal'] },
    { name: 'Adidas Nemeziz .1', tags: ['Under $80', 'Midfielder', 'Narrow'] },
      
  ] 
};

const getRecommendation = (answers, cleats) => {
  const tagCounts = cleats.map(cleat => ({
    name: cleat.name,
    count: cleat.tags.reduce((acc, tag) => acc + (answers.includes(tag) ? 1 : 0), 0),
  }));

  const recommendedCleat = tagCounts.reduce((max, cleat) => (cleat.count > max.count ? cleat : max), tagCounts[0]);

  return recommendedCleat.name;
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
      state.recommendation = '';
    },
    setRecommendation: (state) => {
      const answers = state.questions.map(q => q.answer);
      state.recommendation = getRecommendation(answers, state.cleats);
    },
  },
});

export const { setAnswer, addQuestion, removeQuestion, resetAnswers, setRecommendation } = questionAnswerSlice.actions;

export default questionAnswerSlice.reducer;