import { createContext, useReducer, useEffect } from 'react';

const initialState = {
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
  userAnswers: [],
  isQuizFinished: false,
  highScore: localStorage.getItem('quizHighScore') ? parseInt(localStorage.getItem('quizHighScore')) : 0,
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case 'SET_QUESTIONS':
      return { ...state, questions: action.payload };
    case 'NEXT_QUESTION':
      return { ...state, currentQuestionIndex: state.currentQuestionIndex + 1 };
    case 'SUBMIT_ANSWER':
      return {
        ...state,
        score: action.payload.isCorrect ? state.score + 1 : state.score,
        userAnswers: [...state.userAnswers, action.payload],
      };
    case 'FINISH_QUIZ':
      return { ...state, isQuizFinished: true };
    case 'UPDATE_HIGHSCORE':
      return { ...state, highScore: action.payload };
    case 'RESET_QUIZ':
      return {
        ...initialState,
        highScore: state.highScore,
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
  }, [state.isQuizFinished, state.score, state.highScore]);

  return <QuizContext.Provider value={{ state, dispatch }}>{children}</QuizContext.Provider>;
};

export default QuizContext;