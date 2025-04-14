import { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import QuizContext from '../context/QuizContext';
import he from 'he';

const Answers = ({ setTimeLeft }) => {
  const { state, dispatch } = useContext(QuizContext);
  const currentQuestion = state.questions[state.currentQuestionIndex];
  const correctAnswer = he.decode(currentQuestion.correct_answer);
  const shuffledAnswers = currentQuestion.shuffledAnswers.map((answer) => he.decode(answer));
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(-1);

  const handleAnswerSelection = (index) => {
    setSelectedAnswerIndex(index);
    const selectedAnswer = shuffledAnswers[index];
    const isCorrect = selectedAnswer === correctAnswer;

    setTimeout(() => {
      dispatch({
        type: 'SUBMIT_ANSWER',
        payload: { isCorrect },
      });
      if (state.currentQuestionIndex + 1 < state.questions.length) {
        dispatch({ type: 'NEXT_QUESTION' });
        setTimeLeft(30); // Reset thời gian khi trả lời
      } else {
        dispatch({ type: 'FINISH_QUIZ' });
      }
      setSelectedAnswerIndex(-1);
    }, 1000);
  };

  return (
    <div className="d-flex flex-column">
      {shuffledAnswers.map((answer, index) => {
        let className = `btn btn-outline-primary mb-2 ${
          selectedAnswerIndex === index
            ? answer === correctAnswer
              ? 'btn-success'
              : 'btn-danger'
            : ''
        }`;
        return (
          <motion.button
            key={index}
            whileHover={{ scale: 1.05 }}
            className={className}
            onClick={() => handleAnswerSelection(index)}
          >
            {he.decode(answer)}
          </motion.button>
        );
      })}
    </div>
  );
};

export default Answers;