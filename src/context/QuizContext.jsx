import { createContext, useReducer, useEffect } from 'react';

const initialState = {
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
  userAnswers: [],
  isQuizFinished: false,
  highScore: localStorage.getItem('quizHighScore') ? parseInt(localStorage.getItem('quizHighScore')) : 0,
  streak: 0, // Theo dõi chuỗi trả lời đúng liên tiếp
  highestMedal: localStorage.getItem('highestMedal') || null, // Lưu huy chương cao nhất (gold, silver, copper, null)
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case 'SET_QUESTIONS':
      return { ...state, questions: action.payload };
    case 'NEXT_QUESTION':
      return { ...state, currentQuestionIndex: state.currentQuestionIndex + 1 };
    case 'SUBMIT_ANSWER':

      const isCorrect = action.payload.isCorrect;
      const newStreak = isCorrect ? state.streak + 1 : 0;
      let newHighestMedal = state.highestMedal;

      // Cập nhật huy chương dựa trên chuỗi trả lời đúng
      if (newStreak >= 10 && (!state.highestMedal || state.highestMedal === 'silver' || state.highestMedal === 'copper')) {
        newHighestMedal = 'gold';
      } else if (newStreak >= 9 && (!state.highestMedal || state.highestMedal === 'copper')) {
        newHighestMedal = 'silver';
      } else if (newStreak >= 5 && !state.highestMedal) {
        newHighestMedal = 'copper';
      }

      return {
        ...state,
        score: action.payload.isCorrect ? state.score + 1 : state.score,
        userAnswers: [...state.userAnswers, action.payload],
        streak: newStreak,
        highestMedal: newHighestMedal,
      };
    case 'FINISH_QUIZ':
      return { ...state, isQuizFinished: true };
    case 'UPDATE_HIGHSCORE':
      return { ...state, highScore: action.payload };
    case 'RESET_QUIZ':
      return {
        ...initialState,
        highScore: state.highScore,
        highestMedal: state.highestMedal, // Giữ huy chương cao nhất khi reset
      };
    default:
      return state;
  }
};

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  useEffect(() => {
    if (state.isQuizFinished && state.score > state.highScore) {
      dispatch({ type: 'UPDATE_HIGHSCORE', payload: state.score });
      localStorage.setItem('quizHighScore', state.score.toString());
    }
    if (state.highestMedal !== null && state.highestMedal !== localStorage.getItem('highestMedal')) {
      localStorage.setItem('highestMedal', state.highestMedal); // Lưu huy chương mới
    }
  }, [state.isQuizFinished, state.score, state.highScore, state.highestMedal]);

  return <QuizContext.Provider value={{ state, dispatch }}>{children}</QuizContext.Provider>;
};

export default QuizContext;