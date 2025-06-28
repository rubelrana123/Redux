
import { createSlice } from '@reduxjs/toolkit'

import { quizdata } from '@/home/QuizData'
 
const initialState = {
  questions: quizdata,
  currentQuestionIndex: 0,
  userAnswer: Array(quizdata.length).fill(null),
};
export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setAnswer: (state, action) => {
      const { questionIndex, answer } = action.payload;
      state.userAnswer[questionIndex] = answer;
    },
    nextQuestion: (state) => {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1;
      }
    },
    previousQuestion: (state) => {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex -= 1;
      }
    },
  },
});

export const { setAnswer, nextQuestion ,previousQuestion} = quizSlice.actions;
export default quizSlice.reducer;